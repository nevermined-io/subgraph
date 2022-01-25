#!/usr/bin/env bash

GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:9020/}
IPFS_URL=${IPFS_URL:-http://localhost:5001}

for d in ./subgraphs/*
do
    (cd "$d" && graph deploy -l v0.0.1 --node $GRAPH_NODE_URL --ipfs $IPFS_URL neverminedio/$(basename "$d"))
done