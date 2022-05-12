import {
  Initialized as WhitelistingConditionInitializedEvent,
  OwnershipTransferred as WhitelistingConditionOwnershipTransferredEvent,
} from "../generated/WhitelistingCondition/WhitelistingCondition"
import {
  WhitelistingConditionInitialized,
  WhitelistingConditionOwnershipTransferred,
} from "../generated/schema"

export function handleWhitelistingConditionInitialized(
  event: WhitelistingConditionInitializedEvent
): void {
  let entity = new WhitelistingConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleWhitelistingConditionOwnershipTransferred(
  event: WhitelistingConditionOwnershipTransferredEvent
): void {
  let entity = new WhitelistingConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
