#!/usr/bin/env bash

# This script requires the jq and yq clis

POLYGONSCAN_URL=${POLYGONSCAN_URL:- https://api-testnet.polygonscan.com/api}
GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:9020/}
NETWORK=$1

if [ "$NETWORK" != "mumbai" ]; then
    echo "Currently only supported in mumbai. Skipping..."
    exit 0
fi

# Generate manifestos for the graphql clients for each subgraph
for d in ./subgraphs/*
do
    # Get the implementation address and block number where contract was created
    BLOCK_NUMBER=10
    BASENAME=$(basename "$d")
    ABI=node_modules/@nevermined-io/contracts/artifacts/$BASENAME.mumbai.json
    SUBGRAPH=$d/subgraph.yaml
    IMPLEMENTATION_ADDRESS=$(cat $ABI | jq -r '.implementation')
    BLOCK_NUMBER=$(
        curl -G $POLYGONSCAN_URL \
        -d module=account \
        -d action=txlist \
        -d address=$IMPLEMENTATION_ADDRESS \
        -d startblock=0 \
        -d endblock=99999999 \
        -d page=1 \
        -d offset=10 \
        -d sort=asc \
        -d apiKey=YourApiKeyToken | jq -r '.result[0].blockNumber' || echo 10
    )
    echo $BASENAME
    echo $ABI
    echo $IMPLEMENTATION_ADDRESS
    echo $BLOCK_NUMBER
    echo $SUBGRAPH

    # update the startBlock
     yq -i ".dataSources[0].source.startBlock = $BLOCK_NUMBER" $SUBGRAPH


done