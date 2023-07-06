import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { Fulfilled } from "../generated/schema"
import { Fulfilled as FulfilledEvent } from "../generated/TransferNFTCondition/TransferNFTCondition"
import { handleFulfilled } from "../src/transfer-nft-condition"
import { createFulfilledEvent } from "./transfer-nft-condition-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _agreementId = Bytes.fromI32(1234567890)
    let _did = Bytes.fromI32(1234567890)
    let _receiver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _amount = BigInt.fromI32(234)
    let _conditionId = Bytes.fromI32(1234567890)
    let _contract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newFulfilledEvent = createFulfilledEvent(
      _agreementId,
      _did,
      _receiver,
      _amount,
      _conditionId,
      _contract
    )
    handleFulfilled(newFulfilledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Fulfilled created and stored", () => {
    assert.entityCount("Fulfilled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_agreementId",
      "1234567890"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_did",
      "1234567890"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_receiver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_amount",
      "234"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_conditionId",
      "1234567890"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_contract",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
