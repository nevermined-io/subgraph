#!/usr/bin/env bash
# Usage: ./deploy.sh <tag> <network> <version>

set -ue
shopt -s extglob

TAG=$1
NETWORK=$2
VERSION=$3

GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:8020/}
IPFS_URL=${IPFS_URL:-http://localhost:5001}

for d in ./subgraphs/*
do
    # lower case name
    BASENAME=$(basename "$d" | tr "[:upper:]" "[:lower:]")
    echo "Deploying $TAG$NETWORK$VERSION$BASENAME"

    (cd "$d" && graph deploy -l v0.1.0 --node $GRAPH_NODE_URL --ipfs $IPFS_URL nevermined-io/$TAG$NETWORK$VERSION$BASENAME)
done