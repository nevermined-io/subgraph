import {
  Fulfilled as FulfilledEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Received as ReceivedEvent
} from "../generated/NFTEscrowPaymentCondition/NFTEscrowPaymentCondition"
import {
  Fulfilled,
  Initialized,
  OwnershipTransferred,
  Received
} from "../generated/schema"

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._tokenAddress = event.params._tokenAddress
  entity._did = event.params._did
  entity._receivers = event.params._receivers
  entity._conditionId = event.params._conditionId
  entity._amounts = event.params._amounts
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
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

export function handleReceived(event: ReceivedEvent): void {
  let entity = new Received(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._value = event.params._value
  entity.save()
}
