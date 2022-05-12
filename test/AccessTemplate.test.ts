import { assert } from 'chai'
import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject, createHttpLink} from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import ws from 'ws'
import Web3 from 'web3'

import { Account, Keeper, Nevermined} from '@nevermined-io/nevermined-sdk-js'
import DIDRegistry from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/DIDRegistry'
import { didZeroX, generateId, zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils'
import { EventLog } from 'web3-core'

import { config } from './config'
import { getAgreementCreateds } from '../src/AccessTemplate'
import { AccessCondition, EscrowPaymentCondition, LockPaymentCondition } from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/conditions'
import { AccessTemplate } from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/templates'


const amounts = [10]

let receivers: string[]
let nevermined: Nevermined
let didRegistry: DIDRegistry
let keeper: Keeper
let account: Account
let consumer: Account
let expectedEvent: EventLog
let client: ApolloClient<NormalizedCacheObject>
let wsClient: ApolloClient<NormalizedCacheObject>
let did: string
let didSeed: string
let agreementId: string
let conditionIdAccess: string
let conditionIdLock: string
let conditionIdEscrow: string
let accessCondition: AccessCondition
let lockPaymentCondition: LockPaymentCondition
let escrowPaymentCondition: EscrowPaymentCondition
let accessTemplate: AccessTemplate


describe('AccessTemplate', () => {
    before(async () => {
        nevermined = await Nevermined.getInstance(config)
        ;({ keeper } = nevermined)
        ;[account, consumer] = await nevermined.accounts.list()
        receivers = [account.getId()]
        ;({accessCondition, lockPaymentCondition, escrowPaymentCondition} = keeper.conditions)
        ;({accessTemplate} = keeper.templates)


        agreementId = generateId()
        didSeed = generateId()
        did = await keeper.didRegistry.hashDID(didSeed, account.getId())



        client = new ApolloClient({
            link: createHttpLink({
                uri: 'http://localhost:9000/subgraphs/name/neverminedio/AccessTemplate',
                fetch: fetch,
            }),
            cache: new InMemoryCache(),
        })

        const subscriptionClient = new SubscriptionClient(
            'ws://localhost:9001/subgraphs/name/neverminedio/AccessTemplate',
            {
                reconnect: true,
            },
            ws,

        )
        const webSocketLink = new WebSocketLink(subscriptionClient)
        wsClient = new ApolloClient({
            link: webSocketLink,
            cache: new InMemoryCache(),
        })
    })

    describe('AgreementCreated', () => {
        it('should register an attribute', async () => {
            const checksum = generateId()
            const data = 'data'
            await keeper.didRegistry.registerAttribute(
                didSeed,
                checksum,
                [],
                data,
                account.getId(),
            )
        })

        it('should generate the condition IDs', async () => {
            conditionIdAccess = await accessCondition.generateIdHash(
                agreementId,
                did,
                consumer.getId(),
            )
            conditionIdLock = await lockPaymentCondition.generateIdHash(
                agreementId,
                did,
                escrowPaymentCondition.getAddress(),
                keeper.token.getAddress(),
                amounts,
                receivers,
            )
            conditionIdEscrow = await escrowPaymentCondition.generateIdHash(
                agreementId,
                did,
                amounts,
                receivers,
                consumer.getId(),
                escrowPaymentCondition.getAddress(),
                keeper.token.getAddress(),
                conditionIdLock,
                conditionIdAccess,
            )
        })

        it('should create a new agreement', async () => {
            const receipt = await accessTemplate.createAgreement(
                agreementId,
                did,
                [conditionIdAccess, conditionIdLock, conditionIdEscrow],
                [0, 0, 0],
                [0, 0, 0],
                consumer.getId(),
                account,
            )

            assert.isTrue(receipt.status)
            expectedEvent = receipt.events.AgreementCreated
        })

        it('should subscribe and wait for the event', async () => {
            const query = `
                subscription($agreementId: Bytes) {
                    agreementCreateds(where: {_agreementId: $agreementId}) {
                        _agreementId,
                        _did,
                        _accessConsumer,
                        _accessProvider,
                        _timeLocks,
                        _timeOuts,
                    }
                }
            `
            const observable = wsClient.subscribe({
                query: gql(query),
                variables: {
                    agreementId: zeroX(agreementId),
                },
            })

            const promise = new Promise((resolve, reject) => {
                observable.subscribe(
                    x => {
                        if (x.data.agreementCreateds !== null && x.data.agreementCreateds.length > 0) {
                            resolve(x)
                        }
                    },
                    err => reject(err),
                )
            })
            const result: any = await promise
            const eventData = result.data.agreementCreateds[0]
            const expectedEventData = expectedEvent.returnValues

            assert.strictEqual(eventData._agreementId, expectedEventData._agreementId)
            assert.strictEqual(eventData._did, expectedEventData._did)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._accessConsumer),
                Web3.utils.toChecksumAddress(expectedEventData._accessConsumer),
            )
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._accessProvider),
                Web3.utils.toChecksumAddress(expectedEventData._accessProvider),
            )
            assert.deepEqual(eventData._timeLocks, expectedEventData._timeLocks)
            assert.deepEqual(eventData._timeOuts, expectedEventData._timeOuts)
        })

        it('should query for the event', async () => {
            const query = `
            query($agreementId: Bytes) {
                agreementCreateds(where: {_agreementId: $agreementId}) {
                    _agreementId,
                    _did,
                    _accessConsumer,
                    _accessProvider,
                    _timeLocks,
                    _timeOuts,
                }
            }
            `
            const result = await client.query({
                query: gql(query),
                variables: {
                    agreementId: zeroX(agreementId),
                },

            })
            const eventData = result.data.agreementCreateds[0]
            const expectedEventData = expectedEvent.returnValues

            assert.strictEqual(eventData._agreementId, expectedEventData._agreementId)
            assert.strictEqual(eventData._did, expectedEventData._did)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._accessConsumer),
                Web3.utils.toChecksumAddress(expectedEventData._accessConsumer),
            )
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._accessProvider),
                Web3.utils.toChecksumAddress(expectedEventData._accessProvider),
            )
            assert.deepEqual(eventData._timeLocks, expectedEventData._timeLocks)
            assert.deepEqual(eventData._timeOuts, expectedEventData._timeOuts)
        })

        it('it should query using the subgraph client', async () => {
            const response = await getAgreementCreateds(
                'http://localhost:9000/subgraphs/name/neverminedio/AccessTemplate',
                {
                    where: {
                        _agreementId: zeroX(agreementId),
                    },

                },
                {
                    _agreementId: true,
                    _did: true,
                    _accessConsumer: true,
                    _accessProvider: true,
                    _timeLocks: true,
                    _timeOuts: true,
                },
            )
            const eventData = response[0]
            const expectedEventData = expectedEvent.returnValues

            assert.strictEqual(eventData._agreementId, expectedEventData._agreementId)
            assert.strictEqual(eventData._did, expectedEventData._did)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._accessConsumer),
                Web3.utils.toChecksumAddress(expectedEventData._accessConsumer),
            )
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._accessProvider),
                Web3.utils.toChecksumAddress(expectedEventData._accessProvider),
            )
            assert.deepEqual(eventData._timeLocks, expectedEventData._timeLocks)
            assert.deepEqual(eventData._timeOuts, expectedEventData._timeOuts)
        })
    })
})