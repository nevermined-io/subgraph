#!/usr/bin/env bash

# This script requires the jq and yq clis
NETWORK=$1

# Update the network name for each subgraph
for d in ./subgraphs/*
do
    SUBGRAPH=$d/subgraph.yaml
    yq -i ".dataSources[0].network = \"$NETWORK\"" $SUBGRAPH
done