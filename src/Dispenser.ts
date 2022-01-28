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
export type RequestFrequencyExceededFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    requester?: string | null;
    requester_not?: string | null;
    requester_in?: string[];
    requester_not_in?: string[];
    requester_contains?: string | null;
    requester_not_contains?: string | null;
    minPeriod?: WeiSource | null;
    minPeriod_not?: WeiSource | null;
    minPeriod_gt?: WeiSource | null;
    minPeriod_lt?: WeiSource | null;
    minPeriod_gte?: WeiSource | null;
    minPeriod_lte?: WeiSource | null;
    minPeriod_in?: WeiSource[];
    minPeriod_not_in?: WeiSource[];
};
export type RequestFrequencyExceededResult = {
    id: string;
    requester: string;
    minPeriod: Wei;
};
export type RequestFrequencyExceededFields = {
    id: true;
    requester: true;
    minPeriod: true;
};
export type RequestFrequencyExceededArgs<K extends keyof RequestFrequencyExceededResult> = {
    [Property in keyof Pick<RequestFrequencyExceededFields, K>]: RequestFrequencyExceededFields[Property];
};
export const getRequestFrequencyExceededById = async function <K extends keyof RequestFrequencyExceededResult>(url: string, options: SingleQueryOptions, args: RequestFrequencyExceededArgs<K>): Promise<Pick<RequestFrequencyExceededResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("requestFrequencyExceeded", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["requester"])
        formattedObj["requester"] = obj["requester"];
    if (obj["minPeriod"])
        formattedObj["minPeriod"] = wei(obj["minPeriod"], 0);
    return formattedObj as Pick<RequestFrequencyExceededResult, K>;
};
export const getRequestFrequencyExceededs = async function <K extends keyof RequestFrequencyExceededResult>(url: string, options: MultiQueryOptions<RequestFrequencyExceededFilter, RequestFrequencyExceededResult>, args: RequestFrequencyExceededArgs<K>): Promise<Pick<RequestFrequencyExceededResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<RequestFrequencyExceededFilter, RequestFrequencyExceededResult>> = { ...options };
    let paginationKey: keyof RequestFrequencyExceededFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof RequestFrequencyExceededFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<RequestFrequencyExceededResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("requestFrequencyExceededs", paginatedOptions, args)
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
            if (obj["requester"])
                formattedObj["requester"] = obj["requester"];
            if (obj["minPeriod"])
                formattedObj["minPeriod"] = wei(obj["minPeriod"], 0);
            return formattedObj as Pick<RequestFrequencyExceededResult, K>;
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
export type RequestLimitExceededFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    requester?: string | null;
    requester_not?: string | null;
    requester_in?: string[];
    requester_not_in?: string[];
    requester_contains?: string | null;
    requester_not_contains?: string | null;
    amount?: WeiSource | null;
    amount_not?: WeiSource | null;
    amount_gt?: WeiSource | null;
    amount_lt?: WeiSource | null;
    amount_gte?: WeiSource | null;
    amount_lte?: WeiSource | null;
    amount_in?: WeiSource[];
    amount_not_in?: WeiSource[];
    maxAmount?: WeiSource | null;
    maxAmount_not?: WeiSource | null;
    maxAmount_gt?: WeiSource | null;
    maxAmount_lt?: WeiSource | null;
    maxAmount_gte?: WeiSource | null;
    maxAmount_lte?: WeiSource | null;
    maxAmount_in?: WeiSource[];
    maxAmount_not_in?: WeiSource[];
};
export type RequestLimitExceededResult = {
    id: string;
    requester: string;
    amount: Wei;
    maxAmount: Wei;
};
export type RequestLimitExceededFields = {
    id: true;
    requester: true;
    amount: true;
    maxAmount: true;
};
export type RequestLimitExceededArgs<K extends keyof RequestLimitExceededResult> = {
    [Property in keyof Pick<RequestLimitExceededFields, K>]: RequestLimitExceededFields[Property];
};
export const getRequestLimitExceededById = async function <K extends keyof RequestLimitExceededResult>(url: string, options: SingleQueryOptions, args: RequestLimitExceededArgs<K>): Promise<Pick<RequestLimitExceededResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("requestLimitExceeded", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["requester"])
        formattedObj["requester"] = obj["requester"];
    if (obj["amount"])
        formattedObj["amount"] = wei(obj["amount"], 0);
    if (obj["maxAmount"])
        formattedObj["maxAmount"] = wei(obj["maxAmount"], 0);
    return formattedObj as Pick<RequestLimitExceededResult, K>;
};
export const getRequestLimitExceededs = async function <K extends keyof RequestLimitExceededResult>(url: string, options: MultiQueryOptions<RequestLimitExceededFilter, RequestLimitExceededResult>, args: RequestLimitExceededArgs<K>): Promise<Pick<RequestLimitExceededResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<RequestLimitExceededFilter, RequestLimitExceededResult>> = { ...options };
    let paginationKey: keyof RequestLimitExceededFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof RequestLimitExceededFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<RequestLimitExceededResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("requestLimitExceededs", paginatedOptions, args)
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
            if (obj["requester"])
                formattedObj["requester"] = obj["requester"];
            if (obj["amount"])
                formattedObj["amount"] = wei(obj["amount"], 0);
            if (obj["maxAmount"])
                formattedObj["maxAmount"] = wei(obj["maxAmount"], 0);
            return formattedObj as Pick<RequestLimitExceededResult, K>;
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
