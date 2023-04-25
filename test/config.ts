import {
  NeverminedOptions,
  LoggerInstance,
  LogLevel,
  makeAccounts,
} from "@nevermined-io/sdk";

LoggerInstance.setLevel(LogLevel.Error);

const nograph = process.env["NO_GRAPH"] === "true";

const configBase: NeverminedOptions = {
  web3ProviderUri: "http://contracts.nevermined.localnet",
  marketplaceUri: "http://marketplace.nevermined.localnet",
  neverminedNodeUri: "http://node.nevermined.localnet",
  neverminedNodeAddress: "0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0",
  marketplaceAuthToken: undefined,
  artifactsFolder: "node_modules/@nevermined-io/contracts/artifacts/",
  graphHttpUri: nograph
    ? undefined
    : "http://localhost:9000/subgraphs/name/nevermined-io/development",
  gasMultiplier: 1.1,
  verbose: LogLevel.Error,
};

if (process.env.SEED_WORDS) {
  configBase.accounts = makeAccounts(process.env.SEED_WORDS);
}

export const config: NeverminedOptions & { forceVerbose: NeverminedOptions } =
  configBase as any;
(config as any).forceVerbose = { ...configBase, verbose: true };
