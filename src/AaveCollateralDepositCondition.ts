import {
  Fulfilled as AaveCollateralDepositConditionFulfilledEvent,
  OwnershipTransferred as AaveCollateralDepositConditionOwnershipTransferredEvent,
} from "../generated/AaveCollateralDepositCondition/AaveCollateralDepositCondition"
import {
  AaveCollateralDepositConditionFulfilled,
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
