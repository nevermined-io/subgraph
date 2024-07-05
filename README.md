[![banner](https://raw.githubusercontent.com/nevermined-io/assets/main/images/logo/banner_logo.png)](https://nevermined.io)

# Nevermined Subgraph

> Nevermined subraphs for [The Graph](https://thegraph.com)

[![Tests](https://github.com/nevermined-io/subgraph/workflows/Build/badge.svg)](https://github.com/nevermined-io/subgraph/actions)

- [Nevermined Subgraph](#nevermined-subgraph)
  - [Requirements](#requirements)
  - [Subgraph naming convention](#subgraph-naming-convention)
  - [Deploying subgraphs locally](#deploying-subgraphs-locally)
  - [Deploying subgraphs to the hosted service](#deploying-subgraphs-to-the-hosted-service)
    - [Getting the cookie and account id](#getting-the-cookie-and-account-id)
  - [Custom Entities](#custom-entities)
    - [FulfilledCounter](#fulfilledcounter)
  - [Testing](#testing)
  - [References](#references)
  - [License](#license)

---

## Requirements

- Node v16
- yarn
- jq
- yq
- [Nevermined tools](https://github.com/nevermined-io/nvm-tools)

## Subgraph naming convention

In order to have different subraph version for different contracts versions it was important to incorporate both the _tag name_ and _version_ into the subgraph name.

Note that this name is purely conventional and is not related to how the _thegraph_ works. _thegraph_ sees subgraph names only as a flat string.

Example with the DID Registry subgraph deployed for mumbai public:

```text
nevermined-io/publicmumbaiv2didregistry

- nevermined-io/: organization. all nevermined core subgraphs
- public: the contract tag [common, public]
- mumbai: the network name [mumbai, polygon]
- version: the contracts major version [v2]
- contract name: the name of the contract for this subgraph (lower case)
```

> In this example the hosted url would be [`https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry`](https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry)

## Deploying subgraphs locally

```bash
# start nevermined-tools
$ ./nvm-tools start

# start the graph node locally
$ docker compose up

# copy the artifacts
$ ./nvm-tools copy-artifacts ./artifacts

# update network name, contract addresses, and start block number
$ yarn graph:update-network geth-localnet

# create the subgraphs
# we use `development` as the tag for local development contracts
# the contracts major version only
$ yarn graph:create-local development geth-localnet v3

# deploy the subgraphs
$ yarn graph:deploy-local development geth-localnet v3
```

## Deploying subgraphs to the hosted service

```bash
# you need to get the access token from https://thegraph.com/hosted-service/dashboard and authenticate
$ yarn graph auth --product hosted-service <access_token>

// NEW WAY
$ yarn graph auth --studio

# download the artifacts
$ yarn artifacts:download v3.2.1 mumbai public

# update network name, contract addresses, and start block number
$ yarn graph:update-network mumbai

# create the subgraphs
# usage yarn graph:create-hosted <tag> <network> <version> <cookie> <account id>
$ yarn graph:create-hosted public mumbai v3 "explorerSession_v24=s%3A6zVr0-om..." "MDEy..."

# deploy the subgraphs
$ yarn graph:deploy-hosted public mumbai v3

// NEW WAY
$ yarn graph:deploy-studio public mumbai v3
```

### Getting the cookie and account id

The hosted service forces us to create the subgraphs through the online dashboard https://thegraph.com/hosted-service/dashboard.

In order to automate the creation of the subgraphs in the hosted service we need a session _cookie_ and the _account id_. To get them:

1. Go to the dashboard and login
2. Open the browser networking dev tools
3. Create a test subgraph with any name
4. Check the `POST` request to https://api.thegraph.com/explorer/graphql
5. Get the cookie from the request headers
6. Get the account id from the request body

## Custom Entities

This is a list of custom entities that are not coming from the events

### FulfilledCounter

```graphql
type FulfilledCounter @entity {
  id: Bytes!
  value: Int!
}
```

Available on contracts:

- LockPaymentCondition
- TransferNFTCondition
- TransferNFT721Condition
- AccessCondition
- EscrowPaymentCondition

Example: [https://api.thegraph.com/subgraphs/name/nevermined-io/stagingarbitrum-goerliv3transfernft721condition](https://api.thegraph.com/subgraphs/name/nevermined-io/stagingarbitrum-goerliv3transfernft721condition/graphql?query=query+MyQuery+%7B%0A++fulfilledCounters+%7B%0A++++value%0A++%7D%0A%7D)

## Testing

```bash

# deploy subgraphs locally (see above)

# run the tests
$ export SEED_WORDS="<add your mnemonic here>"
$ yarn test
```

## References

- [https://thegraph.com/docs/developer/create-subgraph-hosted](https://thegraph.com/docs/developer/create-subgraph-hosted)
- [https://thegraph.academy/developers/local-development/](https://thegraph.academy/developers/local-development/)

## License

```
Copyright 2020 Nevermined AG

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
