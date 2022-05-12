import {
  Fulfilled as NFT721EscrowPaymentConditionFulfilledEvent,
  Initialized as NFT721EscrowPaymentConditionInitializedEvent,
  OwnershipTransferred as NFT721EscrowPaymentConditionOwnershipTransferredEvent,
  Received as NFT721EscrowPaymentConditionReceivedEvent,
} from "../generated/NFT721EscrowPaymentCondition/NFT721EscrowPaymentCondition"
import {
  NFT721EscrowPaymentConditionFulfilled,
  NFT721EscrowPaymentConditionInitialized,
  NFT721EscrowPaymentConditionOwnershipTransferred,
  NFT721EscrowPaymentConditionReceived,
} from "../generated/schema"

export function handleNFT721EscrowPaymentConditionFulfilled(
  event: NFT721EscrowPaymentConditionFulfilledEvent
): void {
  let entity = new NFT721EscrowPaymentConditionFulfilled(
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

export function handleNFT721EscrowPaymentConditionInitialized(
  event: NFT721EscrowPaymentConditionInitializedEvent
): void {
  let entity = new NFT721EscrowPaymentConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFT721EscrowPaymentConditionOwnershipTransferred(
  event: NFT721EscrowPaymentConditionOwnershipTransferredEvent
): void {
  let entity = new NFT721EscrowPaymentConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleNFT721EscrowPaymentConditionReceived(
  event: NFT721EscrowPaymentConditionReceivedEvent
): void {
  let entity = new NFT721EscrowPaymentConditionReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._value = event.params._value
  entity.save()
}
