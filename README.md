[![banner](https://raw.githubusercontent.com/nevermined-io/assets/main/images/logo/banner_logo.png)](https://nevermined.io)

# Nevermined Subgraph

> Nevermined subraph for [The Graph](https://thegraph.com)

[![Tests](https://github.com/nevermined-io/subgraph/workflows/Build/badge.svg)](https://github.com/nevermined-io/subgraph/actions)

---

- [Nevermined Subgraph](#nevermined-subgraph)
  - [Requirements](#requirements)
  - [Developing](#developing)
  - [Testing](#testing)
  - [References](#references)
  - [License](#license)

---

## Requirements

- Node v12.22+
- yarn 1.22+
- [Nevermined tools]([https://git](https://github.com/nevermined-io/tools)) with the `--graph` option

## Developing

```bash
# install dependencies
$ yarn

# It will regenerate with the new artifacts and copy the abis 
yarn nevermined:init <NETWORK-NAME>

# code generation
$ yarn codegen

# allocate subgraph name
$ yarn create-local

# local deployment of the subgraph
$ yarn deploy-local
```

> Note: The code generation must be performed again after every change to the GraphQL schema or the ABIs included in the manifest. It must also be performed at least once before building or deploying the subgraph.

## Testing

```bash
# check linting
$ yarn lint

# start nevermined tools
$ ./start_nevermined.sh --latest --no-marketplace --spree-embedded-contracts --graph

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
Copyright 2022 Nevermined AG

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
