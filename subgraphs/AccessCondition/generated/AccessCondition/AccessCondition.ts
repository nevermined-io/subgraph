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

export class AccessCondition extends ethereum.SmartContract {
  static bind(address: Address): AccessCondition {
    return new AccessCondition("AccessCondition", address);
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

  addressToBytes32(_addr: Address): Bytes {
    let result = super.call(
      "addressToBytes32",
      "addressToBytes32(address):(bytes32)",
      [ethereum.Value.fromAddress(_addr)]
    );

    return result[0].toBytes();
  }

  try_addressToBytes32(_addr: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "addressToBytes32",
      "addressToBytes32(address):(bytes32)",
      [ethereum.Value.fromAddress(_addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  bytes32ToAddress(_b32: Bytes): Address {
    let result = super.call(
      "bytes32ToAddress",
      "bytes32ToAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_b32)]
    );

    return result[0].toAddress();
  }

  try_bytes32ToAddress(_b32: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bytes32ToAddress",
      "bytes32ToAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_b32)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calculateTotalAmount(_amounts: Array<BigInt>): BigInt {
    let result = super.call(
      "calculateTotalAmount",
      "calculateTotalAmount(uint256[]):(uint256)",
      [ethereum.Value.fromUnsignedBigIntArray(_amounts)]
    );

    return result[0].toBigInt();
  }

  try_calculateTotalAmount(
    _amounts: Array<BigInt>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateTotalAmount",
      "calculateTotalAmount(uint256[]):(uint256)",
      [ethereum.Value.fromUnsignedBigIntArray(_amounts)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  fulfill(_agreementId: Bytes, _documentId: Bytes, _grantee: Address): i32 {
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

  try_fulfill(
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

  getCurrentBlockNumber(): BigInt {
    let result = super.call(
      "getCurrentBlockNumber",
      "getCurrentBlockNumber():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentBlockNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentBlockNumber",
      "getCurrentBlockNumber():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNvmConfigAddress(): Address {
    let result = super.call(
      "getNvmConfigAddress",
      "getNvmConfigAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getNvmConfigAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getNvmConfigAddress",
      "getNvmConfigAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTrustedForwarder(): Address {
    let result = super.call(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTrustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  isContract(addr: Address): boolean {
    let result = super.call("isContract", "isContract(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBoolean();
  }

  try_isContract(addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isContract", "isContract(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _agreementStoreManagerAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ReinitializeCall extends ethereum.Call {
  get inputs(): ReinitializeCall__Inputs {
    return new ReinitializeCall__Inputs(this);
  }

  get outputs(): ReinitializeCall__Outputs {
    return new ReinitializeCall__Outputs(this);
  }
}

export class ReinitializeCall__Inputs {
  _call: ReinitializeCall;

  constructor(call: ReinitializeCall) {
    this._call = call;
  }
}

export class ReinitializeCall__Outputs {
  _call: ReinitializeCall;

  constructor(call: ReinitializeCall) {
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

export class RenouncePermissionCall extends ethereum.Call {
  get inputs(): RenouncePermissionCall__Inputs {
    return new RenouncePermissionCall__Inputs(this);
  }

  get outputs(): RenouncePermissionCall__Outputs {
    return new RenouncePermissionCall__Outputs(this);
  }
}

export class RenouncePermissionCall__Inputs {
  _call: RenouncePermissionCall;

  constructor(call: RenouncePermissionCall) {
    this._call = call;
  }

  get _grantee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _documentId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class RenouncePermissionCall__Outputs {
  _call: RenouncePermissionCall;

  constructor(call: RenouncePermissionCall) {
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
