#!/usr/bin/env bash

shopt -s extglob

GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:9020/}

EXCLUDE_SUBGRAPHS="AaveCreditVault|ConditionStoreManager|DistributeNFTCollateralCondition|NFT721LockCondition|NFTUpgradeable"

for d in ./subgraphs/!($EXCLUDE_SUBGRAPHS)/
do
    (cd "$d" && graph create --node $GRAPH_NODE_URL neverminedio/$(basename "$d"))
done