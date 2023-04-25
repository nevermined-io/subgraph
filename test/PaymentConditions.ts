import { assert } from "chai";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  NormalizedCacheObject,
} from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "ws";

import {
  Account,
  AssetAttributes,
  AssetPrice,
  DDO,
  getRoyaltyAttributes,
  MetaData,
  Nevermined,
  NFTAttributes,
  PublishMetadata,
  RoyaltyKind,
  didZeroX,
  zeroX,
  BigNumber,
} from "@nevermined-io/sdk";

import { config } from "./config";
import { getMetadata } from "./utils";
import { decodeJwt } from "jose";

import * as subgraphs from "../src";

describe("Payment Conditions", () => {
  let nevermined: Nevermined;
  let publisher: Account;
  let consumer: Account;
  let wsClient: ApolloClient<NormalizedCacheObject>;
  let metadata: MetaData;
  let ddo: DDO;
  let agreementId: string;
  let networkName: string;

  before(async () => {
    nevermined = await Nevermined.getInstance(config);
    [publisher, consumer] = await nevermined.accounts.list();

    networkName = (await nevermined.keeper.getNetworkName()).toLowerCase();
  });

  describe("LockPaymentCondition", () => {
    let subgraphHttpUrl: string;
    let subgraphWsUrl: string;

    before(async () => {
      subgraphHttpUrl = `http://localhost:8000/subgraphs/name/nevermined-io/development${networkName}v3lockpaymentcondition`;
      subgraphWsUrl = `ws://localhost:8001/subgraphs/name/nevermined-io/development${networkName}v3lockpaymentcondition`;

      metadata = getMetadata();

      const clientAssertion =
        await nevermined.utils.jwt.generateClientAssertion(publisher);
      await nevermined.services.marketplace.login(clientAssertion);
      const payload = decodeJwt(config.marketplaceAuthToken!);
      metadata.userId = payload.sub;

      const subscriptionClient = new SubscriptionClient(
        subgraphWsUrl,
        {
          reconnect: true,
        },
        ws
      );
      const webSocketLink = new WebSocketLink(subscriptionClient);
      wsClient = new ApolloClient({
        link: webSocketLink,
        cache: new InMemoryCache(),
      });
    });

    it("should register an NFT", async () => {
      const royaltyAttributes = getRoyaltyAttributes(
        nevermined,
        RoyaltyKind.Standard,
        0
      );

      const assetPrice = new AssetPrice(
        new Map([
          [publisher.getId(), BigNumber.from(10)],
          [consumer.getId(), BigNumber.from(10)],
        ])
      );

      const assetAttributes = AssetAttributes.getInstance({
        metadata,
        price: assetPrice,
        serviceTypes: ["nft-sales", "nft-access"],
        providers: [config.neverminedNodeAddress!],
      });
      const nftAttributes = NFTAttributes.getNFT1155Instance({
        ...assetAttributes,
        nftContractAddress: nevermined.nfts1155.nftContract.address,
        cap: BigNumber.from(10),
        amount: BigNumber.from(1),
        royaltyAttributes,
        preMint: true,
      });
      ddo = await nevermined.nfts1155.create(
        nftAttributes,
        publisher,
        PublishMetadata.IPFS
      );
      assert.isDefined(ddo);
    });

    it("should order an NFT", async () => {
      await consumer.requestTokens(100);
      agreementId = await nevermined.nfts1155.order(
        ddo.id,
        BigNumber.from(1),
        consumer
      );
      assert.isDefined(agreementId);
    });

    it("should subscribe and wait for LockPaymentCondition", async () => {
      const query = `
                subscription($agreementId: Bytes) {
                    fulfilleds(where: {_agreementId: $agreementId}) {
                        _did,
                        _agreementId,
                    }
                }
            `;
      const observable = wsClient.subscribe({
        query: gql(query),
        variables: {
          agreementId: zeroX(agreementId),
        },
      });

      const promise = new Promise((resolve, reject) => {
        observable.subscribe(
          (x) => {
            if (x.data.fulfilleds !== null && x.data.fulfilleds.length > 0) {
              resolve(x);
            }
          },
          (err) => reject(err)
        );
      });
      const result: any = await promise;
      const event = result.data.fulfilleds[0];
      assert.equal(event._did, didZeroX(ddo.id));
      assert.equal(event._agreementId, agreementId);
    });

    it("should query the LockPaymentCondition Fulfilled event", async () => {
      const response = await subgraphs.LockPaymentCondition.getFulfilleds(
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
        }
      );
      const event = response.pop();
      assert.isDefined(event);
      assert.equal(event!._agreementId, agreementId);
      assert.equal(event!._did, didZeroX(ddo.id));
      assert.equal(event!._receivers[0], [publisher.getId().toLowerCase()][0]);
      assert.deepEqual(
        event!._amounts.map((a) => a!.toNumber()),
        [10, 10]
      );
    });
  });

  describe("EscrowPaymentCondition", () => {
    let subgraphHttpUrl: string;
    let subgraphWsUrl: string;

    before(async () => {
      subgraphHttpUrl = `http://localhost:8000/subgraphs/name/nevermined-io/development${networkName}v3escrowpaymentcondition`;
      subgraphWsUrl = `ws://localhost:8001/subgraphs/name/nevermined-io/development${networkName}v3escrowpaymentcondition`;

      const subscriptionClient = new SubscriptionClient(
        subgraphWsUrl,
        {
          reconnect: true,
        },
        ws
      );
      const webSocketLink = new WebSocketLink(subscriptionClient);
      wsClient = new ApolloClient({
        link: webSocketLink,
        cache: new InMemoryCache(),
      });
    });

    it("should claim the NFT", async () => {
      const result = await nevermined.nfts1155.claim(
        agreementId,
        publisher.getId(),
        consumer.getId(),
        BigNumber.from(1)
      );

      assert.isTrue(result);
    });

    it("should subscribe and wait for EscrowPaymentCondition", async () => {
      const query = `
                subscription($agreementId: Bytes) {
                    fulfilleds(where: {_agreementId: $agreementId}) {
                        _agreementId,
                    }
                }
            `;
      const observable = wsClient.subscribe({
        query: gql(query),
        variables: {
          agreementId: zeroX(agreementId),
        },
      });

      const promise = new Promise((resolve, reject) => {
        observable.subscribe(
          (x) => {
            if (x.data.fulfilleds !== null && x.data.fulfilleds.length > 0) {
              resolve(x);
            }
          },
          (err) => reject(err)
        );
      });
      const result: any = await promise;
      const event = result.data.fulfilleds[0];
      assert.equal(event._agreementId, agreementId);
    });

    it("should query the EscrowPaymentCondition Fulfilled event", async () => {
      const response = await subgraphs.EscrowPaymentCondition.getFulfilleds(
        subgraphHttpUrl,
        {
          where: {
            _agreementId: zeroX(agreementId),
          },
        },
        {
          _agreementId: true,
          _amounts: true,
          _conditionId: true,
          _receivers: true,
          _tokenAddress: true,
        }
      );
      const event = response.pop();
      assert.isDefined(event);
      assert.equal(event!._agreementId, agreementId);
      assert.equal(event!._receivers[0], [publisher.getId().toLowerCase()][0]);
      assert.deepEqual(
        event!._amounts.map((a) => a!.toNumber()),
        [10, 10]
      );
    });
  });
});
