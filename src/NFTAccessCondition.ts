import {
  Fulfilled as FulfilledEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/NFTAccessCondition/NFTAccessCondition"
import { Fulfilled, OwnershipTransferred } from "../generated/schema"

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._documentId = event.params._documentId
  entity._grantee = event.params._grantee
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
