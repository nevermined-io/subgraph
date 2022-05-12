import {
  Approval as NeverminedTokenApprovalEvent,
  Initialized as NeverminedTokenInitializedEvent,
  OwnershipTransferred as NeverminedTokenOwnershipTransferredEvent,
  RoleAdminChanged as NeverminedTokenRoleAdminChangedEvent,
  RoleGranted as NeverminedTokenRoleGrantedEvent,
  RoleRevoked as NeverminedTokenRoleRevokedEvent,
  Transfer as NeverminedTokenTransferEvent,
} from "../generated/NeverminedToken/NeverminedToken"
import {
  NeverminedTokenApproval,
  NeverminedTokenInitialized,
  NeverminedTokenOwnershipTransferred,
  NeverminedTokenRoleAdminChanged,
  NeverminedTokenRoleGranted,
  NeverminedTokenRoleRevoked,
  NeverminedTokenTransfer,
} from "../generated/schema"

export function handleNeverminedTokenApproval(
  event: NeverminedTokenApprovalEvent
): void {
  let entity = new NeverminedTokenApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleNeverminedTokenInitialized(
  event: NeverminedTokenInitializedEvent
): void {
  let entity = new NeverminedTokenInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNeverminedTokenOwnershipTransferred(
  event: NeverminedTokenOwnershipTransferredEvent
): void {
  let entity = new NeverminedTokenOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleNeverminedTokenRoleAdminChanged(
  event: NeverminedTokenRoleAdminChangedEvent
): void {
  let entity = new NeverminedTokenRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleNeverminedTokenRoleGranted(
  event: NeverminedTokenRoleGrantedEvent
): void {
  let entity = new NeverminedTokenRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNeverminedTokenRoleRevoked(
  event: NeverminedTokenRoleRevokedEvent
): void {
  let entity = new NeverminedTokenRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNeverminedTokenTransfer(
  event: NeverminedTokenTransferEvent
): void {
  let entity = new NeverminedTokenTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
