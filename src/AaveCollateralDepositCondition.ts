import {
  Fulfilled as AaveCollateralDepositConditionFulfilledEvent,
  Initialized as AaveCollateralDepositConditionInitializedEvent,
  OwnershipTransferred as AaveCollateralDepositConditionOwnershipTransferredEvent,
} from "../generated/AaveCollateralDepositCondition/AaveCollateralDepositCondition"
import {
  AaveCollateralDepositConditionFulfilled,
  AaveCollateralDepositConditionInitialized,
  AaveCollateralDepositConditionOwnershipTransferred,
} from "../generated/schema"

export function handleAaveCollateralDepositConditionFulfilled(
  event: AaveCollateralDepositConditionFulfilledEvent
): void {
  let entity = new AaveCollateralDepositConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleAaveCollateralDepositConditionInitialized(
  event: AaveCollateralDepositConditionInitializedEvent
): void {
  let entity = new AaveCollateralDepositConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleAaveCollateralDepositConditionOwnershipTransferred(
  event: AaveCollateralDepositConditionOwnershipTransferredEvent
): void {
  let entity = new AaveCollateralDepositConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
