#!/usr/bin/env bash

# This script requires the jq and yq clis

POLYGONSCAN_URL_MUMBAI=${POLYGONSCAN_URL_MUMBAI:-https://api-testnet.polygonscan.com/api}
POLYGONSCAN_URL_MATIC=${POLYGONSCAN_URL_MATIC:-https://api.polygonscan.com/api}
POLYGONSCAN_APIKEY=${POLYGONSCAN_APIKEY:-ISP8J7YJGP88XSHU55QJF3YM71WVFRWSDJ}
GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:9020/}
NETWORK=$1

if [ "$NETWORK" == "mumbai" ]; then
    POLYGONSCAN_URL=$POLYGONSCAN_URL_MUMBAI
elif [ "$NETWORK" == "matic" ]; then
    POLYGONSCAN_URL=$POLYGONSCAN_URL_MATIC
else
    echo "Currently not supported in $NETWORK. Skipping..."
    exit 0
fi

# Generate manifestos for the graphql clients for each subgraph
for d in ./subgraphs/*
do
    # Get the implementation address and block number where contract was created
    BLOCK_NUMBER=10
    BASENAME=$(basename "$d")
    ABI=node_modules/@nevermined-io/contracts/artifacts/$BASENAME.$NETWORK.json
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
        -d apiKey=$POLYGONSCAN_APIKEY | jq -r '.result[0].blockNumber' || echo 10
    )
    echo $BASENAME
    echo $ABI
    echo $IMPLEMENTATION_ADDRESS
    echo $BLOCK_NUMBER
    echo $SUBGRAPH

    # update the startBlock
     yq -i ".dataSources[0].source.startBlock = $BLOCK_NUMBER" $SUBGRAPH

    # try not to trigger any rate-limits
    sleep 0.5


done