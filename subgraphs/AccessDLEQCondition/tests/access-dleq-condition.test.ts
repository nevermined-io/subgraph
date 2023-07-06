import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { Fulfilled } from "../generated/schema"
import { Fulfilled as FulfilledEvent } from "../generated/AccessDLEQCondition/AccessDLEQCondition"
import { handleFulfilled } from "../src/access-dleq-condition"
import { createFulfilledEvent } from "./access-dleq-condition-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _agreementId = Bytes.fromI32(1234567890)
    let _cipher = BigInt.fromI32(234)
    let _secretId = [BigInt.fromI32(234)]
    let _buyer = [BigInt.fromI32(234)]
    let _provider = [BigInt.fromI32(234)]
    let _reencrypt = [BigInt.fromI32(234)]
    let _proof = [BigInt.fromI32(234)]
    let _conditionId = Bytes.fromI32(1234567890)
    let newFulfilledEvent = createFulfilledEvent(
      _agreementId,
      _cipher,
      _secretId,
      _buyer,
      _provider,
      _reencrypt,
      _proof,
      _conditionId
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
      "_cipher",
      "234"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_secretId",
      "[234]"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_buyer",
      "[234]"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_provider",
      "[234]"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_reencrypt",
      "[234]"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_proof",
      "[234]"
    )
    assert.fieldEquals(
      "Fulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_conditionId",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
