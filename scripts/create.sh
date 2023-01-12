#!/usr/bin/env bash
# Usage: ./create.sh <tag> <network> <version>

set -u
shopt -s extglob

TAG=$1
NETWORK=$2
VERSION=$3

GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:8020/}

for d in ./subgraphs/*
do
    # lower case name
    BASENAME=$(basename "$d" | tr "[:upper:]" "[:lower:]")
    echo "Creating $TAG$NETWORK$VERSION$BASENAME"

    (cd "$d" && graph create --node $GRAPH_NODE_URL nevermined-io/$TAG$NETWORK$VERSION$BASENAME)
done