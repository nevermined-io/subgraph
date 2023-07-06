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

  get _did(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _lockAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _conditionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _receiver(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get _nftContractAddress(): Address {
    return this._event.parameters[6].value.toAddress();
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

export class NFT721LockCondition extends ethereum.SmartContract {
  static bind(address: Address): NFT721LockCondition {
    return new NFT721LockCondition("NFT721LockCondition", address);
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

  fulfill(
    _agreementId: Bytes,
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _nftContractAddress: Address
  ): i32 {
    let result = super.call(
      "fulfill",
      "fulfill(bytes32,bytes32,address,uint256,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_nftContractAddress)
      ]
    );

    return result[0].toI32();
  }

  try_fulfill(
    _agreementId: Bytes,
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _nftContractAddress: Address
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fulfill",
      "fulfill(bytes32,bytes32,address,uint256,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_nftContractAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  fulfillMarked(
    _agreementId: Bytes,
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _receiver: Address,
    _nftContractAddress: Address
  ): i32 {
    let result = super.call(
      "fulfillMarked",
      "fulfillMarked(bytes32,bytes32,address,uint256,address,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_nftContractAddress)
      ]
    );

    return result[0].toI32();
  }

  try_fulfillMarked(
    _agreementId: Bytes,
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _receiver: Address,
    _nftContractAddress: Address
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fulfillMarked",
      "fulfillMarked(bytes32,bytes32,address,uint256,address,address):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_nftContractAddress)
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

  hashValues(
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _nftContractAddress: Address
  ): Bytes {
    let result = super.call(
      "hashValues",
      "hashValues(bytes32,address,uint256,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_nftContractAddress)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValues(
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _nftContractAddress: Address
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValues",
      "hashValues(bytes32,address,uint256,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_nftContractAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValuesMarked(
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _receiver: Address,
    _nftContractAddress: Address
  ): Bytes {
    let result = super.call(
      "hashValuesMarked",
      "hashValuesMarked(bytes32,address,uint256,address,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_nftContractAddress)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValuesMarked(
    _did: Bytes,
    _lockAddress: Address,
    _amount: BigInt,
    _receiver: Address,
    _nftContractAddress: Address
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValuesMarked",
      "hashValuesMarked(bytes32,address,uint256,address,address):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_lockAddress),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_nftContractAddress)
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

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
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

  get _did(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _lockAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _nftContractAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
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

export class FulfillMarkedCall extends ethereum.Call {
  get inputs(): FulfillMarkedCall__Inputs {
    return new FulfillMarkedCall__Inputs(this);
  }

  get outputs(): FulfillMarkedCall__Outputs {
    return new FulfillMarkedCall__Outputs(this);
  }
}

export class FulfillMarkedCall__Inputs {
  _call: FulfillMarkedCall;

  constructor(call: FulfillMarkedCall) {
    this._call = call;
  }

  get _agreementId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _did(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _lockAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _nftContractAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class FulfillMarkedCall__Outputs {
  _call: FulfillMarkedCall;

  constructor(call: FulfillMarkedCall) {
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

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
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
