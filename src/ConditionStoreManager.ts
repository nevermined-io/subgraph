import {
  ConditionCreated as ConditionCreatedEvent,
  ConditionUpdated as ConditionUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/ConditionStoreManager/ConditionStoreManager"
import {
  ConditionCreated,
  ConditionUpdated,
  OwnershipTransferred
} from "../generated/schema"

export function handleConditionCreated(event: ConditionCreatedEvent): void {
  let entity = new ConditionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._id = event.params._id
  entity._typeRef = event.params._typeRef
  entity._who = event.params._who
  entity.save()
}

export function handleConditionUpdated(event: ConditionUpdatedEvent): void {
  let entity = new ConditionUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._id = event.params._id
  entity._typeRef = event.params._typeRef
  entity._state = event.params._state
  entity._who = event.params._who
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
