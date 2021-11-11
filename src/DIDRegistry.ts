import {
    ActedOnBehalf as DIDRegistryActedOnBehalfEvent,
    ApprovalForAll as DIDRegistryApprovalForAllEvent,
    DIDAttributeRegistered as DIDRegistryDIDAttributeRegisteredEvent,
    DIDOwnershipTransferred as DIDRegistryDIDOwnershipTransferredEvent,
    DIDPermissionGranted as DIDRegistryDIDPermissionGrantedEvent,
    DIDPermissionRevoked as DIDRegistryDIDPermissionRevokedEvent,
    DIDProvenanceDelegateAdded as DIDRegistryDIDProvenanceDelegateAddedEvent,
    DIDProvenanceDelegateRemoved as DIDRegistryDIDProvenanceDelegateRemovedEvent,
    DIDProviderAdded as DIDRegistryDIDProviderAddedEvent,
    DIDProviderRemoved as DIDRegistryDIDProviderRemovedEvent,
    OwnershipTransferred as DIDRegistryOwnershipTransferredEvent,
    ProvenanceAttributeRegistered as DIDRegistryProvenanceAttributeRegisteredEvent,
    ProxyApproval as DIDRegistryProxyApprovalEvent,
    TransferBatch as DIDRegistryTransferBatchEvent,
    TransferSingle as DIDRegistryTransferSingleEvent,
    URI as DIDRegistryURIEvent,
    Used as DIDRegistryUsedEvent,
    WasAssociatedWith as DIDRegistryWasAssociatedWithEvent,
    WasDerivedFrom as DIDRegistryWasDerivedFromEvent,
    WasGeneratedBy as DIDRegistryWasGeneratedByEvent,
} from '../generated/DIDRegistry/DIDRegistry'
import {
    DIDRegistryActedOnBehalf,
    DIDRegistryApprovalForAll,
    DIDRegistryDIDAttributeRegistered,
    DIDRegistryDIDOwnershipTransferred,
    DIDRegistryDIDPermissionGranted,
    DIDRegistryDIDPermissionRevoked,
    DIDRegistryDIDProvenanceDelegateAdded,
    DIDRegistryDIDProvenanceDelegateRemoved,
    DIDRegistryDIDProviderAdded,
    DIDRegistryDIDProviderRemoved,
    DIDRegistryOwnershipTransferred,
    DIDRegistryProvenanceAttributeRegistered,
    DIDRegistryProxyApproval,
    DIDRegistryTransferBatch,
    DIDRegistryTransferSingle,
    DIDRegistryURI,
    DIDRegistryUsed,
    DIDRegistryWasAssociatedWith,
    DIDRegistryWasDerivedFrom,
    DIDRegistryWasGeneratedBy,
} from '../generated/schema'

