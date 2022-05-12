import {
  Fulfilled as AccessConditionFulfilledEvent,
  Initialized as AccessConditionInitializedEvent,
  OwnershipTransferred as AccessConditionOwnershipTransferredEvent,
} from "../generated/AccessCondition/AccessCondition"
import {
  AccessConditionFulfilled,
  AccessConditionInitialized,
  AccessConditionOwnershipTransferred,
} from "../generated/schema"

export function handleAccessConditionFulfilled(
  event: AccessConditionFulfilledEvent
): void {
  let entity = new AccessConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._documentId = event.params._documentId
  entity._grantee = event.params._grantee
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleAccessConditionInitialized(
  event: AccessConditionInitializedEvent
): void {
  let entity = new AccessConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleAccessConditionOwnershipTransferred(
  event: AccessConditionOwnershipTransferredEvent
): void {
  let entity = new AccessConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
