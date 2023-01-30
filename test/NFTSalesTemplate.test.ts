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
  BigNumber,
  DDO,
  didZeroX,
  getRoyaltyAttributes,
  MetaData,
  Nevermined,
  NFTAttributes,
  PublishMetadata,
  RoyaltyKind,
  zeroX,
} from "@nevermined-io/nevermined-sdk-js";

import { config } from "./config";
import { getAgreementCreateds } from "../src/NFTSalesTemplate";
import { getMetadata } from "./utils";
import { decodeJwt } from "jose";

let nevermined: Nevermined;
let publisher: Account;
let consumer: Account;
let wsClient: ApolloClient<NormalizedCacheObject>;
let metadata: MetaData;
let ddo: DDO;
let agreementId: string;
let subgraphHttpUrl: string;
let subgraphWsUrl: string;

describe("NFTSalesTemplate", () => {
  before(async () => {
    nevermined = await Nevermined.getInstance(config);
    [publisher, consumer] = await nevermined.accounts.list();

    metadata = getMetadata();

    const networkName = (
      await nevermined.keeper.getNetworkName()
    ).toLowerCase();
    subgraphHttpUrl = `http://localhost:8000/subgraphs/name/nevermined-io/development${networkName}v3nftsalestemplate`;
    subgraphWsUrl = `ws://localhost:8001/subgraphs/name/nevermined-io/development${networkName}v3nftsalestemplate`;

    const clientAssertion = await nevermined.utils.jwt.generateClientAssertion(
      publisher
    );
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

  it("should subscribe and wait for NFTSalesTemplate event", async () => {
    const query = `
                subscription($agreementId: Bytes) {
                    agreementCreateds(where: {_agreementId: $agreementId}) {
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
          if (
            x.data.agreementCreateds !== null &&
            x.data.agreementCreateds.length > 0
          ) {
            resolve(x);
          }
        },
        (err) => reject(err)
      );
    });
    const result: any = await promise;
    const event = result.data.agreementCreateds[0];
    assert.equal(event._did, didZeroX(ddo.id));
    assert.equal(event._agreementId, agreementId);
  });

  it("should query the NFTSalesTemplate agreement created event", async () => {
    const response = await getAgreementCreateds(
      subgraphHttpUrl,
      {
        where: {
          _agreementId: zeroX(agreementId),
        },
      },
      {
        _accessConsumer: true,
        _accessProvider: true,
        _agreementId: true,
        _conditionIdSeeds: true,
        _conditionIds: true,
        _creator: true,
        _did: true,
        _idSeed: true,
        _timeLocks: true,
        _timeOuts: true,
      }
    );
    const event = response.pop();
    assert.isDefined(event);
    assert.equal(event!._agreementId, agreementId);
    assert.equal(event!._did, didZeroX(ddo.id));
  });
});
