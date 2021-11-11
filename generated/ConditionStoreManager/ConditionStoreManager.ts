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

export class ConditionCreated extends ethereum.Event {
  get params(): ConditionCreated__Params {
    return new ConditionCreated__Params(this);
  }
}

export class ConditionCreated__Params {
  _event: ConditionCreated;

  constructor(event: ConditionCreated) {
    this._event = event;
  }

  get _id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _typeRef(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _who(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ConditionUpdated extends ethereum.Event {
  get params(): ConditionUpdated__Params {
    return new ConditionUpdated__Params(this);
  }
}

export class ConditionUpdated__Params {
  _event: ConditionUpdated;

  constructor(event: ConditionUpdated) {
    this._event = event;
  }

  get _id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _typeRef(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _state(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get _who(): Address {
    return this._event.parameters[3].value.toAddress();
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

export class ConditionStoreManager__getConditionResult {
  value0: Address;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: Address;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: Address,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class ConditionStoreManager extends ethereum.SmartContract {
  static bind(address: Address): ConditionStoreManager {
    return new ConditionStoreManager("ConditionStoreManager", address);
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

  getCreateRole(): Address {
    let result = super.call("getCreateRole", "getCreateRole():(address)", []);

    return result[0].toAddress();
  }

  try_getCreateRole(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCreateRole",
      "getCreateRole():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createCondition(
    _id: Bytes,
    _typeRef: Address,
    _timeLock: BigInt,
    _timeOut: BigInt,
    _creator: Address
  ): BigInt {
    let result = super.call(
      "createCondition",
      "createCondition(bytes32,address,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromAddress(_typeRef),
        ethereum.Value.fromUnsignedBigInt(_timeLock),
        ethereum.Value.fromUnsignedBigInt(_timeOut),
        ethereum.Value.fromAddress(_creator)
      ]
    );

    return result[0].toBigInt();
  }

  try_createCondition(
    _id: Bytes,
    _typeRef: Address,
    _timeLock: BigInt,
    _timeOut: BigInt,
    _creator: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createCondition",
      "createCondition(bytes32,address,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromAddress(_typeRef),
        ethereum.Value.fromUnsignedBigInt(_timeLock),
        ethereum.Value.fromUnsignedBigInt(_timeOut),
        ethereum.Value.fromAddress(_creator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createCondition1(_id: Bytes, _typeRef: Address): BigInt {
    let result = super.call(
      "createCondition",
      "createCondition(bytes32,address):(uint256)",
      [ethereum.Value.fromFixedBytes(_id), ethereum.Value.fromAddress(_typeRef)]
    );

    return result[0].toBigInt();
  }

  try_createCondition1(
    _id: Bytes,
    _typeRef: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createCondition",
      "createCondition(bytes32,address):(uint256)",
      [ethereum.Value.fromFixedBytes(_id), ethereum.Value.fromAddress(_typeRef)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createCondition2(_id: Bytes, _typeRef: Address, _creator: Address): BigInt {
    let result = super.call(
      "createCondition",
      "createCondition(bytes32,address,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromAddress(_typeRef),
        ethereum.Value.fromAddress(_creator)
      ]
    );

    return result[0].toBigInt();
  }

  try_createCondition2(
    _id: Bytes,
    _typeRef: Address,
    _creator: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createCondition",
      "createCondition(bytes32,address,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromAddress(_typeRef),
        ethereum.Value.fromAddress(_creator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateConditionState(_id: Bytes, _newState: i32): i32 {
    let result = super.call(
      "updateConditionState",
      "updateConditionState(bytes32,uint8):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_newState))
      ]
    );

    return result[0].toI32();
  }

  try_updateConditionState(
    _id: Bytes,
    _newState: i32
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "updateConditionState",
      "updateConditionState(bytes32,uint8):(uint8)",
      [
        ethereum.Value.fromFixedBytes(_id),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_newState))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getConditionListSize(): BigInt {
    let result = super.call(
      "getConditionListSize",
      "getConditionListSize():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getConditionListSize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getConditionListSize",
      "getConditionListSize():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCondition(_id: Bytes): ConditionStoreManager__getConditionResult {
    let result = super.call(
      "getCondition",
      "getCondition(bytes32):(address,uint8,uint256,uint256,uint256,address,address,uint256)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return new ConditionStoreManager__getConditionResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBigInt()
    );
  }

  try_getCondition(
    _id: Bytes
  ): ethereum.CallResult<ConditionStoreManager__getConditionResult> {
    let result = super.tryCall(
      "getCondition",
      "getCondition(bytes32):(address,uint8,uint256,uint256,uint256,address,address,uint256)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ConditionStoreManager__getConditionResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBigInt()
      )
    );
  }

  getConditionState(_id: Bytes): i32 {
    let result = super.call(
      "getConditionState",
      "getConditionState(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toI32();
  }

  try_getConditionState(_id: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getConditionState",
      "getConditionState(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getConditionTypeRef(_id: Bytes): Address {
    let result = super.call(
      "getConditionTypeRef",
      "getConditionTypeRef(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toAddress();
  }

  try_getConditionTypeRef(_id: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getConditionTypeRef",
      "getConditionTypeRef(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getConditionCreatedBy(_id: Bytes): Address {
    let result = super.call(
      "getConditionCreatedBy",
      "getConditionCreatedBy(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toAddress();
  }

  try_getConditionCreatedBy(_id: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getConditionCreatedBy",
      "getConditionCreatedBy(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMappingValue(_id: Bytes, _key: Bytes): Bytes {
    let result = super.call(
      "getMappingValue",
      "getMappingValue(bytes32,bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(_id), ethereum.Value.fromFixedBytes(_key)]
    );

    return result[0].toBytes();
  }

  try_getMappingValue(_id: Bytes, _key: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getMappingValue",
      "getMappingValue(bytes32,bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(_id), ethereum.Value.fromFixedBytes(_key)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isConditionTimeLocked(_id: Bytes): boolean {
    let result = super.call(
      "isConditionTimeLocked",
      "isConditionTimeLocked(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toBoolean();
  }

  try_isConditionTimeLocked(_id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isConditionTimeLocked",
      "isConditionTimeLocked(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isConditionTimedOut(_id: Bytes): boolean {
    let result = super.call(
      "isConditionTimedOut",
      "isConditionTimedOut(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toBoolean();
  }

  try_isConditionTimedOut(_id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isConditionTimedOut",
      "isConditionTimedOut(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class DelegateCreateRoleCall extends ethereum.Call {
  get inputs(): DelegateCreateRoleCall__Inputs {
    return new DelegateCreateRoleCall__Inputs(this);
  }

  get outputs(): DelegateCreateRoleCall__Outputs {
    return new DelegateCreateRoleCall__Outputs(this);
  }
}

export class DelegateCreateRoleCall__Inputs {
  _call: DelegateCreateRoleCall;

  constructor(call: DelegateCreateRoleCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DelegateCreateRoleCall__Outputs {
  _call: DelegateCreateRoleCall;

  constructor(call: DelegateCreateRoleCall) {
    this._call = call;
  }
}

export class DelegateUpdateRoleCall extends ethereum.Call {
  get inputs(): DelegateUpdateRoleCall__Inputs {
    return new DelegateUpdateRoleCall__Inputs(this);
  }

  get outputs(): DelegateUpdateRoleCall__Outputs {
    return new DelegateUpdateRoleCall__Outputs(this);
  }
}

export class DelegateUpdateRoleCall__Inputs {
  _call: DelegateUpdateRoleCall;

  constructor(call: DelegateUpdateRoleCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get delegatee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DelegateUpdateRoleCall__Outputs {
  _call: DelegateUpdateRoleCall;

  constructor(call: DelegateUpdateRoleCall) {
    this._call = call;
  }
}

export class CreateConditionCall extends ethereum.Call {
  get inputs(): CreateConditionCall__Inputs {
    return new CreateConditionCall__Inputs(this);
  }

  get outputs(): CreateConditionCall__Outputs {
    return new CreateConditionCall__Outputs(this);
  }
}

export class CreateConditionCall__Inputs {
  _call: CreateConditionCall;

  constructor(call: CreateConditionCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _typeRef(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _timeLock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _timeOut(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _creator(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class CreateConditionCall__Outputs {
  _call: CreateConditionCall;

  constructor(call: CreateConditionCall) {
    this._call = call;
  }

  get size(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateCondition1Call extends ethereum.Call {
  get inputs(): CreateCondition1Call__Inputs {
    return new CreateCondition1Call__Inputs(this);
  }

  get outputs(): CreateCondition1Call__Outputs {
    return new CreateCondition1Call__Outputs(this);
  }
}

export class CreateCondition1Call__Inputs {
  _call: CreateCondition1Call;

  constructor(call: CreateCondition1Call) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _typeRef(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateCondition1Call__Outputs {
  _call: CreateCondition1Call;

  constructor(call: CreateCondition1Call) {
    this._call = call;
  }

  get size(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateCondition2Call extends ethereum.Call {
  get inputs(): CreateCondition2Call__Inputs {
    return new CreateCondition2Call__Inputs(this);
  }

  get outputs(): CreateCondition2Call__Outputs {
    return new CreateCondition2Call__Outputs(this);
  }
}

export class CreateCondition2Call__Inputs {
  _call: CreateCondition2Call;

  constructor(call: CreateCondition2Call) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _typeRef(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _creator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateCondition2Call__Outputs {
  _call: CreateCondition2Call;

  constructor(call: CreateCondition2Call) {
    this._call = call;
  }

  get size(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateConditionStateCall extends ethereum.Call {
  get inputs(): UpdateConditionStateCall__Inputs {
    return new UpdateConditionStateCall__Inputs(this);
  }

  get outputs(): UpdateConditionStateCall__Outputs {
    return new UpdateConditionStateCall__Outputs(this);
  }
}

export class UpdateConditionStateCall__Inputs {
  _call: UpdateConditionStateCall;

  constructor(call: UpdateConditionStateCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _newState(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class UpdateConditionStateCall__Outputs {
  _call: UpdateConditionStateCall;

  constructor(call: UpdateConditionStateCall) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.outputValues[0].value.toI32();
  }
}

export class UpdateConditionMappingCall extends ethereum.Call {
  get inputs(): UpdateConditionMappingCall__Inputs {
    return new UpdateConditionMappingCall__Inputs(this);
  }

  get outputs(): UpdateConditionMappingCall__Outputs {
    return new UpdateConditionMappingCall__Outputs(this);
  }
}

export class UpdateConditionMappingCall__Inputs {
  _call: UpdateConditionMappingCall;

  constructor(call: UpdateConditionMappingCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _key(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _value(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UpdateConditionMappingCall__Outputs {
  _call: UpdateConditionMappingCall;

  constructor(call: UpdateConditionMappingCall) {
    this._call = call;
  }
}
