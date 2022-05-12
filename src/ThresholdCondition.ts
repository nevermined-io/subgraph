import {
  Initialized as ThresholdConditionInitializedEvent,
  OwnershipTransferred as ThresholdConditionOwnershipTransferredEvent,
} from "../generated/ThresholdCondition/ThresholdCondition"
import {
  ThresholdConditionInitialized,
  ThresholdConditionOwnershipTransferred,
} from "../generated/schema"

export function handleThresholdConditionInitialized(
  event: ThresholdConditionInitializedEvent
): void {
  let entity = new ThresholdConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleThresholdConditionOwnershipTransferred(
  event: ThresholdConditionOwnershipTransferredEvent
): void {
  let entity = new ThresholdConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
