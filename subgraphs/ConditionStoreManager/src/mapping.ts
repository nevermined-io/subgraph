import {
  ConditionCreated as ConditionCreatedEvent,
  ConditionUpdated as ConditionUpdatedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/ConditionStoreManager/ConditionStoreManager"
import {
  ConditionCreated,
  ConditionUpdated,
  Initialized,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/schema"

export function handleConditionCreated(event: ConditionCreatedEvent): void {
  let entity = new ConditionCreated(
    event.params.id
  )
  entity._typeRef = event.params._typeRef
  entity._who = event.params._who
  entity.save()
}

export function handleConditionUpdated(event: ConditionUpdatedEvent): void {
  let entity = new ConditionUpdated(
    event.params.id
  )
  entity._typeRef = event.params._typeRef
  entity._state = event.params._state
  entity._who = event.params._who
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

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
