import {
  Fulfilled as NFTAccessConditionFulfilledEvent,
  Initialized as NFTAccessConditionInitializedEvent,
  OwnershipTransferred as NFTAccessConditionOwnershipTransferredEvent,
} from "../generated/NFTAccessCondition/NFTAccessCondition"
import {
  NFTAccessConditionFulfilled,
  NFTAccessConditionInitialized,
  NFTAccessConditionOwnershipTransferred,
} from "../generated/schema"

export function handleNFTAccessConditionFulfilled(
  event: NFTAccessConditionFulfilledEvent
): void {
  let entity = new NFTAccessConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._documentId = event.params._documentId
  entity._grantee = event.params._grantee
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleNFTAccessConditionInitialized(
  event: NFTAccessConditionInitializedEvent
): void {
  let entity = new NFTAccessConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFTAccessConditionOwnershipTransferred(
  event: NFTAccessConditionOwnershipTransferredEvent
): void {
  let entity = new NFTAccessConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
