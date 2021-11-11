import {
  Fulfilled as ComputeExecutionConditionFulfilledEvent,
  OwnershipTransferred as ComputeExecutionConditionOwnershipTransferredEvent,
} from "../generated/ComputeExecutionCondition/ComputeExecutionCondition"
import {
  ComputeExecutionConditionFulfilled,
  ComputeExecutionConditionOwnershipTransferred,
} from "../generated/schema"

export function handleComputeExecutionConditionFulfilled(
  event: ComputeExecutionConditionFulfilledEvent
): void {
  let entity = new ComputeExecutionConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._computeConsumer = event.params._computeConsumer
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleComputeExecutionConditionOwnershipTransferred(
  event: ComputeExecutionConditionOwnershipTransferredEvent
): void {
  let entity = new ComputeExecutionConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
