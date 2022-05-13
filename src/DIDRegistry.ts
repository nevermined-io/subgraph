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
export type ActedOnBehalfFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _entityDid?: string | null;
    _entityDid_not?: string | null;
    _entityDid_in?: string[];
    _entityDid_not_in?: string[];
    _entityDid_contains?: string | null;
    _entityDid_not_contains?: string | null;
    _delegateAgentId?: string | null;
    _delegateAgentId_not?: string | null;
    _delegateAgentId_in?: string[];
    _delegateAgentId_not_in?: string[];
    _delegateAgentId_contains?: string | null;
    _delegateAgentId_not_contains?: string | null;
    _responsibleAgentId?: string | null;
    _responsibleAgentId_not?: string | null;
    _responsibleAgentId_in?: string[];
    _responsibleAgentId_not_in?: string[];
    _responsibleAgentId_contains?: string | null;
    _responsibleAgentId_not_contains?: string | null;
    _activityId?: string | null;
    _activityId_not?: string | null;
    _activityId_in?: string[];
    _activityId_not_in?: string[];
    _activityId_contains?: string | null;
    _activityId_not_contains?: string | null;
    provId?: string | null;
    provId_not?: string | null;
    provId_in?: string[];
    provId_not_in?: string[];
    provId_contains?: string | null;
    provId_not_contains?: string | null;
    _attributes?: string | null;
    _attributes_not?: string | null;
    _attributes_gt?: string | null;
    _attributes_lt?: string | null;
    _attributes_gte?: string | null;
    _attributes_lte?: string | null;
    _attributes_in?: string[];
    _attributes_not_in?: string[];
    _attributes_contains?: string | null;
    _attributes_not_contains?: string | null;
    _attributes_starts_with?: string | null;
    _attributes_not_starts_with?: string | null;
    _attributes_ends_with?: string | null;
    _attributes_not_ends_with?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type ActedOnBehalfResult = {
    id: string;
    _entityDid: string;
    _delegateAgentId: string;
    _responsibleAgentId: string;
    _activityId: string;
    provId: string;
    _attributes: string;
    _blockNumberUpdated: Wei;
};
export type ActedOnBehalfFields = {
    id: true;
    _entityDid: true;
    _delegateAgentId: true;
    _responsibleAgentId: true;
    _activityId: true;
    provId: true;
    _attributes: true;
    _blockNumberUpdated: true;
};
export type ActedOnBehalfArgs<K extends keyof ActedOnBehalfResult> = {
    [Property in keyof Pick<ActedOnBehalfFields, K>]: ActedOnBehalfFields[Property];
};
export const getActedOnBehalfById = async function <K extends keyof ActedOnBehalfResult>(url: string, options: SingleQueryOptions, args: ActedOnBehalfArgs<K>): Promise<Pick<ActedOnBehalfResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("actedOnBehalf", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_entityDid"])
        formattedObj["_entityDid"] = obj["_entityDid"];
    if (obj["_delegateAgentId"])
        formattedObj["_delegateAgentId"] = obj["_delegateAgentId"];
    if (obj["_responsibleAgentId"])
        formattedObj["_responsibleAgentId"] = obj["_responsibleAgentId"];
    if (obj["_activityId"])
        formattedObj["_activityId"] = obj["_activityId"];
    if (obj["provId"])
        formattedObj["provId"] = obj["provId"];
    if (obj["_attributes"])
        formattedObj["_attributes"] = obj["_attributes"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<ActedOnBehalfResult, K>;
};
export const getActedOnBehalfs = async function <K extends keyof ActedOnBehalfResult>(url: string, options: MultiQueryOptions<ActedOnBehalfFilter, ActedOnBehalfResult>, args: ActedOnBehalfArgs<K>): Promise<Pick<ActedOnBehalfResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<ActedOnBehalfFilter, ActedOnBehalfResult>> = { ...options };
    let paginationKey: keyof ActedOnBehalfFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof ActedOnBehalfFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<ActedOnBehalfResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("actedOnBehalves", paginatedOptions, args)
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
            if (obj["_entityDid"])
                formattedObj["_entityDid"] = obj["_entityDid"];
            if (obj["_delegateAgentId"])
                formattedObj["_delegateAgentId"] = obj["_delegateAgentId"];
            if (obj["_responsibleAgentId"])
                formattedObj["_responsibleAgentId"] = obj["_responsibleAgentId"];
            if (obj["_activityId"])
                formattedObj["_activityId"] = obj["_activityId"];
            if (obj["provId"])
                formattedObj["provId"] = obj["provId"];
            if (obj["_attributes"])
                formattedObj["_attributes"] = obj["_attributes"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<ActedOnBehalfResult, K>;
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
export type DIDAttributeRegisteredFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _owner?: string | null;
    _owner_not?: string | null;
    _owner_in?: string[];
    _owner_not_in?: string[];
    _owner_contains?: string | null;
    _owner_not_contains?: string | null;
    _checksum?: string | null;
    _checksum_not?: string | null;
    _checksum_in?: string[];
    _checksum_not_in?: string[];
    _checksum_contains?: string | null;
    _checksum_not_contains?: string | null;
    _value?: string | null;
    _value_not?: string | null;
    _value_gt?: string | null;
    _value_lt?: string | null;
    _value_gte?: string | null;
    _value_lte?: string | null;
    _value_in?: string[];
    _value_not_in?: string[];
    _value_contains?: string | null;
    _value_not_contains?: string | null;
    _value_starts_with?: string | null;
    _value_not_starts_with?: string | null;
    _value_ends_with?: string | null;
    _value_not_ends_with?: string | null;
    _lastUpdatedBy?: string | null;
    _lastUpdatedBy_not?: string | null;
    _lastUpdatedBy_in?: string[];
    _lastUpdatedBy_not_in?: string[];
    _lastUpdatedBy_contains?: string | null;
    _lastUpdatedBy_not_contains?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type DIDAttributeRegisteredResult = {
    id: string;
    _did: string;
    _owner: string;
    _checksum: string;
    _value: string;
    _lastUpdatedBy: string;
    _blockNumberUpdated: Wei;
};
export type DIDAttributeRegisteredFields = {
    id: true;
    _did: true;
    _owner: true;
    _checksum: true;
    _value: true;
    _lastUpdatedBy: true;
    _blockNumberUpdated: true;
};
export type DIDAttributeRegisteredArgs<K extends keyof DIDAttributeRegisteredResult> = {
    [Property in keyof Pick<DIDAttributeRegisteredFields, K>]: DIDAttributeRegisteredFields[Property];
};
export const getDIDAttributeRegisteredById = async function <K extends keyof DIDAttributeRegisteredResult>(url: string, options: SingleQueryOptions, args: DIDAttributeRegisteredArgs<K>): Promise<Pick<DIDAttributeRegisteredResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didattributeRegistered", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_owner"])
        formattedObj["_owner"] = obj["_owner"];
    if (obj["_checksum"])
        formattedObj["_checksum"] = obj["_checksum"];
    if (obj["_value"])
        formattedObj["_value"] = obj["_value"];
    if (obj["_lastUpdatedBy"])
        formattedObj["_lastUpdatedBy"] = obj["_lastUpdatedBy"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<DIDAttributeRegisteredResult, K>;
};
export const getDIDAttributeRegistereds = async function <K extends keyof DIDAttributeRegisteredResult>(url: string, options: MultiQueryOptions<DIDAttributeRegisteredFilter, DIDAttributeRegisteredResult>, args: DIDAttributeRegisteredArgs<K>): Promise<Pick<DIDAttributeRegisteredResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDAttributeRegisteredFilter, DIDAttributeRegisteredResult>> = { ...options };
    let paginationKey: keyof DIDAttributeRegisteredFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDAttributeRegisteredFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDAttributeRegisteredResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didattributeRegistereds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_owner"])
                formattedObj["_owner"] = obj["_owner"];
            if (obj["_checksum"])
                formattedObj["_checksum"] = obj["_checksum"];
            if (obj["_value"])
                formattedObj["_value"] = obj["_value"];
            if (obj["_lastUpdatedBy"])
                formattedObj["_lastUpdatedBy"] = obj["_lastUpdatedBy"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<DIDAttributeRegisteredResult, K>;
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
export type DIDOwnershipTransferredFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _previousOwner?: string | null;
    _previousOwner_not?: string | null;
    _previousOwner_in?: string[];
    _previousOwner_not_in?: string[];
    _previousOwner_contains?: string | null;
    _previousOwner_not_contains?: string | null;
    _newOwner?: string | null;
    _newOwner_not?: string | null;
    _newOwner_in?: string[];
    _newOwner_not_in?: string[];
    _newOwner_contains?: string | null;
    _newOwner_not_contains?: string | null;
};
export type DIDOwnershipTransferredResult = {
    id: string;
    _did: string;
    _previousOwner: string;
    _newOwner: string;
};
export type DIDOwnershipTransferredFields = {
    id: true;
    _did: true;
    _previousOwner: true;
    _newOwner: true;
};
export type DIDOwnershipTransferredArgs<K extends keyof DIDOwnershipTransferredResult> = {
    [Property in keyof Pick<DIDOwnershipTransferredFields, K>]: DIDOwnershipTransferredFields[Property];
};
export const getDIDOwnershipTransferredById = async function <K extends keyof DIDOwnershipTransferredResult>(url: string, options: SingleQueryOptions, args: DIDOwnershipTransferredArgs<K>): Promise<Pick<DIDOwnershipTransferredResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didownershipTransferred", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_previousOwner"])
        formattedObj["_previousOwner"] = obj["_previousOwner"];
    if (obj["_newOwner"])
        formattedObj["_newOwner"] = obj["_newOwner"];
    return formattedObj as Pick<DIDOwnershipTransferredResult, K>;
};
export const getDIDOwnershipTransferreds = async function <K extends keyof DIDOwnershipTransferredResult>(url: string, options: MultiQueryOptions<DIDOwnershipTransferredFilter, DIDOwnershipTransferredResult>, args: DIDOwnershipTransferredArgs<K>): Promise<Pick<DIDOwnershipTransferredResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDOwnershipTransferredFilter, DIDOwnershipTransferredResult>> = { ...options };
    let paginationKey: keyof DIDOwnershipTransferredFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDOwnershipTransferredFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDOwnershipTransferredResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didownershipTransferreds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_previousOwner"])
                formattedObj["_previousOwner"] = obj["_previousOwner"];
            if (obj["_newOwner"])
                formattedObj["_newOwner"] = obj["_newOwner"];
            return formattedObj as Pick<DIDOwnershipTransferredResult, K>;
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
export type DIDPermissionGrantedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _owner?: string | null;
    _owner_not?: string | null;
    _owner_in?: string[];
    _owner_not_in?: string[];
    _owner_contains?: string | null;
    _owner_not_contains?: string | null;
    _grantee?: string | null;
    _grantee_not?: string | null;
    _grantee_in?: string[];
    _grantee_not_in?: string[];
    _grantee_contains?: string | null;
    _grantee_not_contains?: string | null;
};
export type DIDPermissionGrantedResult = {
    id: string;
    _did: string;
    _owner: string;
    _grantee: string;
};
export type DIDPermissionGrantedFields = {
    id: true;
    _did: true;
    _owner: true;
    _grantee: true;
};
export type DIDPermissionGrantedArgs<K extends keyof DIDPermissionGrantedResult> = {
    [Property in keyof Pick<DIDPermissionGrantedFields, K>]: DIDPermissionGrantedFields[Property];
};
export const getDIDPermissionGrantedById = async function <K extends keyof DIDPermissionGrantedResult>(url: string, options: SingleQueryOptions, args: DIDPermissionGrantedArgs<K>): Promise<Pick<DIDPermissionGrantedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didpermissionGranted", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_owner"])
        formattedObj["_owner"] = obj["_owner"];
    if (obj["_grantee"])
        formattedObj["_grantee"] = obj["_grantee"];
    return formattedObj as Pick<DIDPermissionGrantedResult, K>;
};
export const getDIDPermissionGranteds = async function <K extends keyof DIDPermissionGrantedResult>(url: string, options: MultiQueryOptions<DIDPermissionGrantedFilter, DIDPermissionGrantedResult>, args: DIDPermissionGrantedArgs<K>): Promise<Pick<DIDPermissionGrantedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDPermissionGrantedFilter, DIDPermissionGrantedResult>> = { ...options };
    let paginationKey: keyof DIDPermissionGrantedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDPermissionGrantedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDPermissionGrantedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didpermissionGranteds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_owner"])
                formattedObj["_owner"] = obj["_owner"];
            if (obj["_grantee"])
                formattedObj["_grantee"] = obj["_grantee"];
            return formattedObj as Pick<DIDPermissionGrantedResult, K>;
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
export type DIDPermissionRevokedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _owner?: string | null;
    _owner_not?: string | null;
    _owner_in?: string[];
    _owner_not_in?: string[];
    _owner_contains?: string | null;
    _owner_not_contains?: string | null;
    _grantee?: string | null;
    _grantee_not?: string | null;
    _grantee_in?: string[];
    _grantee_not_in?: string[];
    _grantee_contains?: string | null;
    _grantee_not_contains?: string | null;
};
export type DIDPermissionRevokedResult = {
    id: string;
    _did: string;
    _owner: string;
    _grantee: string;
};
export type DIDPermissionRevokedFields = {
    id: true;
    _did: true;
    _owner: true;
    _grantee: true;
};
export type DIDPermissionRevokedArgs<K extends keyof DIDPermissionRevokedResult> = {
    [Property in keyof Pick<DIDPermissionRevokedFields, K>]: DIDPermissionRevokedFields[Property];
};
export const getDIDPermissionRevokedById = async function <K extends keyof DIDPermissionRevokedResult>(url: string, options: SingleQueryOptions, args: DIDPermissionRevokedArgs<K>): Promise<Pick<DIDPermissionRevokedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didpermissionRevoked", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_owner"])
        formattedObj["_owner"] = obj["_owner"];
    if (obj["_grantee"])
        formattedObj["_grantee"] = obj["_grantee"];
    return formattedObj as Pick<DIDPermissionRevokedResult, K>;
};
export const getDIDPermissionRevokeds = async function <K extends keyof DIDPermissionRevokedResult>(url: string, options: MultiQueryOptions<DIDPermissionRevokedFilter, DIDPermissionRevokedResult>, args: DIDPermissionRevokedArgs<K>): Promise<Pick<DIDPermissionRevokedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDPermissionRevokedFilter, DIDPermissionRevokedResult>> = { ...options };
    let paginationKey: keyof DIDPermissionRevokedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDPermissionRevokedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDPermissionRevokedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didpermissionRevokeds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_owner"])
                formattedObj["_owner"] = obj["_owner"];
            if (obj["_grantee"])
                formattedObj["_grantee"] = obj["_grantee"];
            return formattedObj as Pick<DIDPermissionRevokedResult, K>;
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
export type DIDProvenanceDelegateAddedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _delegate?: string | null;
    _delegate_not?: string | null;
    _delegate_in?: string[];
    _delegate_not_in?: string[];
    _delegate_contains?: string | null;
    _delegate_not_contains?: string | null;
};
export type DIDProvenanceDelegateAddedResult = {
    id: string;
    _did: string;
    _delegate: string;
};
export type DIDProvenanceDelegateAddedFields = {
    id: true;
    _did: true;
    _delegate: true;
};
export type DIDProvenanceDelegateAddedArgs<K extends keyof DIDProvenanceDelegateAddedResult> = {
    [Property in keyof Pick<DIDProvenanceDelegateAddedFields, K>]: DIDProvenanceDelegateAddedFields[Property];
};
export const getDIDProvenanceDelegateAddedById = async function <K extends keyof DIDProvenanceDelegateAddedResult>(url: string, options: SingleQueryOptions, args: DIDProvenanceDelegateAddedArgs<K>): Promise<Pick<DIDProvenanceDelegateAddedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didprovenanceDelegateAdded", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_delegate"])
        formattedObj["_delegate"] = obj["_delegate"];
    return formattedObj as Pick<DIDProvenanceDelegateAddedResult, K>;
};
export const getDIDProvenanceDelegateAddeds = async function <K extends keyof DIDProvenanceDelegateAddedResult>(url: string, options: MultiQueryOptions<DIDProvenanceDelegateAddedFilter, DIDProvenanceDelegateAddedResult>, args: DIDProvenanceDelegateAddedArgs<K>): Promise<Pick<DIDProvenanceDelegateAddedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDProvenanceDelegateAddedFilter, DIDProvenanceDelegateAddedResult>> = { ...options };
    let paginationKey: keyof DIDProvenanceDelegateAddedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDProvenanceDelegateAddedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDProvenanceDelegateAddedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didprovenanceDelegateAddeds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_delegate"])
                formattedObj["_delegate"] = obj["_delegate"];
            return formattedObj as Pick<DIDProvenanceDelegateAddedResult, K>;
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
export type DIDProvenanceDelegateRemovedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _delegate?: string | null;
    _delegate_not?: string | null;
    _delegate_in?: string[];
    _delegate_not_in?: string[];
    _delegate_contains?: string | null;
    _delegate_not_contains?: string | null;
    state?: boolean | null;
    state_not?: boolean | null;
    state_in?: boolean[];
    state_not_in?: boolean[];
};
export type DIDProvenanceDelegateRemovedResult = {
    id: string;
    _did: string;
    _delegate: string;
    state: boolean;
};
export type DIDProvenanceDelegateRemovedFields = {
    id: true;
    _did: true;
    _delegate: true;
    state: true;
};
export type DIDProvenanceDelegateRemovedArgs<K extends keyof DIDProvenanceDelegateRemovedResult> = {
    [Property in keyof Pick<DIDProvenanceDelegateRemovedFields, K>]: DIDProvenanceDelegateRemovedFields[Property];
};
export const getDIDProvenanceDelegateRemovedById = async function <K extends keyof DIDProvenanceDelegateRemovedResult>(url: string, options: SingleQueryOptions, args: DIDProvenanceDelegateRemovedArgs<K>): Promise<Pick<DIDProvenanceDelegateRemovedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didprovenanceDelegateRemoved", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_delegate"])
        formattedObj["_delegate"] = obj["_delegate"];
    if (obj["state"])
        formattedObj["state"] = obj["state"];
    return formattedObj as Pick<DIDProvenanceDelegateRemovedResult, K>;
};
export const getDIDProvenanceDelegateRemoveds = async function <K extends keyof DIDProvenanceDelegateRemovedResult>(url: string, options: MultiQueryOptions<DIDProvenanceDelegateRemovedFilter, DIDProvenanceDelegateRemovedResult>, args: DIDProvenanceDelegateRemovedArgs<K>): Promise<Pick<DIDProvenanceDelegateRemovedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDProvenanceDelegateRemovedFilter, DIDProvenanceDelegateRemovedResult>> = { ...options };
    let paginationKey: keyof DIDProvenanceDelegateRemovedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDProvenanceDelegateRemovedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDProvenanceDelegateRemovedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didprovenanceDelegateRemoveds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_delegate"])
                formattedObj["_delegate"] = obj["_delegate"];
            if (obj["state"])
                formattedObj["state"] = obj["state"];
            return formattedObj as Pick<DIDProvenanceDelegateRemovedResult, K>;
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
export type DIDProviderAddedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _provider?: string | null;
    _provider_not?: string | null;
    _provider_in?: string[];
    _provider_not_in?: string[];
    _provider_contains?: string | null;
    _provider_not_contains?: string | null;
};
export type DIDProviderAddedResult = {
    id: string;
    _did: string;
    _provider: string;
};
export type DIDProviderAddedFields = {
    id: true;
    _did: true;
    _provider: true;
};
export type DIDProviderAddedArgs<K extends keyof DIDProviderAddedResult> = {
    [Property in keyof Pick<DIDProviderAddedFields, K>]: DIDProviderAddedFields[Property];
};
export const getDIDProviderAddedById = async function <K extends keyof DIDProviderAddedResult>(url: string, options: SingleQueryOptions, args: DIDProviderAddedArgs<K>): Promise<Pick<DIDProviderAddedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didproviderAdded", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_provider"])
        formattedObj["_provider"] = obj["_provider"];
    return formattedObj as Pick<DIDProviderAddedResult, K>;
};
export const getDIDProviderAddeds = async function <K extends keyof DIDProviderAddedResult>(url: string, options: MultiQueryOptions<DIDProviderAddedFilter, DIDProviderAddedResult>, args: DIDProviderAddedArgs<K>): Promise<Pick<DIDProviderAddedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDProviderAddedFilter, DIDProviderAddedResult>> = { ...options };
    let paginationKey: keyof DIDProviderAddedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDProviderAddedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDProviderAddedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didproviderAddeds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_provider"])
                formattedObj["_provider"] = obj["_provider"];
            return formattedObj as Pick<DIDProviderAddedResult, K>;
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
export type DIDProviderRemovedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _provider?: string | null;
    _provider_not?: string | null;
    _provider_in?: string[];
    _provider_not_in?: string[];
    _provider_contains?: string | null;
    _provider_not_contains?: string | null;
    state?: boolean | null;
    state_not?: boolean | null;
    state_in?: boolean[];
    state_not_in?: boolean[];
};
export type DIDProviderRemovedResult = {
    id: string;
    _did: string;
    _provider: string;
    state: boolean;
};
export type DIDProviderRemovedFields = {
    id: true;
    _did: true;
    _provider: true;
    state: true;
};
export type DIDProviderRemovedArgs<K extends keyof DIDProviderRemovedResult> = {
    [Property in keyof Pick<DIDProviderRemovedFields, K>]: DIDProviderRemovedFields[Property];
};
export const getDIDProviderRemovedById = async function <K extends keyof DIDProviderRemovedResult>(url: string, options: SingleQueryOptions, args: DIDProviderRemovedArgs<K>): Promise<Pick<DIDProviderRemovedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("didproviderRemoved", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_provider"])
        formattedObj["_provider"] = obj["_provider"];
    if (obj["state"])
        formattedObj["state"] = obj["state"];
    return formattedObj as Pick<DIDProviderRemovedResult, K>;
};
export const getDIDProviderRemoveds = async function <K extends keyof DIDProviderRemovedResult>(url: string, options: MultiQueryOptions<DIDProviderRemovedFilter, DIDProviderRemovedResult>, args: DIDProviderRemovedArgs<K>): Promise<Pick<DIDProviderRemovedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<DIDProviderRemovedFilter, DIDProviderRemovedResult>> = { ...options };
    let paginationKey: keyof DIDProviderRemovedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof DIDProviderRemovedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<DIDProviderRemovedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("didproviderRemoveds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_provider"])
                formattedObj["_provider"] = obj["_provider"];
            if (obj["state"])
                formattedObj["state"] = obj["state"];
            return formattedObj as Pick<DIDProviderRemovedResult, K>;
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
export type ProvenanceAttributeRegisteredFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    provId?: string | null;
    provId_not?: string | null;
    provId_in?: string[];
    provId_not_in?: string[];
    provId_contains?: string | null;
    provId_not_contains?: string | null;
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _agentId?: string | null;
    _agentId_not?: string | null;
    _agentId_in?: string[];
    _agentId_not_in?: string[];
    _agentId_contains?: string | null;
    _agentId_not_contains?: string | null;
    _activityId?: string | null;
    _activityId_not?: string | null;
    _activityId_in?: string[];
    _activityId_not_in?: string[];
    _activityId_contains?: string | null;
    _activityId_not_contains?: string | null;
    _relatedDid?: string | null;
    _relatedDid_not?: string | null;
    _relatedDid_in?: string[];
    _relatedDid_not_in?: string[];
    _relatedDid_contains?: string | null;
    _relatedDid_not_contains?: string | null;
    _agentInvolvedId?: string | null;
    _agentInvolvedId_not?: string | null;
    _agentInvolvedId_in?: string[];
    _agentInvolvedId_not_in?: string[];
    _agentInvolvedId_contains?: string | null;
    _agentInvolvedId_not_contains?: string | null;
    _method?: number | null;
    _method_not?: number | null;
    _method_gt?: number | null;
    _method_lt?: number | null;
    _method_gte?: number | null;
    _method_lte?: number | null;
    _method_in?: number[];
    _method_not_in?: number[];
    _attributes?: string | null;
    _attributes_not?: string | null;
    _attributes_gt?: string | null;
    _attributes_lt?: string | null;
    _attributes_gte?: string | null;
    _attributes_lte?: string | null;
    _attributes_in?: string[];
    _attributes_not_in?: string[];
    _attributes_contains?: string | null;
    _attributes_not_contains?: string | null;
    _attributes_starts_with?: string | null;
    _attributes_not_starts_with?: string | null;
    _attributes_ends_with?: string | null;
    _attributes_not_ends_with?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type ProvenanceAttributeRegisteredResult = {
    id: string;
    provId: string;
    _did: string;
    _agentId: string;
    _activityId: string;
    _relatedDid: string;
    _agentInvolvedId: string;
    _method: number;
    _attributes: string;
    _blockNumberUpdated: Wei;
};
export type ProvenanceAttributeRegisteredFields = {
    id: true;
    provId: true;
    _did: true;
    _agentId: true;
    _activityId: true;
    _relatedDid: true;
    _agentInvolvedId: true;
    _method: true;
    _attributes: true;
    _blockNumberUpdated: true;
};
export type ProvenanceAttributeRegisteredArgs<K extends keyof ProvenanceAttributeRegisteredResult> = {
    [Property in keyof Pick<ProvenanceAttributeRegisteredFields, K>]: ProvenanceAttributeRegisteredFields[Property];
};
export const getProvenanceAttributeRegisteredById = async function <K extends keyof ProvenanceAttributeRegisteredResult>(url: string, options: SingleQueryOptions, args: ProvenanceAttributeRegisteredArgs<K>): Promise<Pick<ProvenanceAttributeRegisteredResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("provenanceAttributeRegistered", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["provId"])
        formattedObj["provId"] = obj["provId"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_agentId"])
        formattedObj["_agentId"] = obj["_agentId"];
    if (obj["_activityId"])
        formattedObj["_activityId"] = obj["_activityId"];
    if (obj["_relatedDid"])
        formattedObj["_relatedDid"] = obj["_relatedDid"];
    if (obj["_agentInvolvedId"])
        formattedObj["_agentInvolvedId"] = obj["_agentInvolvedId"];
    if (obj["_method"])
        formattedObj["_method"] = obj["_method"];
    if (obj["_attributes"])
        formattedObj["_attributes"] = obj["_attributes"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<ProvenanceAttributeRegisteredResult, K>;
};
export const getProvenanceAttributeRegistereds = async function <K extends keyof ProvenanceAttributeRegisteredResult>(url: string, options: MultiQueryOptions<ProvenanceAttributeRegisteredFilter, ProvenanceAttributeRegisteredResult>, args: ProvenanceAttributeRegisteredArgs<K>): Promise<Pick<ProvenanceAttributeRegisteredResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<ProvenanceAttributeRegisteredFilter, ProvenanceAttributeRegisteredResult>> = { ...options };
    let paginationKey: keyof ProvenanceAttributeRegisteredFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof ProvenanceAttributeRegisteredFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<ProvenanceAttributeRegisteredResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("provenanceAttributeRegistereds", paginatedOptions, args)
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
            if (obj["provId"])
                formattedObj["provId"] = obj["provId"];
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_agentId"])
                formattedObj["_agentId"] = obj["_agentId"];
            if (obj["_activityId"])
                formattedObj["_activityId"] = obj["_activityId"];
            if (obj["_relatedDid"])
                formattedObj["_relatedDid"] = obj["_relatedDid"];
            if (obj["_agentInvolvedId"])
                formattedObj["_agentInvolvedId"] = obj["_agentInvolvedId"];
            if (obj["_method"])
                formattedObj["_method"] = obj["_method"];
            if (obj["_attributes"])
                formattedObj["_attributes"] = obj["_attributes"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<ProvenanceAttributeRegisteredResult, K>;
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
export type UsedFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _agentId?: string | null;
    _agentId_not?: string | null;
    _agentId_in?: string[];
    _agentId_not_in?: string[];
    _agentId_contains?: string | null;
    _agentId_not_contains?: string | null;
    _activityId?: string | null;
    _activityId_not?: string | null;
    _activityId_in?: string[];
    _activityId_not_in?: string[];
    _activityId_contains?: string | null;
    _activityId_not_contains?: string | null;
    provId?: string | null;
    provId_not?: string | null;
    provId_in?: string[];
    provId_not_in?: string[];
    provId_contains?: string | null;
    provId_not_contains?: string | null;
    _attributes?: string | null;
    _attributes_not?: string | null;
    _attributes_gt?: string | null;
    _attributes_lt?: string | null;
    _attributes_gte?: string | null;
    _attributes_lte?: string | null;
    _attributes_in?: string[];
    _attributes_not_in?: string[];
    _attributes_contains?: string | null;
    _attributes_not_contains?: string | null;
    _attributes_starts_with?: string | null;
    _attributes_not_starts_with?: string | null;
    _attributes_ends_with?: string | null;
    _attributes_not_ends_with?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type UsedResult = {
    id: string;
    _did: string;
    _agentId: string;
    _activityId: string;
    provId: string;
    _attributes: string;
    _blockNumberUpdated: Wei;
};
export type UsedFields = {
    id: true;
    _did: true;
    _agentId: true;
    _activityId: true;
    provId: true;
    _attributes: true;
    _blockNumberUpdated: true;
};
export type UsedArgs<K extends keyof UsedResult> = {
    [Property in keyof Pick<UsedFields, K>]: UsedFields[Property];
};
export const getUsedById = async function <K extends keyof UsedResult>(url: string, options: SingleQueryOptions, args: UsedArgs<K>): Promise<Pick<UsedResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("used", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_agentId"])
        formattedObj["_agentId"] = obj["_agentId"];
    if (obj["_activityId"])
        formattedObj["_activityId"] = obj["_activityId"];
    if (obj["provId"])
        formattedObj["provId"] = obj["provId"];
    if (obj["_attributes"])
        formattedObj["_attributes"] = obj["_attributes"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<UsedResult, K>;
};
export const getUseds = async function <K extends keyof UsedResult>(url: string, options: MultiQueryOptions<UsedFilter, UsedResult>, args: UsedArgs<K>): Promise<Pick<UsedResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<UsedFilter, UsedResult>> = { ...options };
    let paginationKey: keyof UsedFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof UsedFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<UsedResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("useds", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_agentId"])
                formattedObj["_agentId"] = obj["_agentId"];
            if (obj["_activityId"])
                formattedObj["_activityId"] = obj["_activityId"];
            if (obj["provId"])
                formattedObj["provId"] = obj["provId"];
            if (obj["_attributes"])
                formattedObj["_attributes"] = obj["_attributes"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<UsedResult, K>;
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
export type WasAssociatedWithFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _entityDid?: string | null;
    _entityDid_not?: string | null;
    _entityDid_in?: string[];
    _entityDid_not_in?: string[];
    _entityDid_contains?: string | null;
    _entityDid_not_contains?: string | null;
    _agentId?: string | null;
    _agentId_not?: string | null;
    _agentId_in?: string[];
    _agentId_not_in?: string[];
    _agentId_contains?: string | null;
    _agentId_not_contains?: string | null;
    _activityId?: string | null;
    _activityId_not?: string | null;
    _activityId_in?: string[];
    _activityId_not_in?: string[];
    _activityId_contains?: string | null;
    _activityId_not_contains?: string | null;
    provId?: string | null;
    provId_not?: string | null;
    provId_in?: string[];
    provId_not_in?: string[];
    provId_contains?: string | null;
    provId_not_contains?: string | null;
    _attributes?: string | null;
    _attributes_not?: string | null;
    _attributes_gt?: string | null;
    _attributes_lt?: string | null;
    _attributes_gte?: string | null;
    _attributes_lte?: string | null;
    _attributes_in?: string[];
    _attributes_not_in?: string[];
    _attributes_contains?: string | null;
    _attributes_not_contains?: string | null;
    _attributes_starts_with?: string | null;
    _attributes_not_starts_with?: string | null;
    _attributes_ends_with?: string | null;
    _attributes_not_ends_with?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type WasAssociatedWithResult = {
    id: string;
    _entityDid: string;
    _agentId: string;
    _activityId: string;
    provId: string;
    _attributes: string;
    _blockNumberUpdated: Wei;
};
export type WasAssociatedWithFields = {
    id: true;
    _entityDid: true;
    _agentId: true;
    _activityId: true;
    provId: true;
    _attributes: true;
    _blockNumberUpdated: true;
};
export type WasAssociatedWithArgs<K extends keyof WasAssociatedWithResult> = {
    [Property in keyof Pick<WasAssociatedWithFields, K>]: WasAssociatedWithFields[Property];
};
export const getWasAssociatedWithById = async function <K extends keyof WasAssociatedWithResult>(url: string, options: SingleQueryOptions, args: WasAssociatedWithArgs<K>): Promise<Pick<WasAssociatedWithResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("wasAssociatedWith", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_entityDid"])
        formattedObj["_entityDid"] = obj["_entityDid"];
    if (obj["_agentId"])
        formattedObj["_agentId"] = obj["_agentId"];
    if (obj["_activityId"])
        formattedObj["_activityId"] = obj["_activityId"];
    if (obj["provId"])
        formattedObj["provId"] = obj["provId"];
    if (obj["_attributes"])
        formattedObj["_attributes"] = obj["_attributes"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<WasAssociatedWithResult, K>;
};
export const getWasAssociatedWiths = async function <K extends keyof WasAssociatedWithResult>(url: string, options: MultiQueryOptions<WasAssociatedWithFilter, WasAssociatedWithResult>, args: WasAssociatedWithArgs<K>): Promise<Pick<WasAssociatedWithResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<WasAssociatedWithFilter, WasAssociatedWithResult>> = { ...options };
    let paginationKey: keyof WasAssociatedWithFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof WasAssociatedWithFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<WasAssociatedWithResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("wasAssociatedWiths", paginatedOptions, args)
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
            if (obj["_entityDid"])
                formattedObj["_entityDid"] = obj["_entityDid"];
            if (obj["_agentId"])
                formattedObj["_agentId"] = obj["_agentId"];
            if (obj["_activityId"])
                formattedObj["_activityId"] = obj["_activityId"];
            if (obj["provId"])
                formattedObj["provId"] = obj["provId"];
            if (obj["_attributes"])
                formattedObj["_attributes"] = obj["_attributes"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<WasAssociatedWithResult, K>;
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
export type WasDerivedFromFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _newEntityDid?: string | null;
    _newEntityDid_not?: string | null;
    _newEntityDid_in?: string[];
    _newEntityDid_not_in?: string[];
    _newEntityDid_contains?: string | null;
    _newEntityDid_not_contains?: string | null;
    _usedEntityDid?: string | null;
    _usedEntityDid_not?: string | null;
    _usedEntityDid_in?: string[];
    _usedEntityDid_not_in?: string[];
    _usedEntityDid_contains?: string | null;
    _usedEntityDid_not_contains?: string | null;
    _agentId?: string | null;
    _agentId_not?: string | null;
    _agentId_in?: string[];
    _agentId_not_in?: string[];
    _agentId_contains?: string | null;
    _agentId_not_contains?: string | null;
    _activityId?: string | null;
    _activityId_not?: string | null;
    _activityId_in?: string[];
    _activityId_not_in?: string[];
    _activityId_contains?: string | null;
    _activityId_not_contains?: string | null;
    provId?: string | null;
    provId_not?: string | null;
    provId_in?: string[];
    provId_not_in?: string[];
    provId_contains?: string | null;
    provId_not_contains?: string | null;
    _attributes?: string | null;
    _attributes_not?: string | null;
    _attributes_gt?: string | null;
    _attributes_lt?: string | null;
    _attributes_gte?: string | null;
    _attributes_lte?: string | null;
    _attributes_in?: string[];
    _attributes_not_in?: string[];
    _attributes_contains?: string | null;
    _attributes_not_contains?: string | null;
    _attributes_starts_with?: string | null;
    _attributes_not_starts_with?: string | null;
    _attributes_ends_with?: string | null;
    _attributes_not_ends_with?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type WasDerivedFromResult = {
    id: string;
    _newEntityDid: string;
    _usedEntityDid: string;
    _agentId: string;
    _activityId: string;
    provId: string;
    _attributes: string;
    _blockNumberUpdated: Wei;
};
export type WasDerivedFromFields = {
    id: true;
    _newEntityDid: true;
    _usedEntityDid: true;
    _agentId: true;
    _activityId: true;
    provId: true;
    _attributes: true;
    _blockNumberUpdated: true;
};
export type WasDerivedFromArgs<K extends keyof WasDerivedFromResult> = {
    [Property in keyof Pick<WasDerivedFromFields, K>]: WasDerivedFromFields[Property];
};
export const getWasDerivedFromById = async function <K extends keyof WasDerivedFromResult>(url: string, options: SingleQueryOptions, args: WasDerivedFromArgs<K>): Promise<Pick<WasDerivedFromResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("wasDerivedFrom", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_newEntityDid"])
        formattedObj["_newEntityDid"] = obj["_newEntityDid"];
    if (obj["_usedEntityDid"])
        formattedObj["_usedEntityDid"] = obj["_usedEntityDid"];
    if (obj["_agentId"])
        formattedObj["_agentId"] = obj["_agentId"];
    if (obj["_activityId"])
        formattedObj["_activityId"] = obj["_activityId"];
    if (obj["provId"])
        formattedObj["provId"] = obj["provId"];
    if (obj["_attributes"])
        formattedObj["_attributes"] = obj["_attributes"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<WasDerivedFromResult, K>;
};
export const getWasDerivedFroms = async function <K extends keyof WasDerivedFromResult>(url: string, options: MultiQueryOptions<WasDerivedFromFilter, WasDerivedFromResult>, args: WasDerivedFromArgs<K>): Promise<Pick<WasDerivedFromResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<WasDerivedFromFilter, WasDerivedFromResult>> = { ...options };
    let paginationKey: keyof WasDerivedFromFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof WasDerivedFromFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<WasDerivedFromResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("wasDerivedFroms", paginatedOptions, args)
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
            if (obj["_newEntityDid"])
                formattedObj["_newEntityDid"] = obj["_newEntityDid"];
            if (obj["_usedEntityDid"])
                formattedObj["_usedEntityDid"] = obj["_usedEntityDid"];
            if (obj["_agentId"])
                formattedObj["_agentId"] = obj["_agentId"];
            if (obj["_activityId"])
                formattedObj["_activityId"] = obj["_activityId"];
            if (obj["provId"])
                formattedObj["provId"] = obj["provId"];
            if (obj["_attributes"])
                formattedObj["_attributes"] = obj["_attributes"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<WasDerivedFromResult, K>;
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
export type WasGeneratedByFilter = {
    id?: string | null;
    id_not?: string | null;
    id_gt?: string | null;
    id_lt?: string | null;
    id_gte?: string | null;
    id_lte?: string | null;
    id_in?: string[];
    id_not_in?: string[];
    _did?: string | null;
    _did_not?: string | null;
    _did_in?: string[];
    _did_not_in?: string[];
    _did_contains?: string | null;
    _did_not_contains?: string | null;
    _agentId?: string | null;
    _agentId_not?: string | null;
    _agentId_in?: string[];
    _agentId_not_in?: string[];
    _agentId_contains?: string | null;
    _agentId_not_contains?: string | null;
    _activityId?: string | null;
    _activityId_not?: string | null;
    _activityId_in?: string[];
    _activityId_not_in?: string[];
    _activityId_contains?: string | null;
    _activityId_not_contains?: string | null;
    provId?: string | null;
    provId_not?: string | null;
    provId_in?: string[];
    provId_not_in?: string[];
    provId_contains?: string | null;
    provId_not_contains?: string | null;
    _attributes?: string | null;
    _attributes_not?: string | null;
    _attributes_gt?: string | null;
    _attributes_lt?: string | null;
    _attributes_gte?: string | null;
    _attributes_lte?: string | null;
    _attributes_in?: string[];
    _attributes_not_in?: string[];
    _attributes_contains?: string | null;
    _attributes_not_contains?: string | null;
    _attributes_starts_with?: string | null;
    _attributes_not_starts_with?: string | null;
    _attributes_ends_with?: string | null;
    _attributes_not_ends_with?: string | null;
    _blockNumberUpdated?: WeiSource | null;
    _blockNumberUpdated_not?: WeiSource | null;
    _blockNumberUpdated_gt?: WeiSource | null;
    _blockNumberUpdated_lt?: WeiSource | null;
    _blockNumberUpdated_gte?: WeiSource | null;
    _blockNumberUpdated_lte?: WeiSource | null;
    _blockNumberUpdated_in?: WeiSource[];
    _blockNumberUpdated_not_in?: WeiSource[];
};
export type WasGeneratedByResult = {
    id: string;
    _did: string;
    _agentId: string;
    _activityId: string;
    provId: string;
    _attributes: string;
    _blockNumberUpdated: Wei;
};
export type WasGeneratedByFields = {
    id: true;
    _did: true;
    _agentId: true;
    _activityId: true;
    provId: true;
    _attributes: true;
    _blockNumberUpdated: true;
};
export type WasGeneratedByArgs<K extends keyof WasGeneratedByResult> = {
    [Property in keyof Pick<WasGeneratedByFields, K>]: WasGeneratedByFields[Property];
};
export const getWasGeneratedByById = async function <K extends keyof WasGeneratedByResult>(url: string, options: SingleQueryOptions, args: WasGeneratedByArgs<K>): Promise<Pick<WasGeneratedByResult, K>> {
    const res = await axios.post(url, {
        query: generateGql("wasGeneratedBy", options, args)
    });
    const r = res.data as any;
    if (r.errors && r.errors.length) {
        throw new Error(r.errors[0].message);
    }
    const obj = (r.data[Object.keys(r.data)[0]] as any);
    const formattedObj: any = {};
    if (obj["id"])
        formattedObj["id"] = obj["id"];
    if (obj["_did"])
        formattedObj["_did"] = obj["_did"];
    if (obj["_agentId"])
        formattedObj["_agentId"] = obj["_agentId"];
    if (obj["_activityId"])
        formattedObj["_activityId"] = obj["_activityId"];
    if (obj["provId"])
        formattedObj["provId"] = obj["provId"];
    if (obj["_attributes"])
        formattedObj["_attributes"] = obj["_attributes"];
    if (obj["_blockNumberUpdated"])
        formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
    return formattedObj as Pick<WasGeneratedByResult, K>;
};
export const getWasGeneratedBys = async function <K extends keyof WasGeneratedByResult>(url: string, options: MultiQueryOptions<WasGeneratedByFilter, WasGeneratedByResult>, args: WasGeneratedByArgs<K>): Promise<Pick<WasGeneratedByResult, K>[]> {
    const paginatedOptions: Partial<MultiQueryOptions<WasGeneratedByFilter, WasGeneratedByResult>> = { ...options };
    let paginationKey: keyof WasGeneratedByFilter | null = null;
    let paginationValue = "";
    if (options.first && options.first > MAX_PAGE) {
        paginatedOptions.first = MAX_PAGE;
        paginatedOptions.orderBy = options.orderBy || "id";
        paginatedOptions.orderDirection = options.orderDirection || "asc";
        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === "asc" ? "_gt" : "_lt") as keyof WasGeneratedByFilter;
        paginatedOptions.where = { ...options.where };
    }
    let results: Pick<WasGeneratedByResult, K>[] = [];
    do {
        if (paginationKey && paginationValue)
            paginatedOptions.where![paginationKey] = paginationValue as any;
        const res = await axios.post(url, {
            query: generateGql("wasGeneratedBies", paginatedOptions, args)
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
            if (obj["_did"])
                formattedObj["_did"] = obj["_did"];
            if (obj["_agentId"])
                formattedObj["_agentId"] = obj["_agentId"];
            if (obj["_activityId"])
                formattedObj["_activityId"] = obj["_activityId"];
            if (obj["provId"])
                formattedObj["provId"] = obj["provId"];
            if (obj["_attributes"])
                formattedObj["_attributes"] = obj["_attributes"];
            if (obj["_blockNumberUpdated"])
                formattedObj["_blockNumberUpdated"] = wei(obj["_blockNumberUpdated"], 0);
            return formattedObj as Pick<WasGeneratedByResult, K>;
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
