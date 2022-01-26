#!/usr/bin/env bash

# Generate typescript subgraph clients for all manifestos
for d in ./manifestos/*.json
do
    BASENAME=$(basename "$d" .json)
    yarn codegen-graph-ts gen -s ./manifestos/$BASENAME.json -o ./src/$BASENAME.ts
done