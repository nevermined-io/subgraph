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

export class RequestFrequencyExceeded extends ethereum.Event {
  get params(): RequestFrequencyExceeded__Params {
    return new RequestFrequencyExceeded__Params(this);
  }
}

export class RequestFrequencyExceeded__Params {
  _event: RequestFrequencyExceeded;

  constructor(event: RequestFrequencyExceeded) {
    this._event = event;
  }

  get requester(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minPeriod(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RequestLimitExceeded extends ethereum.Event {
  get params(): RequestLimitExceeded__Params {
    return new RequestLimitExceeded__Params(this);
  }
}

export class RequestLimitExceeded__Params {
  _event: RequestLimitExceeded;

  constructor(event: RequestLimitExceeded) {
    this._event = event;
  }

  get requester(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get maxAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Dispenser extends ethereum.SmartContract {
  static bind(address: Address): Dispenser {
    return new Dispenser("Dispenser", address);
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

  requestTokens(amount: BigInt): boolean {
    let result = super.call("requestTokens", "requestTokens(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_requestTokens(amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "requestTokens",
      "requestTokens(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _owner(): Address {
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

export class RequestTokensCall extends ethereum.Call {
  get inputs(): RequestTokensCall__Inputs {
    return new RequestTokensCall__Inputs(this);
  }

  get outputs(): RequestTokensCall__Outputs {
    return new RequestTokensCall__Outputs(this);
  }
}

export class RequestTokensCall__Inputs {
  _call: RequestTokensCall;

  constructor(call: RequestTokensCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RequestTokensCall__Outputs {
  _call: RequestTokensCall;

  constructor(call: RequestTokensCall) {
    this._call = call;
  }

  get tokensTransferred(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetMaxAmountCall extends ethereum.Call {
  get inputs(): SetMaxAmountCall__Inputs {
    return new SetMaxAmountCall__Inputs(this);
  }

  get outputs(): SetMaxAmountCall__Outputs {
    return new SetMaxAmountCall__Outputs(this);
  }
}

export class SetMaxAmountCall__Inputs {
  _call: SetMaxAmountCall;

  constructor(call: SetMaxAmountCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxAmountCall__Outputs {
  _call: SetMaxAmountCall;

  constructor(call: SetMaxAmountCall) {
    this._call = call;
  }
}

export class SetMaxMintAmountCall extends ethereum.Call {
  get inputs(): SetMaxMintAmountCall__Inputs {
    return new SetMaxMintAmountCall__Inputs(this);
  }

  get outputs(): SetMaxMintAmountCall__Outputs {
    return new SetMaxMintAmountCall__Outputs(this);
  }
}

export class SetMaxMintAmountCall__Inputs {
  _call: SetMaxMintAmountCall;

  constructor(call: SetMaxMintAmountCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxMintAmountCall__Outputs {
  _call: SetMaxMintAmountCall;

  constructor(call: SetMaxMintAmountCall) {
    this._call = call;
  }
}

export class SetMinPeriodCall extends ethereum.Call {
  get inputs(): SetMinPeriodCall__Inputs {
    return new SetMinPeriodCall__Inputs(this);
  }

  get outputs(): SetMinPeriodCall__Outputs {
    return new SetMinPeriodCall__Outputs(this);
  }
}

export class SetMinPeriodCall__Inputs {
  _call: SetMinPeriodCall;

  constructor(call: SetMinPeriodCall) {
    this._call = call;
  }

  get period(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinPeriodCall__Outputs {
  _call: SetMinPeriodCall;

  constructor(call: SetMinPeriodCall) {
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