export function handleDIDRegistryActedOnBehalf(
    event: DIDRegistryActedOnBehalfEvent,
): void {
    const entity = new DIDRegistryActedOnBehalf(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._entityDid = event.params._entityDid
    entity._delegateAgentId = event.params._delegateAgentId
    entity._responsibleAgentId = event.params._responsibleAgentId
    entity._activityId = event.params._activityId
    entity.provId = event.params.provId
    entity._attributes = event.params._attributes
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDRegistryApprovalForAll(
    event: DIDRegistryApprovalForAllEvent,
): void {
    const entity = new DIDRegistryApprovalForAll(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.account = event.params.account
    entity.operator = event.params.operator
    entity.approved = event.params.approved
    entity.save()
}

export function handleDIDRegistryDIDAttributeRegistered(
    event: DIDRegistryDIDAttributeRegisteredEvent,
): void {
    const entity = new DIDRegistryDIDAttributeRegistered(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._owner = event.params._owner
    entity._checksum = event.params._checksum
    entity._value = event.params._value
    entity._lastUpdatedBy = event.params._lastUpdatedBy
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDRegistryDIDOwnershipTransferred(
    event: DIDRegistryDIDOwnershipTransferredEvent,
): void {
    const entity = new DIDRegistryDIDOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._previousOwner = event.params._previousOwner
    entity._newOwner = event.params._newOwner
    entity.save()
}

export function handleDIDRegistryDIDPermissionGranted(
    event: DIDRegistryDIDPermissionGrantedEvent,
): void {
    const entity = new DIDRegistryDIDPermissionGranted(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._owner = event.params._owner
    entity._grantee = event.params._grantee
    entity.save()
}

export function handleDIDRegistryDIDPermissionRevoked(
    event: DIDRegistryDIDPermissionRevokedEvent,
): void {
    const entity = new DIDRegistryDIDPermissionRevoked(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._owner = event.params._owner
    entity._grantee = event.params._grantee
    entity.save()
}

export function handleDIDRegistryDIDProvenanceDelegateAdded(
    event: DIDRegistryDIDProvenanceDelegateAddedEvent,
): void {
    const entity = new DIDRegistryDIDProvenanceDelegateAdded(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._delegate = event.params._delegate
    entity.save()
}

export function handleDIDRegistryDIDProvenanceDelegateRemoved(
    event: DIDRegistryDIDProvenanceDelegateRemovedEvent,
): void {
    const entity = new DIDRegistryDIDProvenanceDelegateRemoved(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._delegate = event.params._delegate
    entity.state = event.params.state
    entity.save()
}

export function handleDIDRegistryDIDProviderAdded(
    event: DIDRegistryDIDProviderAddedEvent,
): void {
    const entity = new DIDRegistryDIDProviderAdded(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._provider = event.params._provider
    entity.save()
}

export function handleDIDRegistryDIDProviderRemoved(
    event: DIDRegistryDIDProviderRemovedEvent,
): void {
    const entity = new DIDRegistryDIDProviderRemoved(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._provider = event.params._provider
    entity.state = event.params.state
    entity.save()
}

export function handleDIDRegistryOwnershipTransferred(
    event: DIDRegistryOwnershipTransferredEvent,
): void {
    const entity = new DIDRegistryOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}

export function handleDIDRegistryProvenanceAttributeRegistered(
    event: DIDRegistryProvenanceAttributeRegisteredEvent,
): void {
    const entity = new DIDRegistryProvenanceAttributeRegistered(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.provId = event.params.provId
    entity._did = event.params._did
    entity._agentId = event.params._agentId
    entity._activityId = event.params._activityId
    entity._relatedDid = event.params._relatedDid
    entity._agentInvolvedId = event.params._agentInvolvedId
    entity._method = event.params._method
    entity._attributes = event.params._attributes
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDRegistryProxyApproval(
    event: DIDRegistryProxyApprovalEvent,
): void {
    const entity = new DIDRegistryProxyApproval(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.sender = event.params.sender
    entity.operator = event.params.operator
    entity.approved = event.params.approved
    entity.save()
}

export function handleDIDRegistryTransferBatch(
    event: DIDRegistryTransferBatchEvent,
): void {
    const entity = new DIDRegistryTransferBatch(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.operator = event.params.operator
    entity.from = event.params.from
    entity.to = event.params.to
    entity.ids = event.params.ids
    entity.values = event.params.values
    entity.save()
}

export function handleDIDRegistryTransferSingle(
    event: DIDRegistryTransferSingleEvent,
): void {
    const entity = new DIDRegistryTransferSingle(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.operator = event.params.operator
    entity.from = event.params.from
    entity.to = event.params.to
    entity.id = event.params.id
    entity.value = event.params.value
    entity.save()
}

export function handleDIDRegistryURI(event: DIDRegistryURIEvent): void {
    const entity = new DIDRegistryURI(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.value = event.params.value
    entity.id = event.params.id
    entity.save()
}

export function handleDIDRegistryUsed(event: DIDRegistryUsedEvent): void {
    const entity = new DIDRegistryUsed(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._agentId = event.params._agentId
    entity._activityId = event.params._activityId
    entity.provId = event.params.provId
    entity._attributes = event.params._attributes
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDRegistryWasAssociatedWith(
    event: DIDRegistryWasAssociatedWithEvent,
): void {
    const entity = new DIDRegistryWasAssociatedWith(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._entityDid = event.params._entityDid
    entity._agentId = event.params._agentId
    entity._activityId = event.params._activityId
    entity.provId = event.params.provId
    entity._attributes = event.params._attributes
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDRegistryWasDerivedFrom(
    event: DIDRegistryWasDerivedFromEvent,
): void {
    const entity = new DIDRegistryWasDerivedFrom(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._newEntityDid = event.params._newEntityDid
    entity._usedEntityDid = event.params._usedEntityDid
    entity._agentId = event.params._agentId
    entity._activityId = event.params._activityId
    entity.provId = event.params.provId
    entity._attributes = event.params._attributes
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}

export function handleDIDRegistryWasGeneratedBy(
    event: DIDRegistryWasGeneratedByEvent,
): void {
    const entity = new DIDRegistryWasGeneratedBy(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._did = event.params._did
    entity._agentId = event.params._agentId
    entity._activityId = event.params._activityId
    entity.provId = event.params.provId
    entity._attributes = event.params._attributes
    entity._blockNumberUpdated = event.params._blockNumberUpdated
    entity.save()
}
