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
export type AgreementCreatedFilter = {
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
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _accessConsumer?: string | null;
    _accessConsumer_not?: string | null;
    _accessConsumer_in?: string[];
    _accessConsumer_not_in?: string[];
    _accessConsumer_contains?: string | null;
    _accessConsumer_not_contains?: string | null;
    _accessProvider?: string | null;
    _accessProvider_not?: string | null;
    _accessProvider_in?: string[];
    _accessProvider_not_in?: string[];
    _accessProvider_contains?: string | null;
    _accessProvider_not_contains?: string | null;
    _timeLocks?: WeiSource[];
    _timeLocks_not?: WeiSource[];
    _timeLocks_contains?: WeiSource[];
    _timeLocks_not_contains?: WeiSource[];
    _timeOuts?: WeiSource[];
    _timeOuts_not?: WeiSource[];
    _timeOuts_contains?: WeiSource[];
    _timeOuts_not_contains?: WeiSource[];
    _conditionIdSeeds?: string[];
    _conditionIdSeeds_not?: string[];
    _conditionIdSeeds_contains?: string[];
    _conditionIdSeeds_not_contains?: string[];
    _conditionIds?: string[];
    _conditionIds_not?: string[];
    _conditionIds_contains?: string[];
    _conditionIds_not_contains?: string[];
    _idSeed?: string | null;
    _idSeed_not?: string | null;
    _idSeed_in?: string[];
    _idSeed_not_in?: string[];
    _idSeed_contains?: string | null;
    _idSeed_not_contains?: string | null;
    _creator?: string | null;
    _creator_not?: string | null;
    _creator_in?: string[];
    _creator_not_in?: string[];
    _creator_contains?: string | null;
    _creator_not_contains?: string | null;
};
export type AgreementCreatedResult = {
    id: string;
    _agreementId: string;
    _did: string;
    _accessConsumer: string;
    _accessProvider: string;
    _timeLocks: (Wei | null)[];
    _timeOuts: (Wei | null)[];
    _conditionIdSeeds: (string | null)[];
    _conditionIds: (string | null)[];
    _idSeed: string;
    _creator: string;
};
export type AgreementCreatedFields = {
    id: true;
    _agreementId: true;
    _did: true;
    _accessConsumer: true;
    _accessProvider: true;
    _timeLocks: true;
    _timeOuts: true;
    _conditionIdSeeds: true;
    _conditionIds: true;
    _idSeed: true;
    _creator: true;
};
export type AgreementCreatedArgs<K extends keyof AgreementCreatedResult> = {
    [Property in keyof Pick<AgreementCreatedFields, K>]: AgreementCreatedFields[Property];
};
export const getAgreementCreatedById = async function <K extends keyof AgreementCreatedResult>(url: string, options: SingleQueryOptions, args: AgreementCreatedArgs<K>): Promise<Pick<AgreementCreatedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("agreementCreated", options, args)
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
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_accessConsumer"])
        formattedObj["_accessConsumer"] = obj["_accessConsumer"];
    if (obj["_accessProvider"])
        formattedObj["_accessProvider"] = obj["_accessProvider"];
    if (obj["_timeLocks"])
        formattedObj["_timeLocks"] = wei(obj["_timeLocks"], 0);
    if (obj["_timeOuts"])
        formattedObj["_timeOuts"] = wei(obj["_timeOuts"], 0);
    if (obj["_conditionIdSeeds"])
        formattedObj["_conditionIdSeeds"] = obj["_conditionIdSeeds"];
    if (obj["_conditionIds"])
        formattedObj["_conditionIds"] = obj["_conditionIds"];
    if (obj["_idSeed"])
        formattedObj["_idSeed"] = obj["_idSeed"];
    if (obj["_creator"])
        formattedObj["_creator"] = obj["_creator"];
    return formattedObj as Pick<AgreementCreatedResult, K>;
};
export const getAgreementCreateds = async function <K extends keyof AgreementCreatedResult>(url: string, options: MultiQueryOptions<AgreementCreatedFilter, AgreementCreatedResult>, args: AgreementCreatedArgs<K>): Promise<Pick<AgreementCreatedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<AgreementCreatedFilter, AgreementCreatedResult>> = { ...options };
    let paginationKey: keyof AgreementCreatedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof AgreementCreatedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<AgreementCreatedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("agreementCreateds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_accessConsumer"])
                formattedObj["_accessConsumer"] = obj["_accessConsumer"];
            if (obj["_accessProvider"])
                formattedObj["_accessProvider"] = obj["_accessProvider"];
            if (obj["_timeLocks"])
                formattedObj["_timeLocks"] = wei(obj["_timeLocks"], 0);
            if (obj["_timeOuts"])
                formattedObj["_timeOuts"] = wei(obj["_timeOuts"], 0);
            if (obj["_conditionIdSeeds"])
                formattedObj["_conditionIdSeeds"] = obj["_conditionIdSeeds"];
            if (obj["_conditionIds"])
                formattedObj["_conditionIds"] = obj["_conditionIds"];
            if (obj["_idSeed"])
                formattedObj["_idSeed"] = obj["_idSeed"];
            if (obj["_creator"])
                formattedObj["_creator"] = obj["_creator"];
            return formattedObj as Pick<AgreementCreatedResult, K>;
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
