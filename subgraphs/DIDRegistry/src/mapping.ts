import {
  ActedOnBehalf as ActedOnBehalfEvent,
  DIDAttributeRegistered as DIDAttributeRegisteredEvent,
  DIDMetadataUpdated as DIDMetadataUpdatedEvent,
  DIDOwnershipTransferred as DIDOwnershipTransferredEvent,
  DIDPermissionGranted as DIDPermissionGrantedEvent,
  DIDPermissionRevoked as DIDPermissionRevokedEvent,
  DIDProvenanceDelegateAdded as DIDProvenanceDelegateAddedEvent,
  DIDProvenanceDelegateRemoved as DIDProvenanceDelegateRemovedEvent,
  DIDProviderAdded as DIDProviderAddedEvent,
  DIDProviderRemoved as DIDProviderRemovedEvent,
  DIDRoyaltiesAdded as DIDRoyaltiesAddedEvent,
  DIDRoyaltyRecipientChanged as DIDRoyaltyRecipientChangedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProvenanceAttributeRegistered as ProvenanceAttributeRegisteredEvent,
  Used as UsedEvent,
  WasAssociatedWith as WasAssociatedWithEvent,
  WasDerivedFrom as WasDerivedFromEvent,
  WasGeneratedBy as WasGeneratedByEvent
} from "../generated/DIDRegistry/DIDRegistry"
import {
  ActedOnBehalf,
  DIDAttributeRegistered,
  DIDMetadataUpdated,
  DIDOwnershipTransferred,
  DIDPermissionGranted,
  DIDPermissionRevoked,
  DIDProvenanceDelegateAdded,
  DIDProvenanceDelegateRemoved,
  DIDProviderAdded,
  DIDProviderRemoved,
  DIDRoyaltiesAdded,
  DIDRoyaltyRecipientChanged,
  Initialized,
  OwnershipTransferred,
  ProvenanceAttributeRegistered,
  Used,
  WasAssociatedWith,
  WasDerivedFrom,
  WasGeneratedBy
} from "../generated/schema"

export function handleActedOnBehalf(event: ActedOnBehalfEvent): void {
  let entity = new ActedOnBehalf(
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

export function handleDIDAttributeRegistered(
  event: DIDAttributeRegisteredEvent
): void {
  let entity = new DIDAttributeRegistered(
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

export function handleDIDMetadataUpdated(event: DIDMetadataUpdatedEvent): void {
  let entity = new DIDMetadataUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._owner = event.params._owner
  entity._checksum = event.params._checksum
  entity._url = event.params._url
  entity._immutableUrl = event.params._immutableUrl
  entity.save()
}

export function handleDIDOwnershipTransferred(
  event: DIDOwnershipTransferredEvent
): void {
  let entity = new DIDOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._previousOwner = event.params._previousOwner
  entity._newOwner = event.params._newOwner
  entity.save()
}

export function handleDIDPermissionGranted(
  event: DIDPermissionGrantedEvent
): void {
  let entity = new DIDPermissionGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._owner = event.params._owner
  entity._grantee = event.params._grantee
  entity.save()
}

export function handleDIDPermissionRevoked(
  event: DIDPermissionRevokedEvent
): void {
  let entity = new DIDPermissionRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._owner = event.params._owner
  entity._grantee = event.params._grantee
  entity.save()
}

export function handleDIDProvenanceDelegateAdded(
  event: DIDProvenanceDelegateAddedEvent
): void {
  let entity = new DIDProvenanceDelegateAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._delegate = event.params._delegate
  entity.save()
}

export function handleDIDProvenanceDelegateRemoved(
  event: DIDProvenanceDelegateRemovedEvent
): void {
  let entity = new DIDProvenanceDelegateRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._delegate = event.params._delegate
  entity.state = event.params.state
  entity.save()
}

export function handleDIDProviderAdded(event: DIDProviderAddedEvent): void {
  let entity = new DIDProviderAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._provider = event.params._provider
  entity.save()
}

export function handleDIDProviderRemoved(event: DIDProviderRemovedEvent): void {
  let entity = new DIDProviderRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._did = event.params._did
  entity._provider = event.params._provider
  entity.state = event.params.state
  entity.save()
}

export function handleDIDRoyaltiesAdded(event: DIDRoyaltiesAddedEvent): void {
  let entity = new DIDRoyaltiesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.did = event.params.did
  entity.addr = event.params.addr
  entity.save()
}

export function handleDIDRoyaltyRecipientChanged(
  event: DIDRoyaltyRecipientChangedEvent
): void {
  let entity = new DIDRoyaltyRecipientChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.did = event.params.did
  entity.addr = event.params.addr
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleProvenanceAttributeRegistered(
  event: ProvenanceAttributeRegisteredEvent
): void {
  let entity = new ProvenanceAttributeRegistered(
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

export function handleUsed(event: UsedEvent): void {
  let entity = new Used(
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

export function handleWasAssociatedWith(event: WasAssociatedWithEvent): void {
  let entity = new WasAssociatedWith(
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

export function handleWasDerivedFrom(event: WasDerivedFromEvent): void {
  let entity = new WasDerivedFrom(
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

export function handleWasGeneratedBy(event: WasGeneratedByEvent): void {
  let entity = new WasGeneratedBy(
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
