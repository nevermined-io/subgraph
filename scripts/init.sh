#!/usr/bin/env bash
shopt -s extglob
set -e

# Contracts that do not contain events
EXCLUDED_CONTRACTS="PlonkVerifier"

for artifact in ./artifacts/!($EXCLUDED_CONTRACTS).geth-localnet.json
do
    address=$(cat $artifact | jq .address | tr -d '"')
    name=$(cat $artifact | jq .name | tr -d '"')
    echo $artifact $address $name
    yarn graph init \
        nevermined-io/$name \
        subgraphs/$name \
        --protocol ethereum \
        --product subgraph-studio \
        --contract-name $name \
        --from-contract $address \
        --index-events \
        --start-block 0 \
        --abi $artifact \
        --network mainnet
done