import Scaffold from '@nevermined-io/graph-cli/src/scaffold'
import { abiEvents, generateEventType } from '@nevermined-io/graph-cli/src/scaffold/schema'
import { generateEventFieldAssignments } from '@nevermined-io/graph-cli/src/scaffold/mapping'
import { generateScaffold, writeScaffold } from '@nevermined-io/graph-cli/src/command-helpers/scaffold'
import { initSubgraphFromContract } from '@nevermined-io/graph-cli/src/commands/init'
import { withSpinner } from '@nevermined-io/graph-cli/src/command-helpers/spinner'
import Protocol from '@nevermined-io/graph-cli/src/protocols'
import glob from 'glob'
import fs from 'fs-extra'
import yaml from 'js-yaml'
import prettier from 'prettier'
import { toolbox } from 'gluegun/toolbox'
import { filesystem, system, print } from 'gluegun'
import path from 'path'

const initRepository = async (toolbox, directory) =>
    await withSpinner(
        'Initialize subgraph repository',
        'Failed to initialize subgraph repository',
        'Warnings while initializing subgraph repository',
        async spinner => {
            // Remove .git dir in --from-example mode; in --from-contract, we're
            // starting from an empty directory
            const gitDir = path.join(directory, '.git')
            if (filesystem.exists(gitDir)) {
                await filesystem.remove(gitDir)
            }
            await system.run('git init', { cwd: directory })
            await system.run('git add --all', { cwd: directory })
            await system.run('git commit -m "Initial commit"', {
                cwd: directory,
            })
            return true
        },
    )

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

        // // Initialize a fresh Git repository
        // const repo = await initRepository(toolbox, directory)
        // if (repo !== true) {
        //     process.exitCode = 1
        //     return
        // }

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