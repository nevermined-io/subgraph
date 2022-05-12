import {
  Initialized as SignConditionInitializedEvent,
  OwnershipTransferred as SignConditionOwnershipTransferredEvent,
} from "../generated/SignCondition/SignCondition"
import {
  SignConditionInitialized,
  SignConditionOwnershipTransferred,
} from "../generated/schema"

export function handleSignConditionInitialized(
  event: SignConditionInitializedEvent
): void {
  let entity = new SignConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleSignConditionOwnershipTransferred(
  event: SignConditionOwnershipTransferredEvent
): void {
  let entity = new SignConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
