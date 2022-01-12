import {
  Fulfilled as FulfilledEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/AccessProofCondition/AccessProofCondition"
import { Fulfilled, OwnershipTransferred } from "../generated/schema"

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
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
