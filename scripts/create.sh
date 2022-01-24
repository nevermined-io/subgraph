#!/usr/bin/env bash

GRAPH_NODE_URL=${GRAPH_NODE_URL:-http://localhost:9020/}

for d in ./subgraphs/*
do
    (cd "$d" && graph create --node $GRAPH_NODE_URL neverminedio/$(basename "$d"))
done