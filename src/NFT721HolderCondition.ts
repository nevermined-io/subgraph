import {
  Fulfilled as NFT721HolderConditionFulfilledEvent,
  OwnershipTransferred as NFT721HolderConditionOwnershipTransferredEvent,
} from "../generated/NFT721HolderCondition/NFT721HolderCondition"
import {
  NFT721HolderConditionFulfilled,
  NFT721HolderConditionOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721HolderConditionFulfilled(
  event: NFT721HolderConditionFulfilledEvent
): void {
  let entity = new NFT721HolderConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._address = event.params._address
  entity._conditionId = event.params._conditionId
  entity._amount = event.params._amount
  entity.save()
}

export function handleNFT721HolderConditionOwnershipTransferred(
  event: NFT721HolderConditionOwnershipTransferredEvent
): void {
  let entity = new NFT721HolderConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
