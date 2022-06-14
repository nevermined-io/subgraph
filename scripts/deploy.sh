#!/usr/bin/env bash

shopt -s extglob

GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:9020/}
IPFS_URL=${IPFS_URL:-http://localhost:5001}

# AaveCreditVault does not have an address. We need to use templates and dynamic sources
# ConditionStoreManager has a param named `id` that conflicts with the id of the database. Needs to be manually changed
# DistributeNFTCollateralCondition does not build
# NFT721LockCondition does not build
# NFTUpgradeable same as ConditionStoreManager

EXCLUDE_SUBGRAPHS="AaveCreditVault|DistributeNFTCollateralCondition|NFT721LockCondition|NFTUpgradeable"

for d in ./subgraphs/!($EXCLUDE_SUBGRAPHS)/
do
    echo $(basename "$d")
    (cd "$d" && graph deploy -l v0.0.1 --node $GRAPH_NODE_URL --ipfs $IPFS_URL neverminedio/$(basename "$d"))
done