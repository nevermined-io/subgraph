import {
  Fulfilled as NFT721LockConditionFulfilledEvent,
  OwnershipTransferred as NFT721LockConditionOwnershipTransferredEvent,
} from "../generated/NFT721LockCondition/NFT721LockCondition"
import {
  NFT721LockConditionFulfilled,
  NFT721LockConditionOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721LockConditionFulfilled(
  event: NFT721LockConditionFulfilledEvent
): void {
  let entity = new NFT721LockConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._lockAddress = event.params._lockAddress
  entity._conditionId = event.params._conditionId
  entity._amount = event.params._amount
  entity._nftContractAddress = event.params._nftContractAddress
  entity.save()
}

export function handleNFT721LockConditionOwnershipTransferred(
  event: NFT721LockConditionOwnershipTransferredEvent
): void {
  let entity = new NFT721LockConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
