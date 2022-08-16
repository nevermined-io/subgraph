[![banner](https://raw.githubusercontent.com/nevermined-io/assets/main/images/logo/banner_logo.png)](https://nevermined.io)

# Nevermined Subgraph

> Nevermined subraph for [The Graph](https://thegraph.com)

[![Tests](https://github.com/nevermined-io/subgraph/workflows/Build/badge.svg)](https://github.com/nevermined-io/subgraph/actions)


- [Nevermined Subgraph](#nevermined-subgraph)
  - [Requirements](#requirements)
  - [Subgraph naming convention](#subgraph-naming-convention)
  - [Deploying subgraphs locally](#deploying-subgraphs-locally)
  - [Deploying subgraphs to the hosted service](#deploying-subgraphs-to-the-hosted-service)
    - [Getting the cookie and account id](#getting-the-cookie-and-account-id)
  - [Testing](#testing)
  - [References](#references)
  - [License](#license)

---

## Requirements

- Node v12.22+
- yarn 1.22+
- [Nevermined tools]([https://git](https://github.com/nevermined-io/tools)) with the `--no-graph` option

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
$ ./start_nevermined.sh --latest --no-graph --polygon

# start the graph node locally
$ docker-compose up

# copy the artifacts
$ ./scripts/wait-nevermined.sh

# update the addresses
$ yarn nevermined:update-addresses polygon-localnet

# update startBlock
$ OVERRIDE_SUBGRAPH_STARTING_BLOCK=10 yarn nevermined:update-startblock polygon-localnet

# update the network
# we always use spree in the subgraph manifest for local development networks
$ yarn nevermined:update-network spree

# create the subgraphs
# we use `development` as the tag for local development contracts
# the contracts major version only
$ yarn nevermined:create development polygon-localnet v2

# deploy the subgraphs
$ yarn nevermined:deploy development polygon-localnet v2
```

## Deploying subgraphs to the hosted service
```bash
# you need to get the access token from https://thegraph.com/hosted-service/dashboard and authenticate
$ yarn graph auth --product hosted-service <access_token>

# download the artifacts
$ yarn artifacts:download v2.0.5 mumbai common

# update addresses
$ yarn nevermined:update-addresses mumbai

# update start block
$ yarn nevermined:update-startblock mumbai

# update the network
$ yarn nevermined:update-network mumbai

# create the subgraphs
# usage yarn nevermined:create-hosted <tag> <network> <version> <cookie> <account id>
$ yarn nevermined:create-hosted common mumbai v2 "explorerSession_v24=s%3A6zVr0-om..." "MDEy..."

# deploy the subgraphs
$ yarn nevermined:deploy-hosted common mumbai v2
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

## Testing

```bash

# start nevermined tools
$ ./start_nevermined.sh --no-graph --polygon

# start the graph node locally
$ docker-compose up

# wait and copy artifacts
$ ./scripts/wait-nevermined.sh

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