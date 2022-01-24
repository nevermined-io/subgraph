import {
  Fulfilled as AaveBorrowConditionFulfilledEvent,
  OwnershipTransferred as AaveBorrowConditionOwnershipTransferredEvent,
} from "../generated/AaveBorrowCondition/AaveBorrowCondition"
import {
  AaveBorrowConditionFulfilled,
  AaveBorrowConditionOwnershipTransferred,
} from "../generated/schema"

export function handleAaveBorrowConditionFulfilled(
  event: AaveBorrowConditionFulfilledEvent
): void {
  let entity = new AaveBorrowConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleAaveBorrowConditionOwnershipTransferred(
  event: AaveBorrowConditionOwnershipTransferredEvent
): void {
  let entity = new AaveBorrowConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
