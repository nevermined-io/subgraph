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
