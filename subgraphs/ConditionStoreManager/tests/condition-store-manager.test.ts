import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { ConditionCreated } from "../generated/schema"
import { ConditionCreated as ConditionCreatedEvent } from "../generated/ConditionStoreManager/ConditionStoreManager"
import { handleConditionCreated } from "../src/condition-store-manager"
import { createConditionCreatedEvent } from "./condition-store-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _id = Bytes.fromI32(1234567890)
    let _typeRef = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _who = Address.fromString("0x0000000000000000000000000000000000000001")
    let newConditionCreatedEvent = createConditionCreatedEvent(
      _id,
      _typeRef,
      _who
    )
    handleConditionCreated(newConditionCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ConditionCreated created and stored", () => {
    assert.entityCount("ConditionCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ConditionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_id",
      "1234567890"
    )
    assert.fieldEquals(
      "ConditionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_typeRef",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ConditionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_who",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
