import {
  Initialized as NeverminedConfigInitializedEvent,
  NeverminedConfigChange as NeverminedConfigNeverminedConfigChangeEvent,
  OwnershipTransferred as NeverminedConfigOwnershipTransferredEvent,
  RoleAdminChanged as NeverminedConfigRoleAdminChangedEvent,
  RoleGranted as NeverminedConfigRoleGrantedEvent,
  RoleRevoked as NeverminedConfigRoleRevokedEvent,
} from "../generated/NeverminedConfig/NeverminedConfig"
import {
  NeverminedConfigInitialized,
  NeverminedConfigNeverminedConfigChange,
  NeverminedConfigOwnershipTransferred,
  NeverminedConfigRoleAdminChanged,
  NeverminedConfigRoleGranted,
  NeverminedConfigRoleRevoked,
} from "../generated/schema"

export function handleNeverminedConfigInitialized(
  event: NeverminedConfigInitializedEvent
): void {
  let entity = new NeverminedConfigInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNeverminedConfigNeverminedConfigChange(
  event: NeverminedConfigNeverminedConfigChangeEvent
): void {
  let entity = new NeverminedConfigNeverminedConfigChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._whoChanged = event.params._whoChanged
  entity._parameter = event.params._parameter
  entity.save()
}

export function handleNeverminedConfigOwnershipTransferred(
  event: NeverminedConfigOwnershipTransferredEvent
): void {
  let entity = new NeverminedConfigOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleNeverminedConfigRoleAdminChanged(
  event: NeverminedConfigRoleAdminChangedEvent
): void {
  let entity = new NeverminedConfigRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleNeverminedConfigRoleGranted(
  event: NeverminedConfigRoleGrantedEvent
): void {
  let entity = new NeverminedConfigRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNeverminedConfigRoleRevoked(
  event: NeverminedConfigRoleRevokedEvent
): void {
  let entity = new NeverminedConfigRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
