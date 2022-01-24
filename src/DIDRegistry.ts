import {
  ActedOnBehalf as DIDRegistryActedOnBehalfEvent,
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
  Used as DIDRegistryUsedEvent,
  WasAssociatedWith as DIDRegistryWasAssociatedWithEvent,
  WasDerivedFrom as DIDRegistryWasDerivedFromEvent,
  WasGeneratedBy as DIDRegistryWasGeneratedByEvent,
} from "../generated/DIDRegistry/DIDRegistry"
import {
  DIDRegistryActedOnBehalf,
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
  DIDRegistryUsed,
  DIDRegistryWasAssociatedWith,
  DIDRegistryWasDerivedFrom,
  DIDRegistryWasGeneratedBy,
} from "../generated/schema"

export function handleDIDRegistryActedOnBehalf(
  event: DIDRegistryActedOnBehalfEvent
): void {
  let entity = new DIDRegistryActedOnBehalf(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
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

export function handleDIDRegistryDIDAttributeRegistered(
  event: DIDRegistryDIDAttributeRegisteredEvent
): void {
  let entity = new DIDRegistryDIDAttributeRegistered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
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
  event: DIDRegistryDIDOwnershipTransferredEvent
): void {
  let entity = new DIDRegistryDIDOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._previousOwner = event.params._previousOwner
  entity._newOwner = event.params._newOwner
  entity.save()
}

export function handleDIDRegistryDIDPermissionGranted(
  event: DIDRegistryDIDPermissionGrantedEvent
): void {
  let entity = new DIDRegistryDIDPermissionGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._owner = event.params._owner
  entity._grantee = event.params._grantee
  entity.save()
}

export function handleDIDRegistryDIDPermissionRevoked(
  event: DIDRegistryDIDPermissionRevokedEvent
): void {
  let entity = new DIDRegistryDIDPermissionRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._owner = event.params._owner
  entity._grantee = event.params._grantee
  entity.save()
}

export function handleDIDRegistryDIDProvenanceDelegateAdded(
  event: DIDRegistryDIDProvenanceDelegateAddedEvent
): void {
  let entity = new DIDRegistryDIDProvenanceDelegateAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._delegate = event.params._delegate
  entity.save()
}

export function handleDIDRegistryDIDProvenanceDelegateRemoved(
  event: DIDRegistryDIDProvenanceDelegateRemovedEvent
): void {
  let entity = new DIDRegistryDIDProvenanceDelegateRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._delegate = event.params._delegate
  entity.state = event.params.state
  entity.save()
}

export function handleDIDRegistryDIDProviderAdded(
  event: DIDRegistryDIDProviderAddedEvent
): void {
  let entity = new DIDRegistryDIDProviderAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._provider = event.params._provider
  entity.save()
}

export function handleDIDRegistryDIDProviderRemoved(
  event: DIDRegistryDIDProviderRemovedEvent
): void {
  let entity = new DIDRegistryDIDProviderRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._provider = event.params._provider
  entity.state = event.params.state
  entity.save()
}

export function handleDIDRegistryOwnershipTransferred(
  event: DIDRegistryOwnershipTransferredEvent
): void {
  let entity = new DIDRegistryOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleDIDRegistryProvenanceAttributeRegistered(
  event: DIDRegistryProvenanceAttributeRegisteredEvent
): void {
  let entity = new DIDRegistryProvenanceAttributeRegistered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
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

export function handleDIDRegistryUsed(event: DIDRegistryUsedEvent): void {
  let entity = new DIDRegistryUsed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
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
  event: DIDRegistryWasAssociatedWithEvent
): void {
  let entity = new DIDRegistryWasAssociatedWith(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
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
  event: DIDRegistryWasDerivedFromEvent
): void {
  let entity = new DIDRegistryWasDerivedFrom(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
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
  event: DIDRegistryWasGeneratedByEvent
): void {
  let entity = new DIDRegistryWasGeneratedBy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._agentId = event.params._agentId
  entity._activityId = event.params._activityId
  entity.provId = event.params.provId
  entity._attributes = event.params._attributes
  entity._blockNumberUpdated = event.params._blockNumberUpdated
  entity.save()
}
