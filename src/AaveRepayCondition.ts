import {
  Fulfilled as AaveRepayConditionFulfilledEvent,
  OwnershipTransferred as AaveRepayConditionOwnershipTransferredEvent,
} from "../generated/AaveRepayCondition/AaveRepayCondition"
import {
  AaveRepayConditionFulfilled,
  AaveRepayConditionOwnershipTransferred,
} from "../generated/schema"

export function handleAaveRepayConditionFulfilled(
  event: AaveRepayConditionFulfilledEvent
): void {
  let entity = new AaveRepayConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleAaveRepayConditionOwnershipTransferred(
  event: AaveRepayConditionOwnershipTransferredEvent
): void {
  let entity = new AaveRepayConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
