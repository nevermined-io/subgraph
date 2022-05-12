import {
  Approval as NFT721UpgradeableApprovalEvent,
  ApprovalForAll as NFT721UpgradeableApprovalForAllEvent,
  Initialized as NFT721UpgradeableInitializedEvent,
  OwnershipTransferred as NFT721UpgradeableOwnershipTransferredEvent,
  ProxyApproval as NFT721UpgradeableProxyApprovalEvent,
  RoleAdminChanged as NFT721UpgradeableRoleAdminChangedEvent,
  RoleGranted as NFT721UpgradeableRoleGrantedEvent,
  RoleRevoked as NFT721UpgradeableRoleRevokedEvent,
  Transfer as NFT721UpgradeableTransferEvent,
} from "../generated/NFT721Upgradeable/NFT721Upgradeable"
import {
  NFT721UpgradeableApproval,
  NFT721UpgradeableApprovalForAll,
  NFT721UpgradeableInitialized,
  NFT721UpgradeableOwnershipTransferred,
  NFT721UpgradeableProxyApproval,
  NFT721UpgradeableRoleAdminChanged,
  NFT721UpgradeableRoleGranted,
  NFT721UpgradeableRoleRevoked,
  NFT721UpgradeableTransfer,
} from "../generated/schema"

export function handleNFT721UpgradeableApproval(
  event: NFT721UpgradeableApprovalEvent
): void {
  let entity = new NFT721UpgradeableApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleNFT721UpgradeableApprovalForAll(
  event: NFT721UpgradeableApprovalForAllEvent
): void {
  let entity = new NFT721UpgradeableApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleNFT721UpgradeableInitialized(
  event: NFT721UpgradeableInitializedEvent
): void {
  let entity = new NFT721UpgradeableInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFT721UpgradeableOwnershipTransferred(
  event: NFT721UpgradeableOwnershipTransferredEvent
): void {
  let entity = new NFT721UpgradeableOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleNFT721UpgradeableProxyApproval(
  event: NFT721UpgradeableProxyApprovalEvent
): void {
  let entity = new NFT721UpgradeableProxyApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleNFT721UpgradeableRoleAdminChanged(
  event: NFT721UpgradeableRoleAdminChangedEvent
): void {
  let entity = new NFT721UpgradeableRoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleNFT721UpgradeableRoleGranted(
  event: NFT721UpgradeableRoleGrantedEvent
): void {
  let entity = new NFT721UpgradeableRoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNFT721UpgradeableRoleRevoked(
  event: NFT721UpgradeableRoleRevokedEvent
): void {
  let entity = new NFT721UpgradeableRoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleNFT721UpgradeableTransfer(
  event: NFT721UpgradeableTransferEvent
): void {
  let entity = new NFT721UpgradeableTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
