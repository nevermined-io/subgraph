import { generateScaffold, writeScaffold } from '@nevermined-io/graph-cli/src/command-helpers/scaffold'
import { withSpinner } from '@nevermined-io/graph-cli/src/command-helpers/spinner'
import Protocol from '@nevermined-io/graph-cli/src/protocols'
import glob from 'glob'
import fs from 'fs-extra'
import { toolbox } from 'gluegun/toolbox'
import { system, print } from 'gluegun'


const installDependencies = async (toolbox, directory, installCommand) =>
    await withSpinner(
        `Install dependencies with ${print.colors.muted(installCommand)}`,
        'Failed to install dependencies',
        'Warnings while installing dependencies',
        async spinner => {
            await system.spawn(installCommand, { cwd: directory })
            return true
        },
    )

const runCodegen = async (toolbox, directory, codegenCommand) =>
    await withSpinner(
        `Generate ABI and schema types with ${print.colors.muted(codegenCommand)}`,
        'Failed to generate code from ABI and GraphQL schema',
        'Warnings while generating code from ABI and GraphQL schema',
        async spinner => {
            await system.spawn(codegenCommand, { cwd: directory })
            return true
        },
    )

async function processFiles(err, files, network) {
    if (err) {
        console.log(err.message)
        process.exit(1)
    }
    if (files.length === 0) {
        console.log(`Couldn't find artifacts for network ${network}`)
        process.exit(1)
    }

    const errors: any[] = []

    files.forEach(async file => {
        const abiJson = JSON.parse(fs.readFileSync(file).toString())
        const contractName = abiJson.name
        const contract = abiJson.address

        const protocolInstance = new Protocol('ethereum')
        const ABI = protocolInstance.getABI()
        const abi = await ABI.load(contractName, file)
        const subgraphName = `neverminedio/${contractName}`
        const indexEvents = true
        const directory = `subgraphs/${contractName}`

        const scaffold = await withSpinner(
            'Create subgraph scaffold',
            'Failed to create subgraph scaffold',
            'Warnings while creating subgraph scaffold',
            async spinner => {
                const scaffold = await generateScaffold({
                    protocolInstance,
                    subgraphName,
                    abi,
                    network,
                    contract,
                    indexEvents,
                    contractName,
                }, spinner)

                await writeScaffold(scaffold, directory, spinner)
                return true
            },
        )

        const commands = {
            install: 'yarn',
            codegen: 'yarn codegen',
        }

        if (scaffold !== true) {
            process.exitCode = 1
            return
        }

        // Install dependencies
        try {
            installDependencies(toolbox, directory, commands.install)
        } catch (error) {
            errors.push({
                directory: directory,
                message: `command '${commands.install}' failed`,
                error: error,
            })
        }

        // Run code-generation
        try {
            await runCodegen(toolbox, directory, commands.codegen)
        } catch (error) {
            errors.push({
                directory: directory,
                message: `command '${commands.codegen}' failed`,
                error: error,
            })
        }

    })
    errors.forEach( err => console.log(err))
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