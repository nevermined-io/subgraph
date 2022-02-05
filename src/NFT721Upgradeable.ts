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
    approved?: string | null;
    approved_not?: string | null;
    approved_in?: string[];
    approved_not_in?: string[];
    approved_contains?: string | null;
    approved_not_contains?: string | null;
    tokenId?: WeiSource | null;
    tokenId_not?: WeiSource | null;
    tokenId_gt?: WeiSource | null;
    tokenId_lt?: WeiSource | null;
    tokenId_gte?: WeiSource | null;
    tokenId_lte?: WeiSource | null;
    tokenId_in?: WeiSource[];
    tokenId_not_in?: WeiSource[];
};
export type ApprovalResult = {
    id: string;
    owner: string;
    approved: string;
    tokenId: Wei;
};
export type ApprovalFields = {
    id: true;
    owner: true;
    approved: true;
    tokenId: true;
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
    if (obj["approved"])
        formattedObj["approved"] = obj["approved"];
    if (obj["tokenId"])
        formattedObj["tokenId"] = wei(obj["tokenId"], 0);
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
            if (obj["approved"])
                formattedObj["approved"] = obj["approved"];
            if (obj["tokenId"])
                formattedObj["tokenId"] = wei(obj["tokenId"], 0);
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
export type ApprovalForAllFilter = {
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
    operator?: string | null;
    operator_not?: string | null;
    operator_in?: string[];
    operator_not_in?: string[];
    operator_contains?: string | null;
    operator_not_contains?: string | null;
    approved?: boolean | null;
    approved_not?: boolean | null;
    approved_in?: boolean[];
    approved_not_in?: boolean[];
};
export type ApprovalForAllResult = {
    id: string;
    owner: string;
    operator: string;
    approved: boolean;
};
export type ApprovalForAllFields = {
    id: true;
    owner: true;
    operator: true;
    approved: true;
};
export type ApprovalForAllArgs<K extends keyof ApprovalForAllResult> = {
    [Property in keyof Pick<ApprovalForAllFields, K>]: ApprovalForAllFields[Property];
};
export const getApprovalForAllById = async function <K extends keyof ApprovalForAllResult>(url: string, options: SingleQueryOptions, args: ApprovalForAllArgs<K>): Promise<Pick<ApprovalForAllResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("approvalForAll", options, args)
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
    if (obj["operator"])
        formattedObj["operator"] = obj["operator"];
    if (obj["approved"])
        formattedObj["approved"] = obj["approved"];
    return formattedObj as Pick<ApprovalForAllResult, K>;
};
export const getApprovalForAlls = async function <K extends keyof ApprovalForAllResult>(url: string, options: MultiQueryOptions<ApprovalForAllFilter, ApprovalForAllResult>, args: ApprovalForAllArgs<K>): Promise<Pick<ApprovalForAllResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<ApprovalForAllFilter, ApprovalForAllResult>> = { ...options };
    let paginationKey: keyof ApprovalForAllFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof ApprovalForAllFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<ApprovalForAllResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("approvalForAlls", paginatedOptions, args)
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
            if (obj["operator"])
                formattedObj["operator"] = obj["operator"];
            if (obj["approved"])
                formattedObj["approved"] = obj["approved"];
            return formattedObj as Pick<ApprovalForAllResult, K>;
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
export type ProxyApprovalFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    sender?: string | null;
    sender_not?: string | null;
    sender_in?: string[];
    sender_not_in?: string[];
    sender_contains?: string | null;
    sender_not_contains?: string | null;
    operator?: string | null;
    operator_not?: string | null;
    operator_in?: string[];
    operator_not_in?: string[];
    operator_contains?: string | null;
    operator_not_contains?: string | null;
    approved?: boolean | null;
    approved_not?: boolean | null;
    approved_in?: boolean[];
    approved_not_in?: boolean[];
};
export type ProxyApprovalResult = {
    id: string;
    sender: string;
    operator: string;
    approved: boolean;
};
export type ProxyApprovalFields = {
    id: true;
    sender: true;
    operator: true;
    approved: true;
};
export type ProxyApprovalArgs<K extends keyof ProxyApprovalResult> = {
    [Property in keyof Pick<ProxyApprovalFields, K>]: ProxyApprovalFields[Property];
};
export const getProxyApprovalById = async function <K extends keyof ProxyApprovalResult>(url: string, options: SingleQueryOptions, args: ProxyApprovalArgs<K>): Promise<Pick<ProxyApprovalResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("proxyApproval", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["sender"])
        formattedObj["sender"] = obj["sender"];
    if (obj["operator"])
        formattedObj["operator"] = obj["operator"];
    if (obj["approved"])
        formattedObj["approved"] = obj["approved"];
    return formattedObj as Pick<ProxyApprovalResult, K>;
};
export const getProxyApprovals = async function <K extends keyof ProxyApprovalResult>(url: string, options: MultiQueryOptions<ProxyApprovalFilter, ProxyApprovalResult>, args: ProxyApprovalArgs<K>): Promise<Pick<ProxyApprovalResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<ProxyApprovalFilter, ProxyApprovalResult>> = { ...options };
    let paginationKey: keyof ProxyApprovalFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof ProxyApprovalFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<ProxyApprovalResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("proxyApprovals", paginatedOptions, args)
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
            if (obj["sender"])
                formattedObj["sender"] = obj["sender"];
            if (obj["operator"])
                formattedObj["operator"] = obj["operator"];
            if (obj["approved"])
                formattedObj["approved"] = obj["approved"];
            return formattedObj as Pick<ProxyApprovalResult, K>;
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
    tokenId?: WeiSource | null;
    tokenId_not?: WeiSource | null;
    tokenId_gt?: WeiSource | null;
    tokenId_lt?: WeiSource | null;
    tokenId_gte?: WeiSource | null;
    tokenId_lte?: WeiSource | null;
    tokenId_in?: WeiSource[];
    tokenId_not_in?: WeiSource[];
};
export type TransferResult = {
    id: string;
    from: string;
    to: string;
    tokenId: Wei;
};
export type TransferFields = {
    id: true;
    from: true;
    to: true;
    tokenId: true;
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
    if (obj["tokenId"])
        formattedObj["tokenId"] = wei(obj["tokenId"], 0);
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
            if (obj["tokenId"])
                formattedObj["tokenId"] = wei(obj["tokenId"], 0);
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
