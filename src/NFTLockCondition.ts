import {
  Fulfilled as NFTLockConditionFulfilledEvent,
  OwnershipTransferred as NFTLockConditionOwnershipTransferredEvent,
} from "../generated/NFTLockCondition/NFTLockCondition"
import {
  NFTLockConditionFulfilled,
  NFTLockConditionOwnershipTransferred,
} from "../generated/schema"

export function handleNFTLockConditionFulfilled(
  event: NFTLockConditionFulfilledEvent
): void {
  let entity = new NFTLockConditionFulfilled(
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

export function handleNFTLockConditionOwnershipTransferred(
  event: NFTLockConditionOwnershipTransferredEvent
): void {
  let entity = new NFTLockConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
