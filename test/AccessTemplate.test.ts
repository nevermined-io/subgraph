import { assert } from 'chai'
import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject, createHttpLink } from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import ws from 'ws'
import Web3 from 'web3'

import { Account, Keeper, Nevermined } from '@nevermined-io/nevermined-sdk-js'
import { didZeroX, generateId, zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils'
import { EventLog } from 'web3-core'

import { config } from './config'
import { getAgreementCreateds } from '../src/AccessTemplate'
import { AccessCondition, EscrowPaymentCondition, LockPaymentCondition } from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/conditions'
import { AccessTemplate } from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/templates'
import Token from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/Token'
import BigNumber from 'bignumber.js'

const amounts = [new BigNumber(10)]

let receivers: string[]
let nevermined: Nevermined
let keeper: Keeper
let account: Account
let consumer: Account
let expectedEvent: EventLog
let client: ApolloClient<NormalizedCacheObject>
let wsClient: ApolloClient<NormalizedCacheObject>
let did: string
let didSeed: string
let agreementIdSeed: string
let agreementId: string
let conditionIdAccess: [string, string]
let conditionIdLock: [string, string]
let conditionIdEscrow: [string, string]
let accessCondition: AccessCondition
let lockPaymentCondition: LockPaymentCondition
let escrowPaymentCondition: EscrowPaymentCondition
let accessTemplate: AccessTemplate
let token: Token
let subgraphHttpUrl: string
let subgraphWsUrl: string


describe('AccessTemplate', () => {
    before(async () => {
        nevermined = await Nevermined.getInstance(config)
            ; ({ keeper } = nevermined)
            ;[account, consumer] = await nevermined.accounts.list()
        receivers = [account.getId()]
            ; ({ accessCondition, lockPaymentCondition, escrowPaymentCondition } = keeper.conditions)
            ; ({ accessTemplate } = keeper.templates)
            ; ({ token } = keeper)

        const networkName = (await keeper.getNetworkName()).toLowerCase()
        subgraphHttpUrl = `http://localhost:9000/subgraphs/name/nevermined-io/development${networkName}v2accesstemplate`
        subgraphWsUrl = `ws://localhost:9001/subgraphs/name/nevermined-io/development${networkName}v2accesstemplate`

        agreementIdSeed = generateId()
        agreementId = await nevermined.keeper.agreementStoreManager.agreementId(
            agreementIdSeed,
            account.getId()
        )
        didSeed = generateId()
        did = await keeper.didRegistry.hashDID(didSeed, account.getId())



        client = new ApolloClient({
            link: createHttpLink({
                uri: subgraphHttpUrl,
                fetch: fetch,
            }),
            cache: new InMemoryCache(),
        })

        const subscriptionClient = new SubscriptionClient(
            subgraphWsUrl,
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
            conditionIdAccess = await accessCondition.generateIdWithSeed(
                agreementId,
                await accessCondition.hashValues(did, consumer.getId())
            )
            conditionIdLock = await lockPaymentCondition.generateIdWithSeed(
                agreementId,
                await lockPaymentCondition.hashValues(
                    did,
                    escrowPaymentCondition.getAddress(),
                    token.getAddress(),
                    amounts,
                    receivers
                )
            )
            conditionIdEscrow = await escrowPaymentCondition.generateIdWithSeed(
                agreementId,
                await escrowPaymentCondition.hashValues(
                    did,
                    amounts,
                    receivers,
                    consumer.getId(),
                    escrowPaymentCondition.getAddress(),
                    token.getAddress(),
                    conditionIdLock[1],
                    conditionIdAccess[1],
                )
            )
        })

        it('should create a new agreement', async () => {
            const receipt = await accessTemplate.createAgreement(
                agreementIdSeed,
                did,
                [conditionIdAccess[0], conditionIdLock[0], conditionIdEscrow[0]],
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

        it('it should query the agreementId using the subgraph client', async () => {
            const response = await getAgreementCreateds(
                subgraphHttpUrl,
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

        it('it should query the agreements for a did using the subgraph client', async () => {
            const response = await getAgreementCreateds(
                subgraphHttpUrl,
                {
                    where: {
                        _did: didZeroX(did),
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