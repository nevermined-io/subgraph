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

export class Fulfilled extends ethereum.Event {
  get params(): Fulfilled__Params {
    return new Fulfilled__Params(this);
  }
}

export class Fulfilled__Params {
  _event: Fulfilled;

  constructor(event: Fulfilled) {
    this._event = event;
  }

  get _agreementId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _documentId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _grantee(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _conditionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
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

export class NFTAccessCondition extends ethereum.SmartContract {
  static bind(address: Address): NFTAccessCondition {
    return new NFTAccessCondition("NFTAccessCondition", address);
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

  checkPermissions(_grantee: Address, _documentId: Bytes): boolean {
    let result = super.call(
      "checkPermissions",
      "checkPermissions(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(_grantee),
        ethereum.Value.fromFixedBytes(_documentId)
      ]
    );

    return result[0].toBoolean();
  }

  try_checkPermissions(
    _grantee: Address,
    _documentId: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkPermissions",
      "checkPermissions(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(_grantee),
        ethereum.Value.fromFixedBytes(_documentId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  fulfill(
    _agreementId: Bytes,
    _documentId: Bytes,
    _grantee: Address,
    _contractAddress: Address
  ): i32 {
    let result = super.call(
      "fulfill",
      "fulfill(bytes32,bytes32,address,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee),
        ethereum.Value.fromAddress(_contractAddress)
      ]
    );

    return result[0].toI32();
  }

  try_fulfill(
    _agreementId: Bytes,
    _documentId: Bytes,
    _grantee: Address,
    _contractAddress: Address
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fulfill",
      "fulfill(bytes32,bytes32,address,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee),
        ethereum.Value.fromAddress(_contractAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  fulfill1(_agreementId: Bytes, _documentId: Bytes, _grantee: Address): i32 {
    let result = super.call(
      "fulfill",
      "fulfill(bytes32,bytes32,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee)
      ]
    );

    return result[0].toI32();
  }

  try_fulfill1(
    _agreementId: Bytes,
    _documentId: Bytes,
    _grantee: Address
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fulfill",
      "fulfill(bytes32,bytes32,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee)
      ]
    );
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

  hashValues(_documentId: Bytes, _grantee: Address): Bytes {
    let result = super.call(
      "hashValues",
      "hashValues(bytes32,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValues(
    _documentId: Bytes,
    _grantee: Address
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValues",
      "hashValues(bytes32,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValues1(
    _documentId: Bytes,
    _grantee: Address,
    _contractAddress: Address
  ): Bytes {
    let result = super.call(
      "hashValues",
      "hashValues(bytes32,address,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee),
        ethereum.Value.fromAddress(_contractAddress)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValues1(
    _documentId: Bytes,
    _grantee: Address,
    _contractAddress: Address
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValues",
      "hashValues(bytes32,address,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_documentId),
        ethereum.Value.fromAddress(_grantee),
        ethereum.Value.fromAddress(_contractAddress)
      ]
    );
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

  get _documentId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _grantee(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _contractAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
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

  get _documentId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _grantee(): Address {
    return this._call.inputValues[2].value.toAddress();
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

export class GrantPermissionCall extends ethereum.Call {
  get inputs(): GrantPermissionCall__Inputs {
    return new GrantPermissionCall__Inputs(this);
  }

  get outputs(): GrantPermissionCall__Outputs {
    return new GrantPermissionCall__Outputs(this);
  }
}

export class GrantPermissionCall__Inputs {
  _call: GrantPermissionCall;

  constructor(call: GrantPermissionCall) {
    this._call = call;
  }

  get _grantee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _documentId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class GrantPermissionCall__Outputs {
  _call: GrantPermissionCall;

  constructor(call: GrantPermissionCall) {
    this._call = call;
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

  get _didRegistryAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
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
