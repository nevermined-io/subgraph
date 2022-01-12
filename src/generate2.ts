import Scaffold from '@nevermined-io/graph-cli/src/scaffold'
import { abiEvents, generateEventType } from '@nevermined-io/graph-cli/src/scaffold/schema'
import Protocol from '@nevermined-io/graph-cli/src/protocols'
import glob from 'glob'
import fs from 'fs-extra'
import yaml from 'js-yaml'
import prettier from 'prettier'


const ALLOWED_CONTRACTS = [
    // 'node_modules/@nevermined-io/contracts/artifacts/DIDRegistry.spree.json',
    // 'node_modules/@nevermined-io/contracts/artifacts/AccessCondition.spree.json',
    'node_modules/@nevermined-io/contracts/artifacts/AccessProofCondition.spree.json',


]

type Manifest = {
    specVersion: string,
    schema: {
        file: string
    },
    dataSources: Array<any>
}

function generateSchema(events, protocolName) {
    return prettier.format(

        events.map(
            event => generateEventType(event, protocolName),
        )
            .join('\n\n'),
        {
            parser: 'graphql',
        },
    )
}

function generateDataSource(scaffold) {
    const manifest = scaffold.generateManifest()
    const jsonManifest = yaml.load(manifest) as Manifest
    const dataSource = jsonManifest.dataSources[0]

    dataSource.mapping.abis[0].file = scaffold.abi.file
    dataSource.mapping.file = `./src/${scaffold.abi.name}.ts`

    if (dataSource.mapping.entities !== null) {
        for (const [index, entity] of dataSource.mapping.entities.entries()) {
            dataSource.mapping.entities[index] = `${scaffold.abi.name}${entity}`
        }
        return dataSource
    }
}


async function processFiles(err, files, network) {
    const dataSources = []
    let schemas = ''
    const mappings = new Map()

    if (err) {
        console.log(err.message)
        process.exit(1)
    }

    if (files.length === 0) {
        console.log(`Couldn't find artifacts for network ${network}`)
        process.exit(1)
    }

    // files = files.filter(f => ALLOWED_CONTRACTS.includes(f))
    console.log(files)

    files.forEach(async file => {
        const abiJson = JSON.parse(fs.readFileSync(file).toString())
        const contractName = abiJson.name
        const address = abiJson.address

        const protocol = new Protocol('ethereum')
        const ABI = protocol.getABI()
        const abi = await ABI.load(contractName, file)
        const events = abiEvents(abi).toJS()

        // Here we are appending the contract name to the event name
        // because a some contracts have events with the same name
        events.map(event => event._alias = `${contractName}${event.name}`)

        const scaffoldOptions = {
            protocol: protocol,
            abi: abi,
            indexEvents: true,
            contract: address,
            network: network,
            contractName,
            subgraphName: 'nevermined',
        }

        const scaffold = new Scaffold(scaffoldOptions)


        // generate data sources
        const dataSource = generateDataSource(scaffold)
        if (typeof dataSource !== 'undefined') {
            dataSources.push(dataSource)
            schemas += generateSchema(events, protocol.name)
            mappings.set(dataSource.mapping.file, scaffold.generateMapping())
        }

        // write manifest
        const manifest: Manifest = {
            specVersion: '0.0.2',
            schema: {
                file: './schema.graphql',
            },
            dataSources: dataSources,
        }
        fs.writeFileSync('subgraph.yaml', yaml.dump(manifest, { indent: 2 }))

        // write schema
        fs.writeFileSync('schema.graphql', schemas)

        // write mappings under ./src
        for (const [filename, mapping] of mappings) {
            fs.writeFileSync(filename, mapping)
        }
    })

}

async function main() {
    // const network = process.argv[2]
    const network = 'spree'
    console.log(`Using network '${network}'`)

    const forFiles = (err, files) => processFiles(err, files, network)

    glob(`node_modules/@nevermined-io/contracts/artifacts/*.${network}.json`, forFiles)
}

(async () => {

    await main()

})()