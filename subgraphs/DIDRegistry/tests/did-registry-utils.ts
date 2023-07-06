import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
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
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Used,
  WasAssociatedWith,
  WasDerivedFrom,
  WasGeneratedBy
} from "../generated/DIDRegistry/DIDRegistry"

export function createActedOnBehalfEvent(
  _entityDid: Bytes,
  _delegateAgentId: Address,
  _responsibleAgentId: Address,
  _activityId: Bytes,
  provId: Bytes,
  _attributes: string,
  _blockNumberUpdated: BigInt
): ActedOnBehalf {
  let actedOnBehalfEvent = changetype<ActedOnBehalf>(newMockEvent())

  actedOnBehalfEvent.parameters = new Array()

  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam(
      "_entityDid",
      ethereum.Value.fromFixedBytes(_entityDid)
    )
  )
  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam(
      "_delegateAgentId",
      ethereum.Value.fromAddress(_delegateAgentId)
    )
  )
  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam(
      "_responsibleAgentId",
      ethereum.Value.fromAddress(_responsibleAgentId)
    )
  )
  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam(
      "_activityId",
      ethereum.Value.fromFixedBytes(_activityId)
    )
  )
  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam("provId", ethereum.Value.fromFixedBytes(provId))
  )
  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam(
      "_attributes",
      ethereum.Value.fromString(_attributes)
    )
  )
  actedOnBehalfEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return actedOnBehalfEvent
}

export function createDIDAttributeRegisteredEvent(
  _did: Bytes,
  _owner: Address,
  _checksum: Bytes,
  _value: string,
  _lastUpdatedBy: Address,
  _blockNumberUpdated: BigInt
): DIDAttributeRegistered {
  let didAttributeRegisteredEvent = changetype<DIDAttributeRegistered>(
    newMockEvent()
  )

  didAttributeRegisteredEvent.parameters = new Array()

  didAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  didAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_checksum",
      ethereum.Value.fromFixedBytes(_checksum)
    )
  )
  didAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromString(_value))
  )
  didAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_lastUpdatedBy",
      ethereum.Value.fromAddress(_lastUpdatedBy)
    )
  )
  didAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return didAttributeRegisteredEvent
}

export function createDIDMetadataUpdatedEvent(
  _did: Bytes,
  _owner: Address,
  _checksum: Bytes,
  _url: string,
  _immutableUrl: string
): DIDMetadataUpdated {
  let didMetadataUpdatedEvent = changetype<DIDMetadataUpdated>(newMockEvent())

  didMetadataUpdatedEvent.parameters = new Array()

  didMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  didMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_checksum",
      ethereum.Value.fromFixedBytes(_checksum)
    )
  )
  didMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam("_url", ethereum.Value.fromString(_url))
  )
  didMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_immutableUrl",
      ethereum.Value.fromString(_immutableUrl)
    )
  )

  return didMetadataUpdatedEvent
}

export function createDIDOwnershipTransferredEvent(
  _did: Bytes,
  _previousOwner: Address,
  _newOwner: Address
): DIDOwnershipTransferred {
  let didOwnershipTransferredEvent = changetype<DIDOwnershipTransferred>(
    newMockEvent()
  )

  didOwnershipTransferredEvent.parameters = new Array()

  didOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "_previousOwner",
      ethereum.Value.fromAddress(_previousOwner)
    )
  )
  didOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("_newOwner", ethereum.Value.fromAddress(_newOwner))
  )

  return didOwnershipTransferredEvent
}

export function createDIDPermissionGrantedEvent(
  _did: Bytes,
  _owner: Address,
  _grantee: Address
): DIDPermissionGranted {
  let didPermissionGrantedEvent = changetype<DIDPermissionGranted>(
    newMockEvent()
  )

  didPermissionGrantedEvent.parameters = new Array()

  didPermissionGrantedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didPermissionGrantedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  didPermissionGrantedEvent.parameters.push(
    new ethereum.EventParam("_grantee", ethereum.Value.fromAddress(_grantee))
  )

  return didPermissionGrantedEvent
}

export function createDIDPermissionRevokedEvent(
  _did: Bytes,
  _owner: Address,
  _grantee: Address
): DIDPermissionRevoked {
  let didPermissionRevokedEvent = changetype<DIDPermissionRevoked>(
    newMockEvent()
  )

  didPermissionRevokedEvent.parameters = new Array()

  didPermissionRevokedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didPermissionRevokedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  didPermissionRevokedEvent.parameters.push(
    new ethereum.EventParam("_grantee", ethereum.Value.fromAddress(_grantee))
  )

  return didPermissionRevokedEvent
}

