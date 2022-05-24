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

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ConditionStoreManager__getConditionResult {
  value0: Address;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
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
    return map;
  }
}

export class ConditionStoreManager extends ethereum.SmartContract {
  static bind(address: Address): ConditionStoreManager {
    return new ConditionStoreManager("ConditionStoreManager", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  getCondition(_id: Bytes): ConditionStoreManager__getConditionResult {
    let result = super.call(
      "getCondition",
      "getCondition(bytes32):(address,uint8,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return new ConditionStoreManager__getConditionResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getCondition(
    _id: Bytes
  ): ethereum.CallResult<ConditionStoreManager__getConditionResult> {
    let result = super.tryCall(
      "getCondition",
      "getCondition(bytes32):(address,uint8,uint256,uint256,uint256)",
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
        value[4].toBigInt()
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

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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
}

export class CreateConditionCall__Outputs {
  _call: CreateConditionCall;

  constructor(call: CreateConditionCall) {
    this._call = call;
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

  get _timeLock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _timeOut(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateCondition1Call__Outputs {
  _call: CreateCondition1Call;

  constructor(call: CreateCondition1Call) {
    this._call = call;
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
}

export class CreateCondition2Call__Outputs {
  _call: CreateCondition2Call;

  constructor(call: CreateCondition2Call) {
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

export class GrantProxyRoleCall extends ethereum.Call {
  get inputs(): GrantProxyRoleCall__Inputs {
    return new GrantProxyRoleCall__Inputs(this);
  }

  get outputs(): GrantProxyRoleCall__Outputs {
    return new GrantProxyRoleCall__Outputs(this);
  }
}

export class GrantProxyRoleCall__Inputs {
  _call: GrantProxyRoleCall;

  constructor(call: GrantProxyRoleCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantProxyRoleCall__Outputs {
  _call: GrantProxyRoleCall;

  constructor(call: GrantProxyRoleCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
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

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _nvmConfigAddress(): Address {
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

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeProxyRoleCall extends ethereum.Call {
  get inputs(): RevokeProxyRoleCall__Inputs {
    return new RevokeProxyRoleCall__Inputs(this);
  }

  get outputs(): RevokeProxyRoleCall__Outputs {
    return new RevokeProxyRoleCall__Outputs(this);
  }
}

export class RevokeProxyRoleCall__Inputs {
  _call: RevokeProxyRoleCall;

  constructor(call: RevokeProxyRoleCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeProxyRoleCall__Outputs {
  _call: RevokeProxyRoleCall;

  constructor(call: RevokeProxyRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetNvmConfigAddressCall extends ethereum.Call {
  get inputs(): SetNvmConfigAddressCall__Inputs {
    return new SetNvmConfigAddressCall__Inputs(this);
  }

  get outputs(): SetNvmConfigAddressCall__Outputs {
    return new SetNvmConfigAddressCall__Outputs(this);
  }
}

export class SetNvmConfigAddressCall__Inputs {
  _call: SetNvmConfigAddressCall;

  constructor(call: SetNvmConfigAddressCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNvmConfigAddressCall__Outputs {
  _call: SetNvmConfigAddressCall;

  constructor(call: SetNvmConfigAddressCall) {
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

export class UpdateConditionMappingProxyCall extends ethereum.Call {
  get inputs(): UpdateConditionMappingProxyCall__Inputs {
    return new UpdateConditionMappingProxyCall__Inputs(this);
  }

  get outputs(): UpdateConditionMappingProxyCall__Outputs {
    return new UpdateConditionMappingProxyCall__Outputs(this);
  }
}

export class UpdateConditionMappingProxyCall__Inputs {
  _call: UpdateConditionMappingProxyCall;

  constructor(call: UpdateConditionMappingProxyCall) {
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

export class UpdateConditionMappingProxyCall__Outputs {
  _call: UpdateConditionMappingProxyCall;

  constructor(call: UpdateConditionMappingProxyCall) {
    this._call = call;
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
