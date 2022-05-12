import {
  Fulfilled as AaveRepayConditionFulfilledEvent,
  Initialized as AaveRepayConditionInitializedEvent,
  OwnershipTransferred as AaveRepayConditionOwnershipTransferredEvent,
} from "../generated/AaveRepayCondition/AaveRepayCondition"
import {
  AaveRepayConditionFulfilled,
  AaveRepayConditionInitialized,
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

export function handleAaveRepayConditionInitialized(
  event: AaveRepayConditionInitializedEvent
): void {
  let entity = new AaveRepayConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
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
