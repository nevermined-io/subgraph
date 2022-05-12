import {
  Fulfilled as NFTEscrowPaymentConditionFulfilledEvent,
  Initialized as NFTEscrowPaymentConditionInitializedEvent,
  OwnershipTransferred as NFTEscrowPaymentConditionOwnershipTransferredEvent,
  Received as NFTEscrowPaymentConditionReceivedEvent,
} from "../generated/NFTEscrowPaymentCondition/NFTEscrowPaymentCondition"
import {
  NFTEscrowPaymentConditionFulfilled,
  NFTEscrowPaymentConditionInitialized,
  NFTEscrowPaymentConditionOwnershipTransferred,
  NFTEscrowPaymentConditionReceived,
} from "../generated/schema"

export function handleNFTEscrowPaymentConditionFulfilled(
  event: NFTEscrowPaymentConditionFulfilledEvent
): void {
  let entity = new NFTEscrowPaymentConditionFulfilled(
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

export function handleNFTEscrowPaymentConditionInitialized(
  event: NFTEscrowPaymentConditionInitializedEvent
): void {
  let entity = new NFTEscrowPaymentConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFTEscrowPaymentConditionOwnershipTransferred(
  event: NFTEscrowPaymentConditionOwnershipTransferredEvent
): void {
  let entity = new NFTEscrowPaymentConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleNFTEscrowPaymentConditionReceived(
  event: NFTEscrowPaymentConditionReceivedEvent
): void {
  let entity = new NFTEscrowPaymentConditionReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._value = event.params._value
  entity.save()
}
