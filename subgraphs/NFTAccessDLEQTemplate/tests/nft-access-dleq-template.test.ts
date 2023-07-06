import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { AgreementCreated } from "../generated/schema"
import { AgreementCreated as AgreementCreatedEvent } from "../generated/NFTAccessDLEQTemplate/NFTAccessDLEQTemplate"
import { handleAgreementCreated } from "../src/nft-access-dleq-template"
import { createAgreementCreatedEvent } from "./nft-access-dleq-template-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _agreementId = Bytes.fromI32(1234567890)
    let _did = Bytes.fromI32(1234567890)
    let _accessConsumer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _accessProvider = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _timeLocks = [BigInt.fromI32(234)]
    let _timeOuts = [BigInt.fromI32(234)]
    let _conditionIdSeeds = [Bytes.fromI32(1234567890)]
    let _conditionIds = [Bytes.fromI32(1234567890)]
    let _idSeed = Bytes.fromI32(1234567890)
    let _creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAgreementCreatedEvent = createAgreementCreatedEvent(
      _agreementId,
      _did,
      _accessConsumer,
      _accessProvider,
      _timeLocks,
      _timeOuts,
      _conditionIdSeeds,
      _conditionIds,
      _idSeed,
      _creator
    )
    handleAgreementCreated(newAgreementCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AgreementCreated created and stored", () => {
    assert.entityCount("AgreementCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_agreementId",
      "1234567890"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_did",
      "1234567890"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_accessConsumer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_accessProvider",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_timeLocks",
      "[234]"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_timeOuts",
      "[234]"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_conditionIdSeeds",
      "[1234567890]"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_conditionIds",
      "[1234567890]"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_idSeed",
      "1234567890"
    )
    assert.fieldEquals(
      "AgreementCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_creator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
