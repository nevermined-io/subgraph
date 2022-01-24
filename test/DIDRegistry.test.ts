import { assert } from 'chai'
import fetch from 'node-fetch'
import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject, createHttpLink} from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import ws from 'ws'
import Web3 from 'web3'

import { Account, Nevermined} from '@nevermined-io/nevermined-sdk-js'
import DIDRegistry from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/DIDRegistry'
import { didZeroX, generateId } from '@nevermined-io/nevermined-sdk-js/dist/node/utils'
import { EventLog } from 'web3-core'

import { config } from './config'


let nevermined: Nevermined
let didRegistry: DIDRegistry
let account: Account
let expectedEvent: EventLog
let client: ApolloClient<NormalizedCacheObject>
let wsClient: ApolloClient<NormalizedCacheObject>
let did: string


describe('DIDRegistry', () => {
    before(async () => {
        nevermined = await Nevermined.getInstance(config)
        ;({ didRegistry } = nevermined.keeper)
        ;[account] = await nevermined.accounts.list()

        client = new ApolloClient({
            link: createHttpLink({
                uri: 'http://localhost:9000/subgraphs/name/neverminedio/DIDRegistry',
                fetch: fetch,
            }),
            cache: new InMemoryCache(),
        })

        const subscriptionClient = new SubscriptionClient(
            'ws://localhost:9001/subgraphs/name/neverminedio/DIDRegistry',
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

    describe('DIDAttributeRegistered', () => {
        it('should register an attribute', async () => {
            const didSeed = generateId()
            did = await didRegistry.hashDID(didSeed, account.getId())
            const checksum = generateId()
            const data = 'data'
            const receipt = await didRegistry.registerAttribute(
                didSeed,
                checksum,
                [],
                data,
                account.getId(),
            )
            assert.isTrue(receipt.status)
            expectedEvent = receipt.events.DIDAttributeRegistered
        })

        it('should subscribe and wait for the event', async () => {
            const query = `
                subscription($did: Bytes) {
                    didattributeRegistereds(where: {_did: $did}) {
                        _did,
                        _owner,
                        _checksum,
                        _value,
                        _lastUpdatedBy,
                        _blockNumberUpdated,
                    }
                }
            `
            const observable = wsClient.subscribe({
                query: gql(query),
                variables: {
                    did: didZeroX(did),
                },
            })

            const promise = new Promise((resolve, reject) => {
                observable.subscribe(
                    x => {
                        if (x.data.didattributeRegistereds !== null && x.data.didattributeRegistereds.length > 0) {
                            resolve(x)
                        }
                    },
                    err => reject(err),
                )
            })
            const result: any = await promise
            const eventData = result.data.didattributeRegistereds[0]
            const expectedEventData = expectedEvent.returnValues

            assert.strictEqual(eventData._did, expectedEventData._did)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._owner),
                Web3.utils.toChecksumAddress(expectedEventData._owner),
            )
            assert.strictEqual(eventData._checksum, expectedEventData._checksum)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._lastUpdatedBy),
                Web3.utils.toChecksumAddress(expectedEventData._lastUpdatedBy),
            )
            assert.strictEqual(eventData._blockNumberUpdated, expectedEventData._blockNumberUpdated)



        })

        it('should query for the event', async () => {
            const query = `
                query($did: Bytes) {
                    didattributeRegistereds(where: {_did: $did}) {
                        _did,
                        _owner,
                        _checksum,
                        _value,
                        _lastUpdatedBy,
                        _blockNumberUpdated,
                    }
                }
            `
            const result = await client.query({
                query: gql(query),
                variables: {
                    did: didZeroX(did),
                },

            })
            const eventData = result.data.didattributeRegistereds[0]
            const expectedEventData = expectedEvent.returnValues

            assert.strictEqual(eventData._did, expectedEventData._did)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._owner),
                Web3.utils.toChecksumAddress(expectedEventData._owner),
            )
            assert.strictEqual(eventData._checksum, expectedEventData._checksum)
            assert.strictEqual(
                Web3.utils.toChecksumAddress(eventData._lastUpdatedBy),
                Web3.utils.toChecksumAddress(expectedEventData._lastUpdatedBy),
            )
            assert.strictEqual(eventData._blockNumberUpdated, expectedEventData._blockNumberUpdated)
        })
    })
})