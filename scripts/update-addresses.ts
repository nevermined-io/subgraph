import Scaffold from '@nevermined-io/graph-cli/src/scaffold'
import Protocol from '@nevermined-io/graph-cli/src/protocols'
import glob from 'glob'
import fs from 'fs-extra'

const EXCLUDED_SUBGRAPHS = [
    'DIDRegistryLibrary',
    'EpochLibrary',
    'PlonkVerifier',
]

async function processFiles(err: { message: any }, files: any[], network: string) {
    if (err) {
        console.log(err.message)
        process.exit(1)
    }
    if (files.length === 0) {
        console.log(`Couldn't find artifacts for network ${network}`)
        process.exit(1)
    }

    files.forEach(async (file: fs.PathOrFileDescriptor) => {
        const abiJson = JSON.parse(fs.readFileSync(file).toString())
        const contractName = abiJson.name
        if (!EXCLUDED_SUBGRAPHS.includes(contractName)) {
            const contract = abiJson.address

            const protocolInstance = new Protocol('ethereum')
            const ABI = protocolInstance.getABI()
            const abi = await ABI.load(contractName, file)
            const subgraphName = `neverminedio/${contractName}`
            const indexEvents = true
            const directory = `subgraphs/${contractName}`

            const scaffold = new Scaffold({
                protocol: protocolInstance,
                abi,
                indexEvents,
                contract,
                network,
                contractName,
                subgraphName,
            })

            console.log(`Updating adresses for ${subgraphName}: ${directory}/subgraph.yaml`)
            fs.writeFileSync(`${directory}/subgraph.yaml`, scaffold.generateManifest())
        }
    })
}

async function main() {
    const network = process.argv[2]
    console.log(`Using network '${network}'`)

    const forFiles = (err: any, files: any) => processFiles(err, files, network)

    glob(`node_modules/@nevermined-io/contracts/artifacts/*.${network}.json`, forFiles)
}

(async () => {

    await main()

})()
