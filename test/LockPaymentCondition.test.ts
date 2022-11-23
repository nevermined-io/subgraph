import { assert } from 'chai'
import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject } from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import ws from 'ws'

import { Account, DDO, MetaData, Nevermined } from '@nevermined-io/nevermined-sdk-js'
import { didZeroX, zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils'

import { config } from './config'
import { getFulfilleds } from '../src/LockPaymentCondition'
import { getMetadata } from './utils'
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards'
import { decodeJwt } from 'jose'
import BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber'
import { getRoyaltyAttributes, RoyaltyKind } from '@nevermined-io/nevermined-sdk-js/dist/node/nevermined/Assets'


let nevermined: Nevermined
let publisher: Account
let consumer: Account
let wsClient: ApolloClient<NormalizedCacheObject>
let metadata: MetaData
let ddo: DDO
let agreementId: string
let subgraphHttpUrl: string
let subgraphWsUrl: string

// TODO: Re-enable once the sdk supports contracts 2.2
describe.skip('LockPaymentCondition', () => {
    before(async () => {
        nevermined = await Nevermined.getInstance(config)
            ;[publisher, consumer] = await nevermined.accounts.list()

        const networkName = (await nevermined.keeper.getNetworkName()).toLowerCase()
        subgraphHttpUrl = `http://localhost:9000/subgraphs/name/nevermined-io/development${networkName}v2lockpaymentcondition`
        subgraphWsUrl = `ws://localhost:9001/subgraphs/name/nevermined-io/development${networkName}v2lockpaymentcondition`

        metadata = getMetadata()

        const clientAssertion = await nevermined.utils.jwt.generateClientAssertion(publisher)
        await nevermined.marketplace.login(clientAssertion)
        const payload = decodeJwt(config.marketplaceAuthToken!)
        metadata.userId = payload.sub

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

    it('should register an NFT', async () => {
        const royaltyAttributes = getRoyaltyAttributes(
            nevermined,
            RoyaltyKind.Standard,
            0
        )

        ddo = await nevermined.nfts.createWithRoyalties(
            metadata,
            publisher,
            BigNumber.from(10),
            royaltyAttributes,
            new AssetRewards(new Map([
                [publisher.getId(), BigNumber.from(10)],
                [consumer.getId(), BigNumber.from(10)],
            ]))
        )
        assert.isDefined(ddo)
    })

    it('should order an NFT', async () => {
        await consumer.requestTokens(100)
        agreementId = await nevermined.nfts.order(ddo.id, BigNumber.from(1), consumer)
        assert.isDefined(agreementId)
    })

    it('should subscribe and wait for LockPaymentCondition', async () => {
        const query = `
                subscription($agreementId: Bytes) {
                    fulfilleds(where: {_agreementId: $agreementId}) {
                        _did,
                        _agreementId,
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
                    if (x.data.fulfilleds !== null && x.data.fulfilleds.length > 0) {
                        resolve(x)
                    }
                },
                err => reject(err),
            )
        })
        const result: any = await promise
        const event = result.data.fulfilleds[0]
        assert.equal(event._did, didZeroX(ddo.id))
        assert.equal(event._agreementId, agreementId)
    })

    it('should query the LockPaymentCondition Fulfilled event', async () => {
        const response = await getFulfilleds(
            subgraphHttpUrl,
            {
                where: {
                    _agreementId: zeroX(agreementId),
                },

            },
            {
                _agreementId: true,
                _did: true,
                _conditionId: true,
                _rewardAddress: true,
                _tokenAddress: true,
                _receivers: true,
                _amounts: true,
            },
        )
        const event = response.pop()
        assert.isDefined(event)
        assert.equal(event!._agreementId, agreementId)
        assert.equal(event!._did, didZeroX(ddo.id))
        assert.equal(event!._receivers[0], [publisher.getId().toLowerCase()][0])
        assert.deepEqual(event!._amounts.map(a => a!.toNumber()), [10, 10])
    })
})