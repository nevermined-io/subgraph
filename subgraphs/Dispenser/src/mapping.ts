import {
  OwnershipTransferred as OwnershipTransferredEvent,
  RequestFrequencyExceeded as RequestFrequencyExceededEvent,
  RequestLimitExceeded as RequestLimitExceededEvent
} from "../generated/Dispenser/Dispenser"
import {
  OwnershipTransferred,
  RequestFrequencyExceeded,
  RequestLimitExceeded
} from "../generated/schema"

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

export function handleRequestFrequencyExceeded(
  event: RequestFrequencyExceededEvent
): void {
  let entity = new RequestFrequencyExceeded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requester = event.params.requester
  entity.minPeriod = event.params.minPeriod
  entity.save()
}

export function handleRequestLimitExceeded(
  event: RequestLimitExceededEvent
): void {
  let entity = new RequestLimitExceeded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requester = event.params.requester
  entity.amount = event.params.amount
  entity.maxAmount = event.params.maxAmount
  entity.save()
}
