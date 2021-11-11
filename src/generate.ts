import { generateManifest, generateEventType, abiEvents } from '@graphprotocol/graph-cli/src/scaffold'
import { ascTypeForEthereum, valueTypeForAsc } from '@graphprotocol/graph-cli/src/codegen/types'
import * as util from '@graphprotocol/graph-cli/src/codegen/util'
import ABI from '@graphprotocol/graph-cli/src/abi'
import glob from 'glob'
import prettier from 'prettier'
import yaml from 'js-yaml'

import fs from 'fs-extra'

const ALLOWED_CONTRACTS = (network) => [
    `node_modules/@nevermined-io/contracts/artifacts/AccessCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/AgreementStoreManager.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/ComputeExecutionCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/ConditionStoreManager.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/Dispenser.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/HashLockCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/NeverminedToken.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/NFT721HolderCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/NFTAccessCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/NFTHolderCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/NFTLockCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/SignCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/TemplateStoreManager.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/ThresholdCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/TransferDIDOwnershipCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/TransferNFT721Condition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/TransferNFTCondition.${network}.json`,
    `node_modules/@nevermined-io/contracts/artifacts/WhitelistingCondition.${network}.json`,
]

// contracts that have problems with the code generation
// Waiting for help on discord
const DISALLOWED_CONTRACTS = [
    // graph init
    // Failed to generate types for GraphQL schema: Conversion from 'AssemblyScript' to 'Value' for target type 'Array<BigInt | null>' is not supported
    'node_modules/@nevermined-io/contracts/artifacts/AccessProofCondition.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/AccessProofTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/AccessTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/DIDRegistry.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/DIDSalesTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/EscrowComputeExecutionTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/EscrowPaymentCondition.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/NFT721AccessTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/NFT721SalesTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/NFTAccessTemplate.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/NFTSalesTemplate.spree.json',
    // graph init
    // ✖ Failed to generate types for GraphQL schema: Conversion from 'AssemblyScript' to 'Value' for target type 'Array<Bytes | null>' is not supported
    'node_modules/@nevermined-io/contracts/artifacts/LockPaymentCondition.spree.json',
    // yarn codegen
    // No entities
    'node_modules/@nevermined-io/contracts/artifacts/DIDRegistryLibrary.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/EpochLibrary.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/PlonkVerifier.spree.json',
]

type Manifest = {
    specVersion: string,
    schema: {
        file: string
    },
    dataSources: Array<object>
}


async function generateDataSource(abi, address, network, contractName, filename) {
    const manifest = await generateManifest({ abi, address, network, contractName })
    const jsonManifest = yaml.load(manifest) as Manifest
    const dataSource = jsonManifest.dataSources[0]

    // @ts-ignore
    dataSource.mapping.abis[0].file = filename
    // @ts-ignore
    dataSource.mapping.file = `./src/${contractName}.ts`

    // @ts-ignore
    if (dataSource.mapping.entities !== null) {
        // @ts-ignore
        for (const [index, entity] of dataSource.mapping.entities.entries()) {
            // @ts-ignore
            dataSource.mapping.entities[index] = `${contractName}${entity}`
        }
        return dataSource
    }
}

const ethereumTypeToGraphQL = name => {
    const ascType = ascTypeForEthereum(name)
    console.log(name, ascType, typeof ascType)
    return valueTypeForAsc(ascType)
}

const generateField = ({ name, type }) => {
    return `${name}: ${ethereumTypeToGraphQL(type)}! # ${type}`
}

const generateEventFields = ({ index, input }) =>
    input.type == 'tuple'
        ? util
            .unrollTuple({ value: input, path: [input.name || `param${index}`], index })
            .map(({ path, type }) => generateField({ name: path.join('_'), type }))
        : [generateField({ name: input.name || `param${index}`, type: input.type })]

const generateEventType = event => `type ${event._alias} @entity {
    id: ID!
    ${event.inputs
        .reduce(
            (acc, input, index) => acc.concat(generateEventFields({ input, index })),
            [],
        )
        .join('\n')}
  }`

