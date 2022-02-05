#!/usr/bin/env bash

rm -rf manifestos
mkdir manifestos

# Generate manifestos for the graphql clients for each subgraph
for d in ./subgraphs/*
do
    BASENAME=$(basename "$d")
    echo $BASENAME
    yarn -s codegen-graph-ts pull http://localhost:9000/subgraphs/name/neverminedio/$BASENAME > manifestos/$BASENAME.json
    echo
done

# delete empty manifestos (contracts that don't emit events)
find ./manifestos -name '*.json' -size 0 -print0 | xargs -0 rm