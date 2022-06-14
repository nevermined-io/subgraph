#!/usr/bin/env bash

shopt -s extglob

rm -rf manifestos
mkdir manifestos

EXCLUDE_SUBGRAPHS="AaveCreditVault|DistributeNFTCollateralCondition|NFT721LockCondition|NFTUpgradeable"

# Generate manifestos for the graphql clients for each subgraph
for d in ./subgraphs/!($EXCLUDE_SUBGRAPHS)/
do
    BASENAME=$(basename "$d")
    echo $BASENAME
    yarn -s codegen-graph-ts pull http://localhost:9000/subgraphs/name/neverminedio/$BASENAME > manifestos/$BASENAME.json
    echo
done