async function generateSchema(events, contractName) {
    return prettier.format(
        events.map(generateEventType).join('\n\n'),
        { parser: 'graphql' },
    )
}

const generateFieldAssignment = path =>
    `entity.${path.join('_')} = event.params.${path.join('.')}`

const generateFieldAssignments = ({ index, input }) =>
    input.type === 'tuple'
        ? util
            .unrollTuple({ value: input, index, path: [input.name || `param${index}`] })
            .map(({ path }) => generateFieldAssignment(path))
        : generateFieldAssignment([input.name || `param${index}`])

const generateEventFieldAssignments = event =>
    event.inputs.reduce(
        (acc, input, index) => acc.concat(generateFieldAssignments({ input, index })),
        [],
    )

const generateEventIndexingHandlers = (events, contractName) =>
    `
  import { ${events.map(
        event => `${event.name} as ${event._alias}Event`,
    )}} from '../generated/${contractName}/${contractName}'
  import { ${events.map(event => event._alias)} } from '../generated/schema'

  ${events
        .map(
            event =>
                `
  export function handle${event._alias}(event: ${event._alias}Event): void {
    let entity = new ${
    event._alias
}(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
    ${generateEventFieldAssignments(event).join('\n')}
    entity.save()
  }
    `,
        )
        .join('\n')}
`

async function generateMapping(events, contractName) {
    return prettier.format(
        generateEventIndexingHandlers(events, contractName),
        { parser: 'typescript', semi: false },
    )
}

async function processFile(file, network) {
    const abiJson = JSON.parse(fs.readFileSync(file).toString())
    const contractName = abiJson.name
    const address = abiJson.address

    console.log(`Processing contract ${address} ${contractName}`)

    const abi = await ABI.load(contractName, file)
    const events = abiEvents(abi).toJS()

    // Here we are appending the contract name to the event name
    // because a some contracts have events with the same name
    events.map(event => event._alias = `${contractName}${event.name}`)

    const dataSource = await generateDataSource(abi, address, network, contractName, file)
    const schema = await generateSchema(events, contractName)
    const mapping = await generateMapping(events, contractName)
    return { dataSource, schema, mapping }
}

async function processFiles(err, files, network) {
    if (err) {
        console.log(err.message)
        process.exit(1)
    }

    if (files.length === 0) {
        console.log(`Couldn't find artifacts for network ${network}`)
        process.exit(1)
    }

    // Fetch the generated schema and dataSource for each file
    const dataSources = []
    let schemas = ''
    const mappings = new Map()
    await Promise.all(
        files
            .filter(file => ALLOWED_CONTRACTS(network).includes(file))
            .flatMap(async file => {
                const { dataSource, schema, mapping } = await processFile(file, network)
                // @ts-ignore
                if (typeof dataSource !== 'undefined') {
                    dataSources.push(dataSource)
                    schemas += schema
                    // @ts-ignore
                    mappings.set(dataSource.mapping.file, mapping)
                }
            }),
    )

    // generate subgraph.yaml, schema.graphql and maping.ts

    // write mappings
    // console.log(mappings)

    // fs.writeFileSync('testmappings.ts', mappings)

    // write subgraph.yaml
    const manifest: Manifest = {
        specVersion: '0.0.2',
        schema: {
            file: './schema.graphql',
        },
        dataSources: dataSources,
    }
    fs.writeFileSync('subgraph.yaml', yaml.dump(manifest, { indent: 2 }))

    // write schema.graphql
    fs.writeFileSync('schema.graphql', schemas)

    // write mappings under ./src
    for (const [filename, mapping] of mappings) {
        fs.writeFileSync(filename, mapping)
    }
}

async function main() {
    const network = process.argv[2]
    console.log(`Using network '${network}'`)

    const forFiles = (err, files) => processFiles(err, files, network)

    glob(`node_modules/@nevermined-io/contracts/artifacts/*.${network}.json`, forFiles)
}

(async () => {

    await main()

})()