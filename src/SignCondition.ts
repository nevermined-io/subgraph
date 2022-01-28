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
