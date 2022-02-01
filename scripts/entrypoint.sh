#!/usr/bin/env bash
set -m

# start graph in the background
cd /
start &

# copy artifacts
cd /subgraphs
cp -r /nevermined-contracts/* node_modules/@nevermined-io/contracts/artifacts/

# wait for subgraph to be online
./scripts/wait_for_graph.sh

yarn nevermined:update-addresses $KEEPER_NETWORK_NAME
yarn nevermined:update-startblock $KEEPER_NETWORK_NAME
yarn nevermined:create
yarn nevermined:deploy

# give control back to graph node
%1
