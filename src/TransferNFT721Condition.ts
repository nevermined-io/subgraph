import {
  Fulfilled as TransferNFT721ConditionFulfilledEvent,
  OwnershipTransferred as TransferNFT721ConditionOwnershipTransferredEvent,
  RoleAdminChanged as TransferNFT721ConditionRoleAdminChangedEvent,
  RoleGranted as TransferNFT721ConditionRoleGrantedEvent,
  RoleRevoked as TransferNFT721ConditionRoleRevokedEvent,
} from "../generated/TransferNFT721Condition/TransferNFT721Condition"
import {
  TransferNFT721ConditionFulfilled,
  TransferNFT721ConditionOwnershipTransferred,
  TransferNFT721ConditionRoleAdminChanged,
  TransferNFT721ConditionRoleGranted,
  TransferNFT721ConditionRoleRevoked,
} from "../generated/schema"

export function handleTransferNFT721ConditionFulfilled(
  event: TransferNFT721ConditionFulfilledEvent
): void {
  let entity = new TransferNFT721ConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._receiver = event.params._receiver
  entity._amount = event.params._amount
  entity._conditionId = event.params._conditionId
  entity._contract = event.params._contract
  entity.save()
}

export function handleTransferNFT721ConditionOwnershipTransferred(
  event: TransferNFT721ConditionOwnershipTransferredEvent
): void {
  let entity = new TransferNFT721ConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransferNFT721ConditionRoleAdminChanged(
  event: TransferNFT721ConditionRoleAdminChangedEvent
): void {
  let entity = new TransferNFT721ConditionRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleTransferNFT721ConditionRoleGranted(
  event: TransferNFT721ConditionRoleGrantedEvent
): void {
  let entity = new TransferNFT721ConditionRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleTransferNFT721ConditionRoleRevoked(
  event: TransferNFT721ConditionRoleRevokedEvent
): void {
  let entity = new TransferNFT721ConditionRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
