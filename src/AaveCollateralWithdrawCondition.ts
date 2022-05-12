import {
  Fulfilled as AaveCollateralWithdrawConditionFulfilledEvent,
  Initialized as AaveCollateralWithdrawConditionInitializedEvent,
  OwnershipTransferred as AaveCollateralWithdrawConditionOwnershipTransferredEvent,
} from "../generated/AaveCollateralWithdrawCondition/AaveCollateralWithdrawCondition"
import {
  AaveCollateralWithdrawConditionFulfilled,
  AaveCollateralWithdrawConditionInitialized,
  AaveCollateralWithdrawConditionOwnershipTransferred,
} from "../generated/schema"

export function handleAaveCollateralWithdrawConditionFulfilled(
  event: AaveCollateralWithdrawConditionFulfilledEvent
): void {
  let entity = new AaveCollateralWithdrawConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleAaveCollateralWithdrawConditionInitialized(
  event: AaveCollateralWithdrawConditionInitializedEvent
): void {
  let entity = new AaveCollateralWithdrawConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleAaveCollateralWithdrawConditionOwnershipTransferred(
  event: AaveCollateralWithdrawConditionOwnershipTransferredEvent
): void {
  let entity = new AaveCollateralWithdrawConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
