import {
  Fulfilled as NFTHolderConditionFulfilledEvent,
  Initialized as NFTHolderConditionInitializedEvent,
  OwnershipTransferred as NFTHolderConditionOwnershipTransferredEvent,
} from "../generated/NFTHolderCondition/NFTHolderCondition"
import {
  NFTHolderConditionFulfilled,
  NFTHolderConditionInitialized,
  NFTHolderConditionOwnershipTransferred,
} from "../generated/schema"

export function handleNFTHolderConditionFulfilled(
  event: NFTHolderConditionFulfilledEvent
): void {
  let entity = new NFTHolderConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._address = event.params._address
  entity._conditionId = event.params._conditionId
  entity._amount = event.params._amount
  entity.save()
}

export function handleNFTHolderConditionInitialized(
  event: NFTHolderConditionInitializedEvent
): void {
  let entity = new NFTHolderConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFTHolderConditionOwnershipTransferred(
  event: NFTHolderConditionOwnershipTransferredEvent
): void {
  let entity = new NFTHolderConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