export function createDIDProvenanceDelegateAddedEvent(
  _did: Bytes,
  _delegate: Address
): DIDProvenanceDelegateAdded {
  let didProvenanceDelegateAddedEvent = changetype<DIDProvenanceDelegateAdded>(
    newMockEvent()
  )

  didProvenanceDelegateAddedEvent.parameters = new Array()

  didProvenanceDelegateAddedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didProvenanceDelegateAddedEvent.parameters.push(
    new ethereum.EventParam("_delegate", ethereum.Value.fromAddress(_delegate))
  )

  return didProvenanceDelegateAddedEvent
}

export function createDIDProvenanceDelegateRemovedEvent(
  _did: Bytes,
  _delegate: Address,
  state: boolean
): DIDProvenanceDelegateRemoved {
  let didProvenanceDelegateRemovedEvent = changetype<
    DIDProvenanceDelegateRemoved
  >(newMockEvent())

  didProvenanceDelegateRemovedEvent.parameters = new Array()

  didProvenanceDelegateRemovedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didProvenanceDelegateRemovedEvent.parameters.push(
    new ethereum.EventParam("_delegate", ethereum.Value.fromAddress(_delegate))
  )
  didProvenanceDelegateRemovedEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromBoolean(state))
  )

  return didProvenanceDelegateRemovedEvent
}

export function createDIDProviderAddedEvent(
  _did: Bytes,
  _provider: Address
): DIDProviderAdded {
  let didProviderAddedEvent = changetype<DIDProviderAdded>(newMockEvent())

  didProviderAddedEvent.parameters = new Array()

  didProviderAddedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didProviderAddedEvent.parameters.push(
    new ethereum.EventParam("_provider", ethereum.Value.fromAddress(_provider))
  )

  return didProviderAddedEvent
}

export function createDIDProviderRemovedEvent(
  _did: Bytes,
  _provider: Address,
  state: boolean
): DIDProviderRemoved {
  let didProviderRemovedEvent = changetype<DIDProviderRemoved>(newMockEvent())

  didProviderRemovedEvent.parameters = new Array()

  didProviderRemovedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  didProviderRemovedEvent.parameters.push(
    new ethereum.EventParam("_provider", ethereum.Value.fromAddress(_provider))
  )
  didProviderRemovedEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromBoolean(state))
  )

  return didProviderRemovedEvent
}

export function createDIDRoyaltiesAddedEvent(
  did: Bytes,
  addr: Address
): DIDRoyaltiesAdded {
  let didRoyaltiesAddedEvent = changetype<DIDRoyaltiesAdded>(newMockEvent())

  didRoyaltiesAddedEvent.parameters = new Array()

  didRoyaltiesAddedEvent.parameters.push(
    new ethereum.EventParam("did", ethereum.Value.fromFixedBytes(did))
  )
  didRoyaltiesAddedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )

  return didRoyaltiesAddedEvent
}

export function createDIDRoyaltyRecipientChangedEvent(
  did: Bytes,
  addr: Address
): DIDRoyaltyRecipientChanged {
  let didRoyaltyRecipientChangedEvent = changetype<DIDRoyaltyRecipientChanged>(
    newMockEvent()
  )

  didRoyaltyRecipientChangedEvent.parameters = new Array()

  didRoyaltyRecipientChangedEvent.parameters.push(
    new ethereum.EventParam("did", ethereum.Value.fromFixedBytes(did))
  )
  didRoyaltyRecipientChangedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )

  return didRoyaltyRecipientChangedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProvenanceAttributeRegisteredEvent(
  provId: Bytes,
  _did: Bytes,
  _agentId: Address,
  _activityId: Bytes,
  _relatedDid: Bytes,
  _agentInvolvedId: Address,
  _method: i32,
  _attributes: string,
  _blockNumberUpdated: BigInt
): ProvenanceAttributeRegistered {
  let provenanceAttributeRegisteredEvent = changetype<
    ProvenanceAttributeRegistered
  >(newMockEvent())

  provenanceAttributeRegisteredEvent.parameters = new Array()

  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam("provId", ethereum.Value.fromFixedBytes(provId))
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam("_agentId", ethereum.Value.fromAddress(_agentId))
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_activityId",
      ethereum.Value.fromFixedBytes(_activityId)
    )
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_relatedDid",
      ethereum.Value.fromFixedBytes(_relatedDid)
    )
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_agentInvolvedId",
      ethereum.Value.fromAddress(_agentInvolvedId)
    )
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_method",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_method))
    )
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_attributes",
      ethereum.Value.fromString(_attributes)
    )
  )
  provenanceAttributeRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return provenanceAttributeRegisteredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createUsedEvent(
  _did: Bytes,
  _agentId: Address,
  _activityId: Bytes,
  provId: Bytes,
  _attributes: string,
  _blockNumberUpdated: BigInt
): Used {
  let usedEvent = changetype<Used>(newMockEvent())

  usedEvent.parameters = new Array()

  usedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  usedEvent.parameters.push(
    new ethereum.EventParam("_agentId", ethereum.Value.fromAddress(_agentId))
  )
  usedEvent.parameters.push(
    new ethereum.EventParam(
      "_activityId",
      ethereum.Value.fromFixedBytes(_activityId)
    )
  )
  usedEvent.parameters.push(
    new ethereum.EventParam("provId", ethereum.Value.fromFixedBytes(provId))
  )
  usedEvent.parameters.push(
    new ethereum.EventParam(
      "_attributes",
      ethereum.Value.fromString(_attributes)
    )
  )
  usedEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return usedEvent
}

