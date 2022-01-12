import {
  Fulfilled as FulfilledEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/ComputeExecutionCondition/ComputeExecutionCondition"
import { Fulfilled, OwnershipTransferred } from "../generated/schema"

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._computeConsumer = event.params._computeConsumer
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
