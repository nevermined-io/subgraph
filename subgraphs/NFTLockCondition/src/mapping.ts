import {
  Fulfilled as FulfilledEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/NFTLockCondition/NFTLockCondition"
import {
  Fulfilled,
  Initialized,
  OwnershipTransferred
} from "../generated/schema"

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._lockAddress = event.params._lockAddress
  entity._conditionId = event.params._conditionId
  entity._amount = event.params._amount
  entity._receiver = event.params._receiver
  entity._nftContractAddress = event.params._nftContractAddress
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
