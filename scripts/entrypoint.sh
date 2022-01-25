#!/usr/bin/env bash
set -m

# start graph in the background
cd /
start &


# copy artifacts
cd /subgraphs
cp -r /nevermined-contracts/* node_modules/@nevermined-io/contracts/artifacts/

yarn nevermined:update-addresses $KEEPER_NETWORK_NAME
yarn nevermined:create
yarn nevermined:deploy

# give control back to graph node
%1
