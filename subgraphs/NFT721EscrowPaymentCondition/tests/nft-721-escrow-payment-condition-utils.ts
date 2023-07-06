import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Fulfilled,
  Initialized,
  OwnershipTransferred,
  Received
} from "../generated/NFT721EscrowPaymentCondition/NFT721EscrowPaymentCondition"

export function createFulfilledEvent(
  _agreementId: Bytes,
  _tokenAddress: Address,
  _did: Bytes,
  _receivers: Address,
  _conditionId: Bytes,
  _amounts: BigInt
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
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_receivers",
      ethereum.Value.fromAddress(_receivers)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_conditionId",
      ethereum.Value.fromFixedBytes(_conditionId)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "_amounts",
      ethereum.Value.fromUnsignedBigInt(_amounts)
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

export function createReceivedEvent(_from: Address, _value: BigInt): Received {
  let receivedEvent = changetype<Received>(newMockEvent())

  receivedEvent.parameters = new Array()

  receivedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  receivedEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return receivedEvent
}
