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
    "operationName": "createSubgraph",
    "variables": {
        "accountId": "$ACCOUNT_ID",
        "displayName": "$TAG$NETWORK$VERSION$BASENAME",
        "subtitle": "test",
        "description": "description",
        "name": "$TAG$NETWORK$VERSION$BASENAME",
        "image": "https://storage.googleapis.com/subgraph-images/default/sg-3.png",
        "hidden": false
    },
    "query": "mutation createSubgraph(\$accountId: ID!, \$displayName: String!, \$name: String!, \$image: String!, \$subtitle: String, \$description: String, \$hidden: Boolean, \$githubUrl: String) {  createSubgraph(accountId: \$accountId, displayName: \$displayName, name: \$name, image: \$image, subtitle: \$subtitle, description: \$description, hidden: \$hidden, githubUrl: \$githubUrl) {    id    name    displayName    image    draft    subtitle    description    hidden    account {      id      subgraphs {        id        __typename      }      __typename    }    __typename  }}"
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