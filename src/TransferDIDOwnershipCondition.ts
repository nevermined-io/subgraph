import {
  Fulfilled as TransferDIDOwnershipConditionFulfilledEvent,
  Initialized as TransferDIDOwnershipConditionInitializedEvent,
  OwnershipTransferred as TransferDIDOwnershipConditionOwnershipTransferredEvent,
} from "../generated/TransferDIDOwnershipCondition/TransferDIDOwnershipCondition"
import {
  TransferDIDOwnershipConditionFulfilled,
  TransferDIDOwnershipConditionInitialized,
  TransferDIDOwnershipConditionOwnershipTransferred,
} from "../generated/schema"

export function handleTransferDIDOwnershipConditionFulfilled(
  event: TransferDIDOwnershipConditionFulfilledEvent
): void {
  let entity = new TransferDIDOwnershipConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._receiver = event.params._receiver
  entity._conditionId = event.params._conditionId
  entity.save()
}

export function handleTransferDIDOwnershipConditionInitialized(
  event: TransferDIDOwnershipConditionInitializedEvent
): void {
  let entity = new TransferDIDOwnershipConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleTransferDIDOwnershipConditionOwnershipTransferred(
  event: TransferDIDOwnershipConditionOwnershipTransferredEvent
): void {
  let entity = new TransferDIDOwnershipConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
