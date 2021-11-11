import {
  Fulfilled as TransferNFT721ConditionFulfilledEvent,
  OwnershipTransferred as TransferNFT721ConditionOwnershipTransferredEvent,
} from "../generated/TransferNFT721Condition/TransferNFT721Condition"
import {
  TransferNFT721ConditionFulfilled,
  TransferNFT721ConditionOwnershipTransferred,
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
