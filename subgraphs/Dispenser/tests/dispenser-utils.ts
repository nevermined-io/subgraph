import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  RequestFrequencyExceeded,
  RequestLimitExceeded
} from "../generated/Dispenser/Dispenser"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestFrequencyExceededEvent(
  requester: Address,
  minPeriod: BigInt
): RequestFrequencyExceeded {
  let requestFrequencyExceededEvent = changetype<RequestFrequencyExceeded>(
    newMockEvent()
  )

  requestFrequencyExceededEvent.parameters = new Array()

  requestFrequencyExceededEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  requestFrequencyExceededEvent.parameters.push(
    new ethereum.EventParam(
      "minPeriod",
      ethereum.Value.fromUnsignedBigInt(minPeriod)
    )
  )

  return requestFrequencyExceededEvent
}

export function createRequestLimitExceededEvent(
  requester: Address,
  amount: BigInt,
  maxAmount: BigInt
): RequestLimitExceeded {
  let requestLimitExceededEvent = changetype<RequestLimitExceeded>(
    newMockEvent()
  )

  requestLimitExceededEvent.parameters = new Array()

  requestLimitExceededEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  requestLimitExceededEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  requestLimitExceededEvent.parameters.push(
    new ethereum.EventParam(
      "maxAmount",
      ethereum.Value.fromUnsignedBigInt(maxAmount)
    )
  )

  return requestLimitExceededEvent
}
