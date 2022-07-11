import Wei, { WeiSource, wei } from "@synthetixio/wei";
import axios from "codegen-graph-ts/build/src/lib/axios";
import generateGql from "codegen-graph-ts/build/src/lib/gql";
export type SingleQueryOptions = {
    id: string;
    block?: {
        "number": number;
    } | {
        hash: string;
    };
};
export type MultiQueryOptions<T, R> = {
    first?: number;
    where?: T;
    block?: {
        "number": number;
    } | {
        hash: string;
    };
    orderBy?: keyof R;
    orderDirection?: "asc" | "desc";
};
const MAX_PAGE = 1000;
export type FulfilledFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _agreementId?: string | null;
    _agreementId_not?: string | null;
    _agreementId_in?: string[];
    _agreementId_not_in?: string[];
    _agreementId_contains?: string | null;
    _agreementId_not_contains?: string | null;
    _origHash?: WeiSource | null;
    _origHash_not?: WeiSource | null;
    _origHash_gt?: WeiSource | null;
    _origHash_lt?: WeiSource | null;
    _origHash_gte?: WeiSource | null;
    _origHash_lte?: WeiSource | null;
    _origHash_in?: WeiSource[];
    _origHash_not_in?: WeiSource[];
    _buyer?: WeiSource[];
    _buyer_not?: WeiSource[];
    _buyer_contains?: WeiSource[];
    _buyer_contains_nocase?: WeiSource[];
    _buyer_not_contains?: WeiSource[];
    _buyer_not_contains_nocase?: WeiSource[];
    _provider?: WeiSource[];
    _provider_not?: WeiSource[];
    _provider_contains?: WeiSource[];
    _provider_contains_nocase?: WeiSource[];
    _provider_not_contains?: WeiSource[];
    _provider_not_contains_nocase?: WeiSource[];
    _cipher?: WeiSource[];
    _cipher_not?: WeiSource[];
    _cipher_contains?: WeiSource[];
    _cipher_contains_nocase?: WeiSource[];
    _cipher_not_contains?: WeiSource[];
    _cipher_not_contains_nocase?: WeiSource[];
    _proof?: string | null;
    _proof_not?: string | null;
    _proof_in?: string[];
    _proof_not_in?: string[];
    _proof_contains?: string | null;
    _proof_not_contains?: string | null;
    _conditionId?: string | null;
    _conditionId_not?: string | null;
    _conditionId_in?: string[];
    _conditionId_not_in?: string[];
    _conditionId_contains?: string | null;
    _conditionId_not_contains?: string | null;
};
export type FulfilledResult = {
    id: string;
    _agreementId: string;
    _origHash: Wei;
    _buyer: (Wei | null)[];
    _provider: (Wei | null)[];
    _cipher: (Wei | null)[];
    _proof: string;
    _conditionId: string;
};
export type FulfilledFields = {
    id: true;
    _agreementId: true;
    _origHash: true;
    _buyer: true;
    _provider: true;
    _cipher: true;
    _proof: true;
    _conditionId: true;
};
export type FulfilledArgs<K extends keyof FulfilledResult> = {
    [Property in keyof Pick<FulfilledFields, K>]: FulfilledFields[Property];
};
export const getFulfilledById = async function <K extends keyof FulfilledResult>(url: string, options: SingleQueryOptions, args: FulfilledArgs<K>): Promise<Pick<FulfilledResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("fulfilled", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_agreementId"])
        formattedObj["_agreementId"] = obj["_agreementId"];
    if (obj["_origHash"])
        formattedObj["_origHash"] = obj["_origHash"];
    if (obj["_buyer"])
        formattedObj["_buyer"] = obj["_buyer"]
    if (obj["_provider"])
        formattedObj["_provider"] = obj["_provider"]
    if (obj["_cipher"])
        formattedObj["_cipher"] = obj["_cipher"]
    if (obj["_proof"])
        formattedObj["_proof"] = obj["_proof"];
    if (obj["_conditionId"])
        formattedObj["_conditionId"] = obj["_conditionId"];
    return formattedObj as Pick<FulfilledResult, K>;
};
export const getFulfilleds = async function <K extends keyof FulfilledResult>(url: string, options: MultiQueryOptions<FulfilledFilter, FulfilledResult>, args: FulfilledArgs<K>): Promise<Pick<FulfilledResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<FulfilledFilter, FulfilledResult>> = { ...options };
    let paginationKey: keyof FulfilledFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof FulfilledFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<FulfilledResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("fulfilleds", paginatedOptions, args)
        });
        const r = res.data as any;
        if (r.errors && r.errors.length) {
            throw new Error(r.errors[0].message);
        }
        const rawResults = r.data[Object.keys(r.data)[0]] as any[];
        const newResults = rawResults.map((obj) => {
            const formattedObj: any = {};
            if (obj["id"])
                formattedObj["id"] = obj["id"];
            if (obj["_agreementId"])
                formattedObj["_agreementId"] = obj["_agreementId"];
            if (obj["_origHash"])
                formattedObj["_origHash"] = obj["_origHash"]
            if (obj["_buyer"])
                formattedObj["_buyer"] = obj["_buyer"]
            if (obj["_provider"])
                formattedObj["_provider"] = obj["_provider"]
            if (obj["_cipher"])
                formattedObj["_cipher"] = obj["_cipher"]
            if (obj["_proof"])
                formattedObj["_proof"] = obj["_proof"];
            if (obj["_conditionId"])
                formattedObj["_conditionId"] = obj["_conditionId"];
            return formattedObj as Pick<FulfilledResult, K>;
        });
        results = results.concat(newResults);
        if (newResults.length < 1000) {
            break;
        }
        if (paginationKey) {
            paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy!];
        }
    } while (paginationKey && (options.first && results.length < options.first));
    return options.first ? results.slice(0, options.first) : results;
};
export type InitializedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    version?: number | null;
    version_not?: number | null;
    version_gt?: number | null;
    version_lt?: number | null;
    version_gte?: number | null;
    version_lte?: number | null;
    version_in?: number[];
    version_not_in?: number[];
};
export type InitializedResult = {
    id: string;
    version: number;
};
export type InitializedFields = {
    id: true;
    version: true;
};
export type InitializedArgs<K extends keyof InitializedResult> = {
    [Property in keyof Pick<InitializedFields, K>]: InitializedFields[Property];
};
export const getInitializedById = async function <K extends keyof InitializedResult>(url: string, options: SingleQueryOptions, args: InitializedArgs<K>): Promise<Pick<InitializedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("initialized", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["version"])
        formattedObj["version"] = obj["version"];
    return formattedObj as Pick<InitializedResult, K>;
};
export const getInitializeds = async function <K extends keyof InitializedResult>(url: string, options: MultiQueryOptions<InitializedFilter, InitializedResult>, args: InitializedArgs<K>): Promise<Pick<InitializedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<InitializedFilter, InitializedResult>> = { ...options };
    let paginationKey: keyof InitializedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof InitializedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<InitializedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("initializeds", paginatedOptions, args)
        });
        const r = res.data as any;
        if (r.errors && r.errors.length) {
            throw new Error(r.errors[0].message);
        }
        const rawResults = r.data[Object.keys(r.data)[0]] as any[];
        const newResults = rawResults.map((obj) => {
            const formattedObj: any = {};
            if (obj["id"])
                formattedObj["id"] = obj["id"];
            if (obj["version"])
                formattedObj["version"] = obj["version"];
            return formattedObj as Pick<InitializedResult, K>;
        });
        results = results.concat(newResults);
        if (newResults.length < 1000) {
            break;
        }
        if (paginationKey) {
            paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy!];
        }
    } while (paginationKey && (options.first && results.length < options.first));
    return options.first ? results.slice(0, options.first) : results;
};
export type OwnershipTransferredFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    previousOwner?: string | null;
    previousOwner_not?: string | null;
    previousOwner_in?: string[];
    previousOwner_not_in?: string[];
    previousOwner_contains?: string | null;
    previousOwner_not_contains?: string | null;
    newOwner?: string | null;
    newOwner_not?: string | null;
    newOwner_in?: string[];
    newOwner_not_in?: string[];
    newOwner_contains?: string | null;
    newOwner_not_contains?: string | null;
};
export type OwnershipTransferredResult = {
    id: string;
    previousOwner: string;
    newOwner: string;
};
export type OwnershipTransferredFields = {
    id: true;
    previousOwner: true;
    newOwner: true;
};
export type OwnershipTransferredArgs<K extends keyof OwnershipTransferredResult> = {
    [Property in keyof Pick<OwnershipTransferredFields, K>]: OwnershipTransferredFields[Property];
};
export const getOwnershipTransferredById = async function <K extends keyof OwnershipTransferredResult>(url: string, options: SingleQueryOptions, args: OwnershipTransferredArgs<K>): Promise<Pick<OwnershipTransferredResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("ownershipTransferred", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["previousOwner"])
        formattedObj["previousOwner"] = obj["previousOwner"];
    if (obj["newOwner"])
        formattedObj["newOwner"] = obj["newOwner"];
    return formattedObj as Pick<OwnershipTransferredResult, K>;
};
export const getOwnershipTransferreds = async function <K extends keyof OwnershipTransferredResult>(url: string, options: MultiQueryOptions<OwnershipTransferredFilter, OwnershipTransferredResult>, args: OwnershipTransferredArgs<K>): Promise<Pick<OwnershipTransferredResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<OwnershipTransferredFilter, OwnershipTransferredResult>> = { ...options };
    let paginationKey: keyof OwnershipTransferredFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof OwnershipTransferredFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<OwnershipTransferredResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("ownershipTransferreds", paginatedOptions, args)
        });
        const r = res.data as any;
        if (r.errors && r.errors.length) {
            throw new Error(r.errors[0].message);
        }
        const rawResults = r.data[Object.keys(r.data)[0]] as any[];
        const newResults = rawResults.map((obj) => {
            const formattedObj: any = {};
            if (obj["id"])
                formattedObj["id"] = obj["id"];
            if (obj["previousOwner"])
                formattedObj["previousOwner"] = obj["previousOwner"];
            if (obj["newOwner"])
                formattedObj["newOwner"] = obj["newOwner"];
            return formattedObj as Pick<OwnershipTransferredResult, K>;
        });
        results = results.concat(newResults);
        if (newResults.length < 1000) {
            break;
        }
        if (paginationKey) {
            paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy!];
        }
    } while (paginationKey && (options.first && results.length < options.first));
    return options.first ? results.slice(0, options.first) : results;
};
