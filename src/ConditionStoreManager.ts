import {
  ConditionCreated as ConditionStoreManagerConditionCreatedEvent,
  ConditionUpdated as ConditionStoreManagerConditionUpdatedEvent,
  OwnershipTransferred as ConditionStoreManagerOwnershipTransferredEvent,
} from "../generated/ConditionStoreManager/ConditionStoreManager"
import {
  ConditionStoreManagerConditionCreated,
  ConditionStoreManagerConditionUpdated,
  ConditionStoreManagerOwnershipTransferred,
} from "../generated/schema"

export function handleConditionStoreManagerConditionCreated(
  event: ConditionStoreManagerConditionCreatedEvent
): void {
  let entity = new ConditionStoreManagerConditionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._id = event.params._id
  entity._typeRef = event.params._typeRef
  entity._who = event.params._who
  entity.save()
}

export function handleConditionStoreManagerConditionUpdated(
  event: ConditionStoreManagerConditionUpdatedEvent
): void {
  let entity = new ConditionStoreManagerConditionUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._id = event.params._id
  entity._typeRef = event.params._typeRef
  entity._state = event.params._state
  entity._who = event.params._who
  entity.save()
}

export function handleConditionStoreManagerOwnershipTransferred(
  event: ConditionStoreManagerOwnershipTransferredEvent
): void {
  let entity = new ConditionStoreManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
