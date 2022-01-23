#!/usr/bin/env bash

NETWORK='spree'
FILES=$(ls node_modules/@nevermined-io/contracts/artifacts/*.$NETWORK.json)

echo $FILES

for f in $FILES
do
    echo $f
    CONTRACT_NAME=$(cat $f |jq '.name')
    CONTRACT_ADDRESS=$(cat $f |jq '.address')

done