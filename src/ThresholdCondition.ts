import { OwnershipTransferred as ThresholdConditionOwnershipTransferredEvent } from "../generated/ThresholdCondition/ThresholdCondition"
import { ThresholdConditionOwnershipTransferred } from "../generated/schema"

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
