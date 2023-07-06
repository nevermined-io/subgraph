import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  ConditionCreated,
  ConditionUpdated,
  Initialized,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/ConditionStoreManager/ConditionStoreManager"

export function createConditionCreatedEvent(
  _id: Bytes,
  _typeRef: Address,
  _who: Address
): ConditionCreated {
  let conditionCreatedEvent = changetype<ConditionCreated>(newMockEvent())

  conditionCreatedEvent.parameters = new Array()

  conditionCreatedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromFixedBytes(_id))
  )
  conditionCreatedEvent.parameters.push(
    new ethereum.EventParam("_typeRef", ethereum.Value.fromAddress(_typeRef))
  )
  conditionCreatedEvent.parameters.push(
    new ethereum.EventParam("_who", ethereum.Value.fromAddress(_who))
  )

  return conditionCreatedEvent
}

export function createConditionUpdatedEvent(
  _id: Bytes,
  _typeRef: Address,
  _state: i32,
  _who: Address
): ConditionUpdated {
  let conditionUpdatedEvent = changetype<ConditionUpdated>(newMockEvent())

  conditionUpdatedEvent.parameters = new Array()

  conditionUpdatedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromFixedBytes(_id))
  )
  conditionUpdatedEvent.parameters.push(
    new ethereum.EventParam("_typeRef", ethereum.Value.fromAddress(_typeRef))
  )
  conditionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_state))
    )
  )
  conditionUpdatedEvent.parameters.push(
    new ethereum.EventParam("_who", ethereum.Value.fromAddress(_who))
  )

  return conditionUpdatedEvent
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
