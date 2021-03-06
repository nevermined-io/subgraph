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

export class TemplateStoreManager__getTemplateResult {
  value0: i32;
  value1: Address;
  value2: Address;
  value3: BigInt;

  constructor(value0: i32, value1: Address, value2: Address, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class TemplateStoreManager extends ethereum.SmartContract {
  static bind(address: Address): TemplateStoreManager {
    return new TemplateStoreManager("TemplateStoreManager", address);
  }

  getTemplate(_id: Address): TemplateStoreManager__getTemplateResult {
    let result = super.call(
      "getTemplate",
      "getTemplate(address):(uint8,address,address,uint256)",
      [ethereum.Value.fromAddress(_id)]
    );

    return new TemplateStoreManager__getTemplateResult(
      result[0].toI32(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt()
    );
  }

  try_getTemplate(
    _id: Address
  ): ethereum.CallResult<TemplateStoreManager__getTemplateResult> {
    let result = super.tryCall(
      "getTemplate",
      "getTemplate(address):(uint8,address,address,uint256)",
      [ethereum.Value.fromAddress(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TemplateStoreManager__getTemplateResult(
        value[0].toI32(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt()
      )
    );
  }

  getTemplateListSize(): BigInt {
    let result = super.call(
      "getTemplateListSize",
      "getTemplateListSize():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTemplateListSize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTemplateListSize",
      "getTemplateListSize():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isTemplateApproved(_id: Address): boolean {
    let result = super.call(
      "isTemplateApproved",
      "isTemplateApproved(address):(bool)",
      [ethereum.Value.fromAddress(_id)]
    );

    return result[0].toBoolean();
  }

  try_isTemplateApproved(_id: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTemplateApproved",
      "isTemplateApproved(address):(bool)",
      [ethereum.Value.fromAddress(_id)]
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

  proposeTemplate(_id: Address): BigInt {
    let result = super.call(
      "proposeTemplate",
      "proposeTemplate(address):(uint256)",
      [ethereum.Value.fromAddress(_id)]
    );

    return result[0].toBigInt();
  }

  try_proposeTemplate(_id: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposeTemplate",
      "proposeTemplate(address):(uint256)",
      [ethereum.Value.fromAddress(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveTemplateCall extends ethereum.Call {
  get inputs(): ApproveTemplateCall__Inputs {
    return new ApproveTemplateCall__Inputs(this);
  }

  get outputs(): ApproveTemplateCall__Outputs {
    return new ApproveTemplateCall__Outputs(this);
  }
}

export class ApproveTemplateCall__Inputs {
  _call: ApproveTemplateCall;

  constructor(call: ApproveTemplateCall) {
    this._call = call;
  }

  get _id(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ApproveTemplateCall__Outputs {
  _call: ApproveTemplateCall;

  constructor(call: ApproveTemplateCall) {
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

export class ProposeTemplateCall extends ethereum.Call {
  get inputs(): ProposeTemplateCall__Inputs {
    return new ProposeTemplateCall__Inputs(this);
  }

  get outputs(): ProposeTemplateCall__Outputs {
    return new ProposeTemplateCall__Outputs(this);
  }
}

export class ProposeTemplateCall__Inputs {
  _call: ProposeTemplateCall;

  constructor(call: ProposeTemplateCall) {
    this._call = call;
  }

  get _id(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProposeTemplateCall__Outputs {
  _call: ProposeTemplateCall;

  constructor(call: ProposeTemplateCall) {
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

export class RevokeTemplateCall extends ethereum.Call {
  get inputs(): RevokeTemplateCall__Inputs {
    return new RevokeTemplateCall__Inputs(this);
  }

  get outputs(): RevokeTemplateCall__Outputs {
    return new RevokeTemplateCall__Outputs(this);
  }
}

export class RevokeTemplateCall__Inputs {
  _call: RevokeTemplateCall;

  constructor(call: RevokeTemplateCall) {
    this._call = call;
  }

  get _id(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeTemplateCall__Outputs {
  _call: RevokeTemplateCall;

  constructor(call: RevokeTemplateCall) {
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
