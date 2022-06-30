#!/usr/bin/env bash
# Usage: ./deploy-hosted.sh <tag> <network> <version>
set -u
shopt -s extglob

TAG=$1
NETWORK=$2
VERSION=$3

for d in ./subgraphs/*
do
    # lower case name
    BASENAME=$(basename "$d" | tr "[:upper:]" "[:lower:]")
    echo "Deploying $TAG$NETWORK$VERSION$BASENAME"
    (cd "$d" && graph deploy --product hosted-service nevermined-io/$TAG$NETWORK$VERSION$BASENAME)
done