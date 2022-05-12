import {
  ConditionCreated as ConditionStoreManagerConditionCreatedEvent,
  ConditionUpdated as ConditionStoreManagerConditionUpdatedEvent,
  Initialized as ConditionStoreManagerInitializedEvent,
  OwnershipTransferred as ConditionStoreManagerOwnershipTransferredEvent,
  RoleAdminChanged as ConditionStoreManagerRoleAdminChangedEvent,
  RoleGranted as ConditionStoreManagerRoleGrantedEvent,
  RoleRevoked as ConditionStoreManagerRoleRevokedEvent,
} from "../generated/ConditionStoreManager/ConditionStoreManager"
import {
  ConditionStoreManagerConditionCreated,
  ConditionStoreManagerConditionUpdated,
  ConditionStoreManagerInitialized,
  ConditionStoreManagerOwnershipTransferred,
  ConditionStoreManagerRoleAdminChanged,
  ConditionStoreManagerRoleGranted,
  ConditionStoreManagerRoleRevoked,
} from "../generated/schema"

export function handleConditionStoreManagerConditionCreated(
  event: ConditionStoreManagerConditionCreatedEvent
): void {
  let entity = new ConditionStoreManagerConditionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._id = event.params._id
  entity._typeRef = event.params._typeRef
  entity._who = event.params._who
  entity.save()
}

export function handleConditionStoreManagerConditionUpdated(
  event: ConditionStoreManagerConditionUpdatedEvent
): void {
  let entity = new ConditionStoreManagerConditionUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._id = event.params._id
  entity._typeRef = event.params._typeRef
  entity._state = event.params._state
  entity._who = event.params._who
  entity.save()
}

export function handleConditionStoreManagerInitialized(
  event: ConditionStoreManagerInitializedEvent
): void {
  let entity = new ConditionStoreManagerInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleConditionStoreManagerOwnershipTransferred(
  event: ConditionStoreManagerOwnershipTransferredEvent
): void {
  let entity = new ConditionStoreManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleConditionStoreManagerRoleAdminChanged(
  event: ConditionStoreManagerRoleAdminChangedEvent
): void {
  let entity = new ConditionStoreManagerRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleConditionStoreManagerRoleGranted(
  event: ConditionStoreManagerRoleGrantedEvent
): void {
  let entity = new ConditionStoreManagerRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleConditionStoreManagerRoleRevoked(
  event: ConditionStoreManagerRoleRevokedEvent
): void {
  let entity = new ConditionStoreManagerRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
