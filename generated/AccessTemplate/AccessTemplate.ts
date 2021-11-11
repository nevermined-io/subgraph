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

export class AgreementCreated extends ethereum.Event {
  get params(): AgreementCreated__Params {
    return new AgreementCreated__Params(this);
  }
}

export class AgreementCreated__Params {
  _event: AgreementCreated;

  constructor(event: AgreementCreated) {
    this._event = event;
  }

  get _agreementId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _did(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _accessConsumer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _accessProvider(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _timeLocks(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get _timeOuts(): Array<BigInt> {
    return this._event.parameters[5].value.toBigIntArray();
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

export class AccessTemplate__getAgreementDataResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class AccessTemplate extends ethereum.SmartContract {
  static bind(address: Address): AccessTemplate {
    return new AccessTemplate("AccessTemplate", address);
  }

  createAgreement(
    _id: Bytes,
    _did: Bytes,
    _conditionIds: Array<Bytes>,
    _timeLocks: Array<BigInt>,
    _timeOuts: Array<BigInt>
  ): BigInt {
    let result = super.call(
      "createAgreement",
      "createAgreement(bytes32,bytes32,bytes32[],uint256[],uint256[]):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromFixedBytesArray(_conditionIds),
        ethereum.Value.fromUnsignedBigIntArray(_timeLocks),
        ethereum.Value.fromUnsignedBigIntArray(_timeOuts)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAgreement(
    _id: Bytes,
    _did: Bytes,
    _conditionIds: Array<Bytes>,
    _timeLocks: Array<BigInt>,
    _timeOuts: Array<BigInt>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAgreement",
      "createAgreement(bytes32,bytes32,bytes32[],uint256[],uint256[]):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromFixedBytesArray(_conditionIds),
        ethereum.Value.fromUnsignedBigIntArray(_timeLocks),
        ethereum.Value.fromUnsignedBigIntArray(_timeOuts)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createAgreement1(
    _id: Bytes,
    _did: Bytes,
    _conditionIds: Array<Bytes>,
    _timeLocks: Array<BigInt>,
    _timeOuts: Array<BigInt>,
    _accessConsumer: Address
  ): BigInt {
    let result = super.call(
      "createAgreement",
      "createAgreement(bytes32,bytes32,bytes32[],uint256[],uint256[],address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromFixedBytesArray(_conditionIds),
        ethereum.Value.fromUnsignedBigIntArray(_timeLocks),
        ethereum.Value.fromUnsignedBigIntArray(_timeOuts),
        ethereum.Value.fromAddress(_accessConsumer)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAgreement1(
    _id: Bytes,
    _did: Bytes,
    _conditionIds: Array<Bytes>,
    _timeLocks: Array<BigInt>,
    _timeOuts: Array<BigInt>,
    _accessConsumer: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAgreement",
      "createAgreement(bytes32,bytes32,bytes32[],uint256[],uint256[],address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromFixedBytes(_did),
        ethereum.Value.fromFixedBytesArray(_conditionIds),
        ethereum.Value.fromUnsignedBigIntArray(_timeLocks),
        ethereum.Value.fromUnsignedBigIntArray(_timeOuts),
        ethereum.Value.fromAddress(_accessConsumer)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAgreementData(_id: Bytes): AccessTemplate__getAgreementDataResult {
    let result = super.call(
      "getAgreementData",
      "getAgreementData(bytes32):(address,address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return new AccessTemplate__getAgreementDataResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_getAgreementData(
    _id: Bytes
  ): ethereum.CallResult<AccessTemplate__getAgreementDataResult> {
    let result = super.tryCall(
      "getAgreementData",
      "getAgreementData(bytes32):(address,address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessTemplate__getAgreementDataResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
  }

  getConditionTypes(): Array<Address> {
    let result = super.call(
      "getConditionTypes",
      "getConditionTypes():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_getConditionTypes(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getConditionTypes",
      "getConditionTypes():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
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

export class CreateAgreementCall extends ethereum.Call {
  get inputs(): CreateAgreementCall__Inputs {
    return new CreateAgreementCall__Inputs(this);
  }

  get outputs(): CreateAgreementCall__Outputs {
    return new CreateAgreementCall__Outputs(this);
  }
}

export class CreateAgreementCall__Inputs {
  _call: CreateAgreementCall;

  constructor(call: CreateAgreementCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _did(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _conditionIds(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _timeLocks(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _timeOuts(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }
}

export class CreateAgreementCall__Outputs {
  _call: CreateAgreementCall;

  constructor(call: CreateAgreementCall) {
    this._call = call;
  }

  get size(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateAgreement1Call extends ethereum.Call {
  get inputs(): CreateAgreement1Call__Inputs {
    return new CreateAgreement1Call__Inputs(this);
  }

  get outputs(): CreateAgreement1Call__Outputs {
    return new CreateAgreement1Call__Outputs(this);
  }
}

export class CreateAgreement1Call__Inputs {
  _call: CreateAgreement1Call;

  constructor(call: CreateAgreement1Call) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _did(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _conditionIds(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _timeLocks(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _timeOuts(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get _accessConsumer(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class CreateAgreement1Call__Outputs {
  _call: CreateAgreement1Call;

  constructor(call: CreateAgreement1Call) {
    this._call = call;
  }

  get size(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get _agreementStoreManagerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _didRegistryAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _accessConditionAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _lockConditionAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _escrowConditionAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}
