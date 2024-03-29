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

  get _conditionIdSeeds(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }

  get _conditionIds(): Array<Bytes> {
    return this._event.parameters[7].value.toBytesArray();
  }

  get _idSeed(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get _creator(): Address {
    return this._event.parameters[9].value.toAddress();
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

export class AccessDLEQTemplate__getAgreementDataResult {
  value0: Address;
  value1: Address;
  value2: Bytes;

  constructor(value0: Address, value1: Address, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    return map;
  }

  getAccessConsumer(): Address {
    return this.value0;
  }

  getAccessProvider(): Address {
    return this.value1;
  }

  getDid(): Bytes {
    return this.value2;
  }
}

export class AccessDLEQTemplate extends ethereum.SmartContract {
  static bind(address: Address): AccessDLEQTemplate {
    return new AccessDLEQTemplate("AccessDLEQTemplate", address);
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

  getAgreementData(_id: Bytes): AccessDLEQTemplate__getAgreementDataResult {
    let result = super.call(
      "getAgreementData",
      "getAgreementData(bytes32):(address,address,bytes32)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return new AccessDLEQTemplate__getAgreementDataResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBytes()
    );
  }

  try_getAgreementData(
    _id: Bytes
  ): ethereum.CallResult<AccessDLEQTemplate__getAgreementDataResult> {
    let result = super.tryCall(
      "getAgreementData",
      "getAgreementData(bytes32):(address,address,bytes32)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessDLEQTemplate__getAgreementDataResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBytes()
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
}

export class CreateAgreementAndPayCall extends ethereum.Call {
  get inputs(): CreateAgreementAndPayCall__Inputs {
    return new CreateAgreementAndPayCall__Inputs(this);
  }

  get outputs(): CreateAgreementAndPayCall__Outputs {
    return new CreateAgreementAndPayCall__Outputs(this);
  }
}

export class CreateAgreementAndPayCall__Inputs {
  _call: CreateAgreementAndPayCall;

  constructor(call: CreateAgreementAndPayCall) {
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

  get _idx(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _rewardAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[8].value.toBigIntArray();
  }

  get _receivers(): Array<Address> {
    return this._call.inputValues[9].value.toAddressArray();
  }
}

export class CreateAgreementAndPayCall__Outputs {
  _call: CreateAgreementAndPayCall;

  constructor(call: CreateAgreementAndPayCall) {
    this._call = call;
  }
}

export class CreateAgreementAndPayEscrowCall extends ethereum.Call {
  get inputs(): CreateAgreementAndPayEscrowCall__Inputs {
    return new CreateAgreementAndPayEscrowCall__Inputs(this);
  }

  get outputs(): CreateAgreementAndPayEscrowCall__Outputs {
    return new CreateAgreementAndPayEscrowCall__Outputs(this);
  }
}

export class CreateAgreementAndPayEscrowCall__Inputs {
  _call: CreateAgreementAndPayEscrowCall;

  constructor(call: CreateAgreementAndPayEscrowCall) {
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

  get _idx(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _rewardAddress(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[9].value.toBigIntArray();
  }

  get _receivers(): Array<Address> {
    return this._call.inputValues[10].value.toAddressArray();
  }
}

export class CreateAgreementAndPayEscrowCall__Outputs {
  _call: CreateAgreementAndPayEscrowCall;

  constructor(call: CreateAgreementAndPayEscrowCall) {
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
