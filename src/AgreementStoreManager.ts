import {
  Initialized as AgreementStoreManagerInitializedEvent,
  OwnershipTransferred as AgreementStoreManagerOwnershipTransferredEvent,
  RoleAdminChanged as AgreementStoreManagerRoleAdminChangedEvent,
  RoleGranted as AgreementStoreManagerRoleGrantedEvent,
  RoleRevoked as AgreementStoreManagerRoleRevokedEvent,
} from "../generated/AgreementStoreManager/AgreementStoreManager"
import {
  AgreementStoreManagerInitialized,
  AgreementStoreManagerOwnershipTransferred,
  AgreementStoreManagerRoleAdminChanged,
  AgreementStoreManagerRoleGranted,
  AgreementStoreManagerRoleRevoked,
} from "../generated/schema"

export function handleAgreementStoreManagerInitialized(
  event: AgreementStoreManagerInitializedEvent
): void {
  let entity = new AgreementStoreManagerInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleAgreementStoreManagerOwnershipTransferred(
  event: AgreementStoreManagerOwnershipTransferredEvent
): void {
  let entity = new AgreementStoreManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleAgreementStoreManagerRoleAdminChanged(
  event: AgreementStoreManagerRoleAdminChangedEvent
): void {
  let entity = new AgreementStoreManagerRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleAgreementStoreManagerRoleGranted(
  event: AgreementStoreManagerRoleGrantedEvent
): void {
  let entity = new AgreementStoreManagerRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleAgreementStoreManagerRoleRevoked(
  event: AgreementStoreManagerRoleRevokedEvent
): void {
  let entity = new AgreementStoreManagerRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
