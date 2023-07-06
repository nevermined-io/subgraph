#!/usr/bin/env bash
shopt -s extglob
set -ue

# This script requires the jq and yq clis
NETWORK=$1

EXCLUDED_CONTRACTS="PlonkVerifier"

# blockchain scan urls used to get the start block
declare -A SCAN_URLS=( \
    ["mumbai"]=https://api-testnet.polygonscan.com/api \
    ["matic"]=https://api.polygonscan.com/api \
    ["gnosis"]=https://api.gnosisscan.io/api \
    ["arbitrum-goerli"]=https://api-goerli.arbiscan.io/api \
)


update_network_name() {
    contract_name=$1
    echo "Updating network name for $contract_name to $NETWORK"
    yq -i ".dataSources[0].network = \"$NETWORK\"" subgraphs/$contract_name/subgraph.yaml
}

update_address() {
    contract_name=$1
    contract_address=$2
    echo "Updating address for $contract_name to $contract_address"
    yq -i ".dataSources[0].source.address = $contract_address" subgraphs/$contract_name/subgraph.yaml
}

update_start_block() {
    set +u

    contract_name=$1
    implementation_address=$2
    
    if [[ ${SCAN_URLS[$NETWORK]+_} ]]
    then
        block_number=$(
            curl -G -s ${SCAN_URLS[$NETWORK]} \
            -d module=account \
            -d action=txlist \
            -d address=$implementation_address \
            -d startblock=0 \
            -d endblock=99999999 \
            -d page=1 \
            -d offset=10 \
            -d sort=asc | jq -r '.result[0].blockNumber'
        )

        # try not to trigger any rate-limits
        sleep 0.5
    else
        block_number=0
    fi

    echo "Updating start block for $contract_name with implementation address $implementation_address to $block_number"
    yq -i ".dataSources[0].source.startBlock = $block_number" subgraphs/$contract_name/subgraph.yaml

    set -u
}

# Update the network name for each subgraph
for artifact in ./artifacts/!($EXCLUDED_CONTRACTS).$NETWORK.json
do
    
    echo $artifact
    CONTRACT_NAME=$(jq .name < $artifact | tr -d '"')
    CONTRACT_ADDRESS=$(jq .address < $artifact)
    IMPLEMENTATION_ADDRESS=$(jq -r .implementation < $artifact)

    update_network_name $CONTRACT_NAME
    update_address $CONTRACT_NAME $CONTRACT_ADDRESS
    update_start_block $CONTRACT_NAME $IMPLEMENTATION_ADDRESS
    echo
    
done