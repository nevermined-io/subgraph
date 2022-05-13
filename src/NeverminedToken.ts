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
export type ApprovalFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    owner?: string | null;
    owner_not?: string | null;
    owner_in?: string[];
    owner_not_in?: string[];
    owner_contains?: string | null;
    owner_not_contains?: string | null;
    spender?: string | null;
    spender_not?: string | null;
    spender_in?: string[];
    spender_not_in?: string[];
    spender_contains?: string | null;
    spender_not_contains?: string | null;
    value?: WeiSource | null;
    value_not?: WeiSource | null;
    value_gt?: WeiSource | null;
    value_lt?: WeiSource | null;
    value_gte?: WeiSource | null;
    value_lte?: WeiSource | null;
    value_in?: WeiSource[];
    value_not_in?: WeiSource[];
};
export type ApprovalResult = {
    id: string;
    owner: string;
    spender: string;
    value: Wei;
};
export type ApprovalFields = {
    id: true;
    owner: true;
    spender: true;
    value: true;
};
export type ApprovalArgs<K extends keyof ApprovalResult> = {
    [Property in keyof Pick<ApprovalFields, K>]: ApprovalFields[Property];
};
export const getApprovalById = async function <K extends keyof ApprovalResult>(url: string, options: SingleQueryOptions, args: ApprovalArgs<K>): Promise<Pick<ApprovalResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("approval", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["owner"])
        formattedObj["owner"] = obj["owner"];
    if (obj["spender"])
        formattedObj["spender"] = obj["spender"];
    if (obj["value"])
        formattedObj["value"] = wei(obj["value"], 0);
    return formattedObj as Pick<ApprovalResult, K>;
};
export const getApprovals = async function <K extends keyof ApprovalResult>(url: string, options: MultiQueryOptions<ApprovalFilter, ApprovalResult>, args: ApprovalArgs<K>): Promise<Pick<ApprovalResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<ApprovalFilter, ApprovalResult>> = { ...options };
    let paginationKey: keyof ApprovalFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof ApprovalFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<ApprovalResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("approvals", paginatedOptions, args)
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
            if (obj["owner"])
                formattedObj["owner"] = obj["owner"];
            if (obj["spender"])
                formattedObj["spender"] = obj["spender"];
            if (obj["value"])
                formattedObj["value"] = wei(obj["value"], 0);
            return formattedObj as Pick<ApprovalResult, K>;
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
export type RoleAdminChangedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    role?: string | null;
    role_not?: string | null;
    role_in?: string[];
    role_not_in?: string[];
    role_contains?: string | null;
    role_not_contains?: string | null;
    previousAdminRole?: string | null;
    previousAdminRole_not?: string | null;
    previousAdminRole_in?: string[];
    previousAdminRole_not_in?: string[];
    previousAdminRole_contains?: string | null;
    previousAdminRole_not_contains?: string | null;
    newAdminRole?: string | null;
    newAdminRole_not?: string | null;
    newAdminRole_in?: string[];
    newAdminRole_not_in?: string[];
    newAdminRole_contains?: string | null;
    newAdminRole_not_contains?: string | null;
};
export type RoleAdminChangedResult = {
    id: string;
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
};
export type RoleAdminChangedFields = {
    id: true;
    role: true;
    previousAdminRole: true;
    newAdminRole: true;
};
export type RoleAdminChangedArgs<K extends keyof RoleAdminChangedResult> = {
    [Property in keyof Pick<RoleAdminChangedFields, K>]: RoleAdminChangedFields[Property];
};
export const getRoleAdminChangedById = async function <K extends keyof RoleAdminChangedResult>(url: string, options: SingleQueryOptions, args: RoleAdminChangedArgs<K>): Promise<Pick<RoleAdminChangedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("roleAdminChanged", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["role"])
        formattedObj["role"] = obj["role"];
    if (obj["previousAdminRole"])
        formattedObj["previousAdminRole"] = obj["previousAdminRole"];
    if (obj["newAdminRole"])
        formattedObj["newAdminRole"] = obj["newAdminRole"];
    return formattedObj as Pick<RoleAdminChangedResult, K>;
};
export const getRoleAdminChangeds = async function <K extends keyof RoleAdminChangedResult>(url: string, options: MultiQueryOptions<RoleAdminChangedFilter, RoleAdminChangedResult>, args: RoleAdminChangedArgs<K>): Promise<Pick<RoleAdminChangedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<RoleAdminChangedFilter, RoleAdminChangedResult>> = { ...options };
    let paginationKey: keyof RoleAdminChangedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof RoleAdminChangedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<RoleAdminChangedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("roleAdminChangeds", paginatedOptions, args)
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
            if (obj["role"])
                formattedObj["role"] = obj["role"];
            if (obj["previousAdminRole"])
                formattedObj["previousAdminRole"] = obj["previousAdminRole"];
            if (obj["newAdminRole"])
                formattedObj["newAdminRole"] = obj["newAdminRole"];
            return formattedObj as Pick<RoleAdminChangedResult, K>;
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
export type RoleGrantedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    role?: string | null;
    role_not?: string | null;
    role_in?: string[];
    role_not_in?: string[];
    role_contains?: string | null;
    role_not_contains?: string | null;
    account?: string | null;
    account_not?: string | null;
    account_in?: string[];
    account_not_in?: string[];
    account_contains?: string | null;
    account_not_contains?: string | null;
    sender?: string | null;
    sender_not?: string | null;
    sender_in?: string[];
    sender_not_in?: string[];
    sender_contains?: string | null;
    sender_not_contains?: string | null;
};
export type RoleGrantedResult = {
    id: string;
    role: string;
    account: string;
    sender: string;
};
export type RoleGrantedFields = {
    id: true;
    role: true;
    account: true;
    sender: true;
};
export type RoleGrantedArgs<K extends keyof RoleGrantedResult> = {
    [Property in keyof Pick<RoleGrantedFields, K>]: RoleGrantedFields[Property];
};
export const getRoleGrantedById = async function <K extends keyof RoleGrantedResult>(url: string, options: SingleQueryOptions, args: RoleGrantedArgs<K>): Promise<Pick<RoleGrantedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("roleGranted", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["role"])
        formattedObj["role"] = obj["role"];
    if (obj["account"])
        formattedObj["account"] = obj["account"];
    if (obj["sender"])
        formattedObj["sender"] = obj["sender"];
    return formattedObj as Pick<RoleGrantedResult, K>;
};
export const getRoleGranteds = async function <K extends keyof RoleGrantedResult>(url: string, options: MultiQueryOptions<RoleGrantedFilter, RoleGrantedResult>, args: RoleGrantedArgs<K>): Promise<Pick<RoleGrantedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<RoleGrantedFilter, RoleGrantedResult>> = { ...options };
    let paginationKey: keyof RoleGrantedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof RoleGrantedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<RoleGrantedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("roleGranteds", paginatedOptions, args)
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
            if (obj["role"])
                formattedObj["role"] = obj["role"];
            if (obj["account"])
                formattedObj["account"] = obj["account"];
            if (obj["sender"])
                formattedObj["sender"] = obj["sender"];
            return formattedObj as Pick<RoleGrantedResult, K>;
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
export type RoleRevokedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    role?: string | null;
    role_not?: string | null;
    role_in?: string[];
    role_not_in?: string[];
    role_contains?: string | null;
    role_not_contains?: string | null;
    account?: string | null;
    account_not?: string | null;
    account_in?: string[];
    account_not_in?: string[];
    account_contains?: string | null;
    account_not_contains?: string | null;
    sender?: string | null;
    sender_not?: string | null;
    sender_in?: string[];
    sender_not_in?: string[];
    sender_contains?: string | null;
    sender_not_contains?: string | null;
};
export type RoleRevokedResult = {
    id: string;
    role: string;
    account: string;
    sender: string;
};
export type RoleRevokedFields = {
    id: true;
    role: true;
    account: true;
    sender: true;
};
export type RoleRevokedArgs<K extends keyof RoleRevokedResult> = {
    [Property in keyof Pick<RoleRevokedFields, K>]: RoleRevokedFields[Property];
};
export const getRoleRevokedById = async function <K extends keyof RoleRevokedResult>(url: string, options: SingleQueryOptions, args: RoleRevokedArgs<K>): Promise<Pick<RoleRevokedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("roleRevoked", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["role"])
        formattedObj["role"] = obj["role"];
    if (obj["account"])
        formattedObj["account"] = obj["account"];
    if (obj["sender"])
        formattedObj["sender"] = obj["sender"];
    return formattedObj as Pick<RoleRevokedResult, K>;
};
export const getRoleRevokeds = async function <K extends keyof RoleRevokedResult>(url: string, options: MultiQueryOptions<RoleRevokedFilter, RoleRevokedResult>, args: RoleRevokedArgs<K>): Promise<Pick<RoleRevokedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<RoleRevokedFilter, RoleRevokedResult>> = { ...options };
    let paginationKey: keyof RoleRevokedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof RoleRevokedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<RoleRevokedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("roleRevokeds", paginatedOptions, args)
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
            if (obj["role"])
                formattedObj["role"] = obj["role"];
            if (obj["account"])
                formattedObj["account"] = obj["account"];
            if (obj["sender"])
                formattedObj["sender"] = obj["sender"];
            return formattedObj as Pick<RoleRevokedResult, K>;
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
export type TransferFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    from?: string | null;
    from_not?: string | null;
    from_in?: string[];
    from_not_in?: string[];
    from_contains?: string | null;
    from_not_contains?: string | null;
    to?: string | null;
    to_not?: string | null;
    to_in?: string[];
    to_not_in?: string[];
    to_contains?: string | null;
    to_not_contains?: string | null;
    value?: WeiSource | null;
    value_not?: WeiSource | null;
    value_gt?: WeiSource | null;
    value_lt?: WeiSource | null;
    value_gte?: WeiSource | null;
    value_lte?: WeiSource | null;
    value_in?: WeiSource[];
    value_not_in?: WeiSource[];
};
export type TransferResult = {
    id: string;
    from: string;
    to: string;
    value: Wei;
};
export type TransferFields = {
    id: true;
    from: true;
    to: true;
    value: true;
};
export type TransferArgs<K extends keyof TransferResult> = {
    [Property in keyof Pick<TransferFields, K>]: TransferFields[Property];
};
export const getTransferById = async function <K extends keyof TransferResult>(url: string, options: SingleQueryOptions, args: TransferArgs<K>): Promise<Pick<TransferResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("transfer", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["from"])
        formattedObj["from"] = obj["from"];
    if (obj["to"])
        formattedObj["to"] = obj["to"];
    if (obj["value"])
        formattedObj["value"] = wei(obj["value"], 0);
    return formattedObj as Pick<TransferResult, K>;
};
export const getTransfers = async function <K extends keyof TransferResult>(url: string, options: MultiQueryOptions<TransferFilter, TransferResult>, args: TransferArgs<K>): Promise<Pick<TransferResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<TransferFilter, TransferResult>> = { ...options };
    let paginationKey: keyof TransferFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof TransferFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<TransferResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("transfers", paginatedOptions, args)
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
            if (obj["from"])
                formattedObj["from"] = obj["from"];
            if (obj["to"])
                formattedObj["to"] = obj["to"];
            if (obj["value"])
                formattedObj["value"] = wei(obj["value"], 0);
            return formattedObj as Pick<TransferResult, K>;
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
