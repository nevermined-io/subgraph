import { BigInt } from '@graphprotocol/graph-ts'
import {
    DIDRegistry,
    ActedOnBehalf,
    ApprovalForAll,
    DIDAttributeRegistered,
    DIDOwnershipTransferred,
    DIDPermissionGranted,
    DIDPermissionRevoked,
    DIDProvenanceDelegateAdded,
    DIDProvenanceDelegateRemoved,
    DIDProviderAdded,
    DIDProviderRemoved,
    OwnershipTransferred,
    ProvenanceAttributeRegistered,
    ProxyApproval,
    TransferBatch,
    TransferSingle,
    URI,
    Used,
    WasAssociatedWith,
    WasDerivedFrom,
    WasGeneratedBy,
} from '../generated/DIDRegistry/DIDRegistry'
import { ExampleEntity } from '../generated/schema'
import { DIDAttributeRegistered as DIDAttributeRegisteredEntity } from '../generated/schema'

export function handleActedOnBehalf(event: ActedOnBehalf): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = ExampleEntity.load(event.transaction.from.toHex())

    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (!entity) {
        entity = new ExampleEntity(event.transaction.from.toHex())

        // Entity fields can be set using simple assignments
        entity.count = BigInt.fromI32(0)
    }

    // BigInt and BigDecimal math are supported
    entity.count = entity.count + BigInt.fromI32(1)

    // Entity fields can be set based on event parameters
    entity._entityDid = event.params._entityDid
    entity._delegateAgentId = event.params._delegateAgentId

    // Entities can be written to the store with `.save()`
    entity.save()

    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.

    // It is also possible to access smart contracts from mappings. For
    // example, the contract that has emitted the event can be connected to
    // with:
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract._uri(...)
    // - contract.actedOnBehalf(...)
    // - contract.areRoyaltiesValid(...)
    // - contract.balanceOf(...)
    // - contract.balanceOf(...)
    // - contract.balanceOfBatch(...)
    // - contract.getBlockNumberUpdated(...)
    // - contract.getDIDOwner(...)
    // - contract.getDIDRegister(...)
    // - contract.getDIDRegisterIds(...)
    // - contract.getDIDRegistrySize(...)
    // - contract.getPermission(...)
    // - contract.getProvenanceEntry(...)
    // - contract.getProvenanceOwner(...)
    // - contract.hashDID(...)
    // - contract.isApprovedForAll(...)
    // - contract.isDIDOwner(...)
    // - contract.isDIDProvider(...)
    // - contract.isHolder(...)
    // - contract.isOwnerProviderOrDelegate(...)
    // - contract.isProvenanceDelegate(...)
    // - contract.manager(...)
    // - contract.owner(...)
    // - contract.registerAttribute(...)
    // - contract.registerDID(...)
    // - contract.supportsInterface(...)
    // - contract.uri(...)
    // - contract.used(...)
    // - contract.wasAssociatedWith(...)
    // - contract.wasDerivedFrom(...)
    // - contract.registerMintableDID(...)
    // - contract.enableAndMintDidNft(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleDIDAttributeRegistered(
    event: DIDAttributeRegistered,
): void {
    const entity = new DIDAttributeRegisteredEntity(event.params._did.toHex())
    entity._did = event.params._did
    entity._owner = event.params._owner
    entity._checksum = event.params._checksum
    entity._value = event.params._value
    entity._lastUpdatedBy = event.params._lastUpdatedBy
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDOwnershipTransferred(
    event: DIDOwnershipTransferred,
): void {}

export function handleDIDPermissionGranted(event: DIDPermissionGranted): void {}

export function handleDIDPermissionRevoked(event: DIDPermissionRevoked): void {}

export function handleDIDProvenanceDelegateAdded(
    event: DIDProvenanceDelegateAdded,
): void {}

export function handleDIDProvenanceDelegateRemoved(
    event: DIDProvenanceDelegateRemoved,
): void {}

export function handleDIDProviderAdded(event: DIDProviderAdded): void {}

export function handleDIDProviderRemoved(event: DIDProviderRemoved): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProvenanceAttributeRegistered(
    event: ProvenanceAttributeRegistered,
): void {}

export function handleProxyApproval(event: ProxyApproval): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}

export function handleUsed(event: Used): void {}

export function handleWasAssociatedWith(event: WasAssociatedWith): void {}

export function handleWasDerivedFrom(event: WasDerivedFrom): void {}

export function handleWasGeneratedBy(event: WasGeneratedBy): void {}