export function createWasAssociatedWithEvent(
  _entityDid: Bytes,
  _agentId: Address,
  _activityId: Bytes,
  provId: Bytes,
  _attributes: string,
  _blockNumberUpdated: BigInt
): WasAssociatedWith {
  let wasAssociatedWithEvent = changetype<WasAssociatedWith>(newMockEvent())

  wasAssociatedWithEvent.parameters = new Array()

  wasAssociatedWithEvent.parameters.push(
    new ethereum.EventParam(
      "_entityDid",
      ethereum.Value.fromFixedBytes(_entityDid)
    )
  )
  wasAssociatedWithEvent.parameters.push(
    new ethereum.EventParam("_agentId", ethereum.Value.fromAddress(_agentId))
  )
  wasAssociatedWithEvent.parameters.push(
    new ethereum.EventParam(
      "_activityId",
      ethereum.Value.fromFixedBytes(_activityId)
    )
  )
  wasAssociatedWithEvent.parameters.push(
    new ethereum.EventParam("provId", ethereum.Value.fromFixedBytes(provId))
  )
  wasAssociatedWithEvent.parameters.push(
    new ethereum.EventParam(
      "_attributes",
      ethereum.Value.fromString(_attributes)
    )
  )
  wasAssociatedWithEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return wasAssociatedWithEvent
}

export function createWasDerivedFromEvent(
  _newEntityDid: Bytes,
  _usedEntityDid: Bytes,
  _agentId: Address,
  _activityId: Bytes,
  provId: Bytes,
  _attributes: string,
  _blockNumberUpdated: BigInt
): WasDerivedFrom {
  let wasDerivedFromEvent = changetype<WasDerivedFrom>(newMockEvent())

  wasDerivedFromEvent.parameters = new Array()

  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam(
      "_newEntityDid",
      ethereum.Value.fromFixedBytes(_newEntityDid)
    )
  )
  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam(
      "_usedEntityDid",
      ethereum.Value.fromFixedBytes(_usedEntityDid)
    )
  )
  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam("_agentId", ethereum.Value.fromAddress(_agentId))
  )
  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam(
      "_activityId",
      ethereum.Value.fromFixedBytes(_activityId)
    )
  )
  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam("provId", ethereum.Value.fromFixedBytes(provId))
  )
  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam(
      "_attributes",
      ethereum.Value.fromString(_attributes)
    )
  )
  wasDerivedFromEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return wasDerivedFromEvent
}

export function createWasGeneratedByEvent(
  _did: Bytes,
  _agentId: Address,
  _activityId: Bytes,
  provId: Bytes,
  _attributes: string,
  _blockNumberUpdated: BigInt
): WasGeneratedBy {
  let wasGeneratedByEvent = changetype<WasGeneratedBy>(newMockEvent())

  wasGeneratedByEvent.parameters = new Array()

  wasGeneratedByEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  wasGeneratedByEvent.parameters.push(
    new ethereum.EventParam("_agentId", ethereum.Value.fromAddress(_agentId))
  )
  wasGeneratedByEvent.parameters.push(
    new ethereum.EventParam(
      "_activityId",
      ethereum.Value.fromFixedBytes(_activityId)
    )
  )
  wasGeneratedByEvent.parameters.push(
    new ethereum.EventParam("provId", ethereum.Value.fromFixedBytes(provId))
  )
  wasGeneratedByEvent.parameters.push(
    new ethereum.EventParam(
      "_attributes",
      ethereum.Value.fromString(_attributes)
    )
  )
  wasGeneratedByEvent.parameters.push(
    new ethereum.EventParam(
      "_blockNumberUpdated",
      ethereum.Value.fromUnsignedBigInt(_blockNumberUpdated)
    )
  )

  return wasGeneratedByEvent
}
