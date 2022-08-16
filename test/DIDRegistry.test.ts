import { assert } from 'chai'
import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject, createHttpLink } from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import ws from 'ws'
import Web3 from 'web3'

import { Account, Nevermined } from '@nevermined-io/nevermined-sdk-js'
import DIDRegistry from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/DIDRegistry'
import { didZeroX, generateId } from '@nevermined-io/nevermined-sdk-js/dist/node/utils'
import { EventLog } from 'web3-core'

import { config } from './config'
import { getDIDAttributeRegistereds } from '../src/DIDRegistry'


let nevermined: Nevermined
let didRegistry: DIDRegistry
let account: Account
let expectedEvent: EventLog
let client: ApolloClient<NormalizedCacheObject>
let wsClient: ApolloClient<NormalizedCacheObject>
let did: string
let subgraphHttpUrl: string
let subgraphWsUrl: string

describe('DIDRegistry', () => {
    before(async () => {
        nevermined = await Nevermined.getInstance(config)
            ; ({ didRegistry } = nevermined.keeper)
            ;[account] = await nevermined.accounts.list()

        const networkName = (await nevermined.keeper.getNetworkName()).toLowerCase()
        subgraphHttpUrl = `http://localhost:9000/subgraphs/name/nevermined-io/development${networkName}v2didregistry`
        subgraphWsUrl = `ws://localhost:9001/subgraphs/name/nevermined-io/development${networkName}v2didregistry`

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
            expectedEvent = receipt.events!.DIDAttributeRegistered
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

        it('it should query using the subgraph client', async () => {
            const response = await getDIDAttributeRegistereds(
                subgraphHttpUrl,
                {
                    where: {
                        _did: didZeroX(did),
                    },

                },
                {
                    _did: true,
                    _owner: true,
                    _checksum: true,
                    _value: true,
                    _lastUpdatedBy: true,
                    _blockNumberUpdated: true,
                },
            )
            const eventData = response[0]
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
            assert.strictEqual(eventData._blockNumberUpdated.str, expectedEventData._blockNumberUpdated)
        })
    })
})