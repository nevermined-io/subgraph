import {
  ApprovalForAll as NFTUpgradeableApprovalForAllEvent,
  OwnershipTransferred as NFTUpgradeableOwnershipTransferredEvent,
  ProxyApproval as NFTUpgradeableProxyApprovalEvent,
  RoleAdminChanged as NFTUpgradeableRoleAdminChangedEvent,
  RoleGranted as NFTUpgradeableRoleGrantedEvent,
  RoleRevoked as NFTUpgradeableRoleRevokedEvent,
  TransferBatch as NFTUpgradeableTransferBatchEvent,
  TransferSingle as NFTUpgradeableTransferSingleEvent,
  URI as NFTUpgradeableURIEvent,
} from "../generated/NFTUpgradeable/NFTUpgradeable"
import {
  NFTUpgradeableApprovalForAll,
  NFTUpgradeableOwnershipTransferred,
  NFTUpgradeableProxyApproval,
  NFTUpgradeableRoleAdminChanged,
  NFTUpgradeableRoleGranted,
  NFTUpgradeableRoleRevoked,
  NFTUpgradeableTransferBatch,
  NFTUpgradeableTransferSingle,
  NFTUpgradeableURI,
} from "../generated/schema"

export function handleNFTUpgradeableApprovalForAll(
  event: NFTUpgradeableApprovalForAllEvent
): void {
  let entity = new NFTUpgradeableApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleNFTUpgradeableOwnershipTransferred(
  event: NFTUpgradeableOwnershipTransferredEvent
): void {
  let entity = new NFTUpgradeableOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleNFTUpgradeableProxyApproval(
  event: NFTUpgradeableProxyApprovalEvent
): void {
  let entity = new NFTUpgradeableProxyApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleNFTUpgradeableRoleAdminChanged(
  event: NFTUpgradeableRoleAdminChangedEvent
): void {
  let entity = new NFTUpgradeableRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleNFTUpgradeableRoleGranted(
  event: NFTUpgradeableRoleGrantedEvent
): void {
  let entity = new NFTUpgradeableRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNFTUpgradeableRoleRevoked(
  event: NFTUpgradeableRoleRevokedEvent
): void {
  let entity = new NFTUpgradeableRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNFTUpgradeableTransferBatch(
  event: NFTUpgradeableTransferBatchEvent
): void {
  let entity = new NFTUpgradeableTransferBatch(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values
  entity.save()
}

export function handleNFTUpgradeableTransferSingle(
  event: NFTUpgradeableTransferSingleEvent
): void {
  let entity = new NFTUpgradeableTransferSingle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity._id = event.params.id
  entity.value = event.params.value
  entity.save()
}

export function handleNFTUpgradeableURI(event: NFTUpgradeableURIEvent): void {
  let entity = new NFTUpgradeableURI(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.value = event.params.value
  entity._id = event.params.id
  entity.save()
}
