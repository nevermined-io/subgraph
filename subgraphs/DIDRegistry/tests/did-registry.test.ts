import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { ActedOnBehalf } from "../generated/schema"
import { ActedOnBehalf as ActedOnBehalfEvent } from "../generated/DIDRegistry/DIDRegistry"
import { handleActedOnBehalf } from "../src/did-registry"
import { createActedOnBehalfEvent } from "./did-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _entityDid = Bytes.fromI32(1234567890)
    let _delegateAgentId = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _responsibleAgentId = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _activityId = Bytes.fromI32(1234567890)
    let provId = Bytes.fromI32(1234567890)
    let _attributes = "Example string value"
    let _blockNumberUpdated = BigInt.fromI32(234)
    let newActedOnBehalfEvent = createActedOnBehalfEvent(
      _entityDid,
      _delegateAgentId,
      _responsibleAgentId,
      _activityId,
      provId,
      _attributes,
      _blockNumberUpdated
    )
    handleActedOnBehalf(newActedOnBehalfEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ActedOnBehalf created and stored", () => {
    assert.entityCount("ActedOnBehalf", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_entityDid",
      "1234567890"
    )
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_delegateAgentId",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_responsibleAgentId",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_activityId",
      "1234567890"
    )
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "provId",
      "1234567890"
    )
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_attributes",
      "Example string value"
    )
    assert.fieldEquals(
      "ActedOnBehalf",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_blockNumberUpdated",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
