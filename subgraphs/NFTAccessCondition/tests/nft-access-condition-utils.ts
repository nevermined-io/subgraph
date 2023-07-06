import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  Fulfilled,
  Initialized,
  OwnershipTransferred
} from "../generated/NFTAccessCondition/NFTAccessCondition"

export function createFulfilledEvent(
  _agreementId: Bytes,
  _documentId: Bytes,
  _grantee: Address,
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
      "_documentId",
      ethereum.Value.fromFixedBytes(_documentId)
    )
  )
  fulfilledEvent.parameters.push(
    new ethereum.EventParam("_grantee", ethereum.Value.fromAddress(_grantee))
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
