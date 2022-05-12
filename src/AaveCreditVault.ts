import {
  Initialized as AaveCreditVaultInitializedEvent,
  RoleAdminChanged as AaveCreditVaultRoleAdminChangedEvent,
  RoleGranted as AaveCreditVaultRoleGrantedEvent,
  RoleRevoked as AaveCreditVaultRoleRevokedEvent,
} from "../generated/AaveCreditVault/AaveCreditVault"
import {
  AaveCreditVaultInitialized,
  AaveCreditVaultRoleAdminChanged,
  AaveCreditVaultRoleGranted,
  AaveCreditVaultRoleRevoked,
} from "../generated/schema"

export function handleAaveCreditVaultInitialized(
  event: AaveCreditVaultInitializedEvent
): void {
  let entity = new AaveCreditVaultInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleAaveCreditVaultRoleAdminChanged(
  event: AaveCreditVaultRoleAdminChangedEvent
): void {
  let entity = new AaveCreditVaultRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleAaveCreditVaultRoleGranted(
  event: AaveCreditVaultRoleGrantedEvent
): void {
  let entity = new AaveCreditVaultRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleAaveCreditVaultRoleRevoked(
  event: AaveCreditVaultRoleRevokedEvent
): void {
  let entity = new AaveCreditVaultRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
