#!/usr/bin/env bash
set -m

# start graph in the background
cd /
start &

# copy artifacts
cd /subgraphs
mkdir -p node_modules/@nevermined-io/contracts/artifacts/
cp -r /nevermined-contracts/* node_modules/@nevermined-io/contracts/artifacts/

# get contract version
VERSION=$(jq ".version" node_modules/@nevermined-io/contracts/artifacts/DIDRegistry.$KEEPER_NETWORK_NAME.json)
# remove dots and quotes
VERSION=$(echo ${VERSION%%.*} | tr -d '"')

# wait for subgraph to be online
./scripts/wait_for_graph.sh

yarn nevermined:update-addresses $KEEPER_NETWORK_NAME
OVERRIDE_SUBGRAPH_STARTING_BLOCK=10 yarn nevermined:update-startblock $KEEPER_NETWORK_NAME
# we always use spree in the subgraph manifest for local development networks
yarn nevermined:update-network $KEEPER_NETWORK_NAME $VERSION
yarn nevermined:create development $KEEPER_NETWORK_NAME $VERSION
yarn nevermined:deploy development $KEEPER_NETWORK_NAME $VERSION

# give control back to graph node
%1
