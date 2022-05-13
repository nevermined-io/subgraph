#!/usr/bin/env bash

shopt -s extglob

## This block helps to rebuild the stuff using the ABIs
yarn
yarn nevermined:init spree
./scripts/wait-nevermined.sh
yarn nevermined:update-addresses spree
yarn codegen
yarn nevermined:update-addresses spree
yarn nevermined:create # modifies the subgraph.yml 
yarn nevermined:deploy

## Create the stubs
yarn nevermined:create-manifestos
yarn nevermined:generate-clients 

# DIDSalesTemplate
# HashLockCondition
# SignCondition
# NeverminedConfig
