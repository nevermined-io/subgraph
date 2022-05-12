import {
  Initialized as DispenserInitializedEvent,
  OwnershipTransferred as DispenserOwnershipTransferredEvent,
  RequestFrequencyExceeded as DispenserRequestFrequencyExceededEvent,
  RequestLimitExceeded as DispenserRequestLimitExceededEvent,
} from "../generated/Dispenser/Dispenser"
import {
  DispenserInitialized,
  DispenserOwnershipTransferred,
  DispenserRequestFrequencyExceeded,
  DispenserRequestLimitExceeded,
} from "../generated/schema"

export function handleDispenserInitialized(
  event: DispenserInitializedEvent
): void {
  let entity = new DispenserInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleDispenserOwnershipTransferred(
  event: DispenserOwnershipTransferredEvent
): void {
  let entity = new DispenserOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleDispenserRequestFrequencyExceeded(
  event: DispenserRequestFrequencyExceededEvent
): void {
  let entity = new DispenserRequestFrequencyExceeded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requester = event.params.requester
  entity.minPeriod = event.params.minPeriod
  entity.save()
}

export function handleDispenserRequestLimitExceeded(
  event: DispenserRequestLimitExceededEvent
): void {
  let entity = new DispenserRequestLimitExceeded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requester = event.params.requester
  entity.amount = event.params.amount
  entity.maxAmount = event.params.maxAmount
  entity.save()
}
