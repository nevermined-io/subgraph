import {
  Fulfilled as AccessConditionFulfilledEvent,
  OwnershipTransferred as AccessConditionOwnershipTransferredEvent,
} from "../generated/AccessCondition/AccessCondition"
import {
  AccessConditionFulfilled,
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
