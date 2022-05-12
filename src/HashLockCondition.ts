import {
  Initialized as HashLockConditionInitializedEvent,
  OwnershipTransferred as HashLockConditionOwnershipTransferredEvent,
} from "../generated/HashLockCondition/HashLockCondition"
import {
  HashLockConditionInitialized,
  HashLockConditionOwnershipTransferred,
} from "../generated/schema"

export function handleHashLockConditionInitialized(
  event: HashLockConditionInitializedEvent
): void {
  let entity = new HashLockConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleHashLockConditionOwnershipTransferred(
  event: HashLockConditionOwnershipTransferredEvent
): void {
  let entity = new HashLockConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
