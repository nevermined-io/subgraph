#!/usr/bin/env bash
# Usage: ./create-hosted.sh <tag> <network> <version> <cookie> <account id>

set -u
shopt -s extglob

TAG=$1
NETWORK=$2
VERSION=$3

# we need to create a test subgraph in the hosted service dashboard and get the cookie and accountId
COOKIE=$4
ACCOUNT_ID=$5

generate_post_data()
{
    cat <<EOF
{
    "operationName": "CreateSubgraph",
    "variables": {
        "subgraph": {
            "accountId": "$ACCOUNT_ID",
            "displayName": "$TAG$NETWORK$VERSION$BASENAME",
            "subtitle": "nevermined",
            "description": "description",
            "name": "$TAG$NETWORK$VERSION$BASENAME",
            "image": "https://storage.googleapis.com/subgraph-images/default/sg-3.png",
            "hidden": false,
            "githubUrl": "https://github.com/nevermined-io/subgraph"
        }
    },
    "query": "mutation CreateSubgraph(\$subgraph: CreateSubgraphInput!) {  createSubgraph(subgraph: \$subgraph) {    id    accountId    account {      id      name      __typename    }    name    __typename  }}"
}
EOF
}

for d in ./subgraphs/*
do
    # lower case name
    BASENAME=$(basename "$d" | tr "[:upper:]" "[:lower:]")
    echo "Creating $TAG$NETWORK$VERSION$BASENAME"

    curl -X POST \
    -H 'content-type: application/json' \
    -H "Cookie: $COOKIE" \
    -d "$(generate_post_data)" \
    https://api.thegraph.com/explorer/graphql
done