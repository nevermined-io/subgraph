import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AgreementCreated,
  Initialized,
  OwnershipTransferred
} from "../generated/NFTSalesWithDLEQTemplate/NFTSalesWithDLEQTemplate"

export function createAgreementCreatedEvent(
  _agreementId: Bytes,
  _did: Bytes,
  _accessConsumer: Address,
  _accessProvider: Address,
  _timeLocks: Array<BigInt>,
  _timeOuts: Array<BigInt>,
  _conditionIdSeeds: Array<Bytes>,
  _conditionIds: Array<Bytes>,
  _idSeed: Bytes,
  _creator: Address
): AgreementCreated {
  let agreementCreatedEvent = changetype<AgreementCreated>(newMockEvent())

  agreementCreatedEvent.parameters = new Array()

  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_agreementId",
      ethereum.Value.fromFixedBytes(_agreementId)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("_did", ethereum.Value.fromFixedBytes(_did))
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_accessConsumer",
      ethereum.Value.fromAddress(_accessConsumer)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_accessProvider",
      ethereum.Value.fromAddress(_accessProvider)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_timeLocks",
      ethereum.Value.fromUnsignedBigIntArray(_timeLocks)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_timeOuts",
      ethereum.Value.fromUnsignedBigIntArray(_timeOuts)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_conditionIdSeeds",
      ethereum.Value.fromFixedBytesArray(_conditionIdSeeds)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_conditionIds",
      ethereum.Value.fromFixedBytesArray(_conditionIds)
    )
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("_idSeed", ethereum.Value.fromFixedBytes(_idSeed))
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )

  return agreementCreatedEvent
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
