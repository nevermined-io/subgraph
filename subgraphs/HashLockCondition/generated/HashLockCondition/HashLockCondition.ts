// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class HashLockCondition extends ethereum.SmartContract {
  static bind(address: Address): HashLockCondition {
    return new HashLockCondition("HashLockCondition", address);
  }

  CONDITION_TYPE(): Bytes {
    let result = super.call("CONDITION_TYPE", "CONDITION_TYPE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CONDITION_TYPE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CONDITION_TYPE",
      "CONDITION_TYPE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  abortByTimeOut(_id: Bytes): i32 {
    let result = super.call(
      "abortByTimeOut",
      "abortByTimeOut(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toI32();
  }

  try_abortByTimeOut(_id: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "abortByTimeOut",
      "abortByTimeOut(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  fulfill(_agreementId: Bytes, _preimage: Bytes): i32 {
    let result = super.call("fulfill", "fulfill(bytes32,bytes32):(uint8)", [
      ethereum.Value.fromFixedBytes(_agreementId),
      ethereum.Value.fromFixedBytes(_preimage)
    ]);

    return result[0].toI32();
  }

  try_fulfill(_agreementId: Bytes, _preimage: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall("fulfill", "fulfill(bytes32,bytes32):(uint8)", [
      ethereum.Value.fromFixedBytes(_agreementId),
      ethereum.Value.fromFixedBytes(_preimage)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  fulfill1(_agreementId: Bytes, _preimage: string): i32 {
    let result = super.call("fulfill", "fulfill(bytes32,string):(uint8)", [
      ethereum.Value.fromFixedBytes(_agreementId),
      ethereum.Value.fromString(_preimage)
    ]);

    return result[0].toI32();
  }

  try_fulfill1(
    _agreementId: Bytes,
    _preimage: string
  ): ethereum.CallResult<i32> {
    let result = super.tryCall("fulfill", "fulfill(bytes32,string):(uint8)", [
      ethereum.Value.fromFixedBytes(_agreementId),
      ethereum.Value.fromString(_preimage)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  fulfill2(_agreementId: Bytes, _preimage: BigInt): i32 {
    let result = super.call("fulfill", "fulfill(bytes32,uint256):(uint8)", [
      ethereum.Value.fromFixedBytes(_agreementId),
      ethereum.Value.fromUnsignedBigInt(_preimage)
    ]);

    return result[0].toI32();
  }

  try_fulfill2(
    _agreementId: Bytes,
    _preimage: BigInt
  ): ethereum.CallResult<i32> {
    let result = super.tryCall("fulfill", "fulfill(bytes32,uint256):(uint8)", [
      ethereum.Value.fromFixedBytes(_agreementId),
      ethereum.Value.fromUnsignedBigInt(_preimage)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  generateId(_agreementId: Bytes, _valueHash: Bytes): Bytes {
    let result = super.call(
      "generateId",
      "generateId(bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_valueHash)
      ]
    );

    return result[0].toBytes();
  }

  try_generateId(
    _agreementId: Bytes,
    _valueHash: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "generateId",
      "generateId(bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_valueHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValues(_preimage: Bytes): Bytes {
    let result = super.call("hashValues", "hashValues(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(_preimage)
    ]);

    return result[0].toBytes();
  }

  try_hashValues(_preimage: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("hashValues", "hashValues(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(_preimage)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValues1(_preimage: BigInt): Bytes {
    let result = super.call("hashValues", "hashValues(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(_preimage)
    ]);

    return result[0].toBytes();
  }

  try_hashValues1(_preimage: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("hashValues", "hashValues(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(_preimage)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValues2(_preimage: string): Bytes {
    let result = super.call("hashValues", "hashValues(string):(bytes32)", [
      ethereum.Value.fromString(_preimage)
    ]);

    return result[0].toBytes();
  }

  try_hashValues2(_preimage: string): ethereum.CallResult<Bytes> {
    let result = super.tryCall("hashValues", "hashValues(string):(bytes32)", [
      ethereum.Value.fromString(_preimage)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AbortByTimeOutCall extends ethereum.Call {
  get inputs(): AbortByTimeOutCall__Inputs {
    return new AbortByTimeOutCall__Inputs(this);
  }

  get outputs(): AbortByTimeOutCall__Outputs {
    return new AbortByTimeOutCall__Outputs(this);
  }
}

export class AbortByTimeOutCall__Inputs {
  _call: AbortByTimeOutCall;

  constructor(call: AbortByTimeOutCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AbortByTimeOutCall__Outputs {
  _call: AbortByTimeOutCall;

  constructor(call: AbortByTimeOutCall) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.outputValues[0].value.toI32();
  }
}

export class FulfillCall extends ethereum.Call {
  get inputs(): FulfillCall__Inputs {
    return new FulfillCall__Inputs(this);
  }

  get outputs(): FulfillCall__Outputs {
    return new FulfillCall__Outputs(this);
  }
}

export class FulfillCall__Inputs {
  _call: FulfillCall;

  constructor(call: FulfillCall) {
    this._call = call;
  }

  get _agreementId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _preimage(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class FulfillCall__Outputs {
  _call: FulfillCall;

  constructor(call: FulfillCall) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.outputValues[0].value.toI32();
  }
}

export class Fulfill1Call extends ethereum.Call {
  get inputs(): Fulfill1Call__Inputs {
    return new Fulfill1Call__Inputs(this);
  }

  get outputs(): Fulfill1Call__Outputs {
    return new Fulfill1Call__Outputs(this);
  }
}

export class Fulfill1Call__Inputs {
  _call: Fulfill1Call;

  constructor(call: Fulfill1Call) {
    this._call = call;
  }

  get _agreementId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _preimage(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class Fulfill1Call__Outputs {
  _call: Fulfill1Call;

  constructor(call: Fulfill1Call) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.outputValues[0].value.toI32();
  }
}

export class Fulfill2Call extends ethereum.Call {
  get inputs(): Fulfill2Call__Inputs {
    return new Fulfill2Call__Inputs(this);
  }

  get outputs(): Fulfill2Call__Outputs {
    return new Fulfill2Call__Outputs(this);
  }
}

export class Fulfill2Call__Inputs {
  _call: Fulfill2Call;

  constructor(call: Fulfill2Call) {
    this._call = call;
  }

  get _agreementId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _preimage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Fulfill2Call__Outputs {
  _call: Fulfill2Call;

  constructor(call: Fulfill2Call) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.outputValues[0].value.toI32();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _conditionStoreManagerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
