import {
  Fulfilled as EscrowPaymentConditionFulfilledEvent,
  Initialized as EscrowPaymentConditionInitializedEvent,
  OwnershipTransferred as EscrowPaymentConditionOwnershipTransferredEvent,
  Received as EscrowPaymentConditionReceivedEvent,
} from "../generated/EscrowPaymentCondition/EscrowPaymentCondition"
import {
  EscrowPaymentConditionFulfilled,
  EscrowPaymentConditionInitialized,
  EscrowPaymentConditionOwnershipTransferred,
  EscrowPaymentConditionReceived,
} from "../generated/schema"

export function handleEscrowPaymentConditionFulfilled(
  event: EscrowPaymentConditionFulfilledEvent
): void {
  let entity = new EscrowPaymentConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._tokenAddress = event.params._tokenAddress
  entity._receivers = event.params._receivers
  entity._conditionId = event.params._conditionId
  entity._amounts = event.params._amounts
  entity.save()
}

export function handleEscrowPaymentConditionInitialized(
  event: EscrowPaymentConditionInitializedEvent
): void {
  let entity = new EscrowPaymentConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleEscrowPaymentConditionOwnershipTransferred(
  event: EscrowPaymentConditionOwnershipTransferredEvent
): void {
  let entity = new EscrowPaymentConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleEscrowPaymentConditionReceived(
  event: EscrowPaymentConditionReceivedEvent
): void {
  let entity = new EscrowPaymentConditionReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._value = event.params._value
  entity.save()
}
