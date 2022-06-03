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

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _receivers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get _conditionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get _amounts(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
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

export class Received extends ethereum.Event {
  get params(): Received__Params {
    return new Received__Params(this);
  }
}

export class Received__Params {
  _event: Received;

  constructor(event: Received) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EscrowPaymentCondition extends ethereum.SmartContract {
  static bind(address: Address): EscrowPaymentCondition {
    return new EscrowPaymentCondition("EscrowPaymentCondition", address);
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

  USED_PAYMENT_ID(): Bytes {
    let result = super.call(
      "USED_PAYMENT_ID",
      "USED_PAYMENT_ID():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_USED_PAYMENT_ID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "USED_PAYMENT_ID",
      "USED_PAYMENT_ID():(bytes32)",
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

  encodeParams(
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseConditions: Array<Bytes>
  ): Bytes {
    let result = super.call(
      "encodeParams",
      "encodeParams(bytes32,uint256[],address[],address,address,address,bytes32,bytes32[]):(bytes)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytesArray(_releaseConditions)
      ]
    );

    return result[0].toBytes();
  }

  try_encodeParams(
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseConditions: Array<Bytes>
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encodeParams",
      "encodeParams(bytes32,uint256[],address[],address,address,address,bytes32,bytes32[]):(bytes)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytesArray(_releaseConditions)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  fulfill(
    _agreementId: Bytes,
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseCondition: Bytes
  ): i32 {
    let result = super.call(
      "fulfill",
      "fulfill(bytes32,bytes32,uint256[],address[],address,address,address,bytes32,bytes32):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytes(_releaseCondition)
      ]
    );

    return result[0].toI32();
  }

  try_fulfill(
    _agreementId: Bytes,
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseCondition: Bytes
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fulfill",
      "fulfill(bytes32,bytes32,uint256[],address[],address,address,address,bytes32,bytes32):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytes(_releaseCondition)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  fulfillMulti(
    _agreementId: Bytes,
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseConditions: Array<Bytes>
  ): i32 {
    let result = super.call(
      "fulfillMulti",
      "fulfillMulti(bytes32,bytes32,uint256[],address[],address,address,address,bytes32,bytes32[]):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytesArray(_releaseConditions)
      ]
    );

    return result[0].toI32();
  }

  try_fulfillMulti(
    _agreementId: Bytes,
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseConditions: Array<Bytes>
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fulfillMulti",
      "fulfillMulti(bytes32,bytes32,uint256[],address[],address,address,address,bytes32,bytes32[]):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_agreementId),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytesArray(_releaseConditions)
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

  hashValues(
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseCondition: Bytes
  ): Bytes {
    let result = super.call(
      "hashValues",
      "hashValues(bytes32,uint256[],address[],address,address,address,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytes(_releaseCondition)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValues(
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseCondition: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValues",
      "hashValues(bytes32,uint256[],address[],address,address,address,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytes(_releaseCondition)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValuesLockPayment(
    _did: Bytes,
    _rewardAddress: Address,
    _tokenAddress: Address,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>
  ): Bytes {
    let result = super.call(
      "hashValuesLockPayment",
      "hashValuesLockPayment(bytes32,address,address,uint256[],address[]):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_rewardAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValuesLockPayment(
    _did: Bytes,
    _rewardAddress: Address,
    _tokenAddress: Address,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValuesLockPayment",
      "hashValuesLockPayment(bytes32,address,address,uint256[],address[]):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromAddress(_rewardAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashValuesMulti(
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseConditions: Array<Bytes>
  ): Bytes {
    let result = super.call(
      "hashValuesMulti",
      "hashValuesMulti(bytes32,uint256[],address[],address,address,address,bytes32,bytes32[]):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytesArray(_releaseConditions)
      ]
    );

    return result[0].toBytes();
  }

  try_hashValuesMulti(
    _did: Bytes,
    _amounts: Array<BigInt>,
    _receivers: Array<Address>,
    _returnAddress: Address,
    _lockPaymentAddress: Address,
    _tokenAddress: Address,
    _lockCondition: Bytes,
    _releaseConditions: Array<Bytes>
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashValuesMulti",
      "hashValuesMulti(bytes32,uint256[],address[],address,address,address,bytes32,bytes32[]):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromAddressArray(_receivers),
        ethereum.Value.fromAddress(_returnAddress),
        ethereum.Value.fromAddress(_lockPaymentAddress),
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromFixedBytes(_lockCondition),
        ethereum.Value.fromFixedBytesArray(_releaseConditions)
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

  provenanceSignatureIsCorrect(
    _agentId: Address,
    _hash: Bytes,
    _signature: Bytes
  ): boolean {
    let result = super.call(
      "provenanceSignatureIsCorrect",
      "provenanceSignatureIsCorrect(address,bytes32,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_agentId),
        ethereum.Value.fromFixedBytes(_hash),
        ethereum.Value.fromBytes(_signature)
      ]
    );

    return result[0].toBoolean();
  }

  try_provenanceSignatureIsCorrect(
    _agentId: Address,
    _hash: Bytes,
    _signature: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "provenanceSignatureIsCorrect",
      "provenanceSignatureIsCorrect(address,bytes32,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_agentId),
        ethereum.Value.fromFixedBytes(_hash),
        ethereum.Value.fromBytes(_signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _receivers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _returnAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _lockPaymentAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _lockCondition(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _releaseCondition(): Bytes {
    return this._call.inputValues[8].value.toBytes();
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

export class FulfillMultiCall extends ethereum.Call {
  get inputs(): FulfillMultiCall__Inputs {
    return new FulfillMultiCall__Inputs(this);
  }

  get outputs(): FulfillMultiCall__Outputs {
    return new FulfillMultiCall__Outputs(this);
  }
}

export class FulfillMultiCall__Inputs {
  _call: FulfillMultiCall;

  constructor(call: FulfillMultiCall) {
    this._call = call;
  }

  get _agreementId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _did(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _receivers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _returnAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _lockPaymentAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _lockCondition(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _releaseConditions(): Array<Bytes> {
    return this._call.inputValues[8].value.toBytesArray();
  }
}

export class FulfillMultiCall__Outputs {
  _call: FulfillMultiCall;

  constructor(call: FulfillMultiCall) {
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
