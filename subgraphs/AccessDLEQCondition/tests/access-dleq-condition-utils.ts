import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Fulfilled,
  Initialized,
  OwnershipTransferred
} from "../generated/AccessDLEQCondition/AccessDLEQCondition"

export function createFulfilledEvent(
  _agreementId: Bytes,
  _cipher: BigInt,
  _secretId: Array<BigInt>,
  _buyer: Array<BigInt>,
  _provider: Array<BigInt>,
  _reencrypt: Array<BigInt>,
  _proof: Array<BigInt>,
  _conditionId: Bytes
): Fulfilled {
  let fulfilledEvent = changetype<Fulfilled>(newMockEvent())

  fulfilledEvent.parameters = new Array()

  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_agreementId",
      ethereum.Value.fromFixedBytes(_agreementId)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_cipher",
      ethereum.Value.fromUnsignedBigInt(_cipher)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_secretId",
      ethereum.Value.fromUnsignedBigIntArray(_secretId)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_buyer",
      ethereum.Value.fromUnsignedBigIntArray(_buyer)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_provider",
      ethereum.Value.fromUnsignedBigIntArray(_provider)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_reencrypt",
      ethereum.Value.fromUnsignedBigIntArray(_reencrypt)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_proof",
      ethereum.Value.fromUnsignedBigIntArray(_proof)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_conditionId",
      ethereum.Value.fromFixedBytes(_conditionId)
    )
  )

  return fulfilledEvent
}

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
