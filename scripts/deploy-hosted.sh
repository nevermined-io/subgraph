#!/usr/bin/env bash
# Usage: ./deploy-hosted.sh <tag> <network> <version>
set -u
shopt -s extglob

TAG=$1
NETWORK=$2
VERSION=$3

EXCLUDED_CONTRACTS="PlonkVerifier"

for artifact in ./artifacts/!($EXCLUDED_CONTRACTS).$NETWORK.json
do
    # lower case name
    CONTRACT_NAME=$(jq .name < $artifact | tr -d '"')
    BASENAME=$(jq .name < $artifact | tr -d '"' | tr "[:upper:]" "[:lower:]")
    echo "Deploying $TAG$NETWORK$VERSION$BASENAME"
    (cd "subgraphs/$CONTRACT_NAME" && graph deploy --product hosted-service nevermined-io/$TAG$NETWORK$VERSION$BASENAME)
done