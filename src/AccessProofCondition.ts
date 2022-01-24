import {
  Fulfilled as AccessProofConditionFulfilledEvent,
  OwnershipTransferred as AccessProofConditionOwnershipTransferredEvent,
} from "../generated/AccessProofCondition/AccessProofCondition"
import {
  AccessProofConditionFulfilled,
  AccessProofConditionOwnershipTransferred,
} from "../generated/schema"

export function handleAccessProofConditionFulfilled(
  event: AccessProofConditionFulfilledEvent
): void {
  let entity = new AccessProofConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._origHash = event.params._origHash
  entity._buyer = event.params._buyer
  entity._provider = event.params._provider
  entity._cipher = event.params._cipher
  entity._proof = event.params._proof
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleAccessProofConditionOwnershipTransferred(
  event: AccessProofConditionOwnershipTransferredEvent
): void {
  let entity = new AccessProofConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
