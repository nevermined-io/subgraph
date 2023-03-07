// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("operator", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ApprovalForAll entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ApprovalForAll entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ApprovalForAll", id.toString(), this);
    }
  }

  static load(id: string): ApprovalForAll | null {
    return changetype<ApprovalForAll | null>(store.get("ApprovalForAll", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class Initialized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Initialized entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Initialized entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Initialized", id.toString(), this);
    }
  }

  static load(id: string): Initialized | null {
    return changetype<Initialized | null>(store.get("Initialized", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get version(): i32 {
    let value = this.get("version");
    return value!.toI32();
  }

  set version(value: i32) {
    this.set("version", Value.fromI32(value));
  }
}

export class NFTCloned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_newAddress", Value.fromBytes(Bytes.empty()));
    this.set("_fromAddress", Value.fromBytes(Bytes.empty()));
    this.set("_ercType", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTCloned entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTCloned entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTCloned", id.toString(), this);
    }
  }

  static load(id: string): NFTCloned | null {
    return changetype<NFTCloned | null>(store.get("NFTCloned", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _newAddress(): Bytes {
    let value = this.get("_newAddress");
    return value!.toBytes();
  }

  set _newAddress(value: Bytes) {
    this.set("_newAddress", Value.fromBytes(value));
  }

  get _fromAddress(): Bytes {
    let value = this.get("_fromAddress");
    return value!.toBytes();
  }

  set _fromAddress(value: Bytes) {
    this.set("_fromAddress", Value.fromBytes(value));
  }

  get _ercType(): BigInt {
    let value = this.get("_ercType");
    return value!.toBigInt();
  }

  set _ercType(value: BigInt) {
    this.set("_ercType", Value.fromBigInt(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("previousOwner", Value.fromBytes(Bytes.empty()));
    this.set("newOwner", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OwnershipTransferred entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class ProxyApproval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("operator", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProxyApproval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProxyApproval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProxyApproval", id.toString(), this);
    }
  }

  static load(id: string): ProxyApproval | null {
    return changetype<ProxyApproval | null>(store.get("ProxyApproval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class RoleAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("role", Value.fromBytes(Bytes.empty()));
    this.set("previousAdminRole", Value.fromBytes(Bytes.empty()));
    this.set("newAdminRole", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleAdminChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): RoleAdminChanged | null {
    return changetype<RoleAdminChanged | null>(
      store.get("RoleAdminChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get previousAdminRole(): Bytes {
    let value = this.get("previousAdminRole");
    return value!.toBytes();
  }

  set previousAdminRole(value: Bytes) {
    this.set("previousAdminRole", Value.fromBytes(value));
  }

  get newAdminRole(): Bytes {
    let value = this.get("newAdminRole");
    return value!.toBytes();
  }

  set newAdminRole(value: Bytes) {
    this.set("newAdminRole", Value.fromBytes(value));
  }
}

export class RoleGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("role", Value.fromBytes(Bytes.empty()));
    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleGranted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleGranted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleGranted", id.toString(), this);
    }
  }

  static load(id: string): RoleGranted | null {
    return changetype<RoleGranted | null>(store.get("RoleGranted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class RoleRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("role", Value.fromBytes(Bytes.empty()));
    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleRevoked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleRevoked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleRevoked", id.toString(), this);
    }
  }

  static load(id: string): RoleRevoked | null {
    return changetype<RoleRevoked | null>(store.get("RoleRevoked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class TransferBatch extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("operator", Value.fromBytes(Bytes.empty()));
    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("ids", Value.fromBigIntArray(new Array(0)));
    this.set("values", Value.fromBigIntArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferBatch entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransferBatch entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransferBatch", id.toString(), this);
    }
  }

  static load(id: string): TransferBatch | null {
    return changetype<TransferBatch | null>(store.get("TransferBatch", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get ids(): Array<BigInt> {
    let value = this.get("ids");
    return value!.toBigIntArray();
  }

  set ids(value: Array<BigInt>) {
    this.set("ids", Value.fromBigIntArray(value));
  }

  get values(): Array<BigInt> {
    let value = this.get("values");
    return value!.toBigIntArray();
  }

  set values(value: Array<BigInt>) {
    this.set("values", Value.fromBigIntArray(value));
  }
}

export class TransferSingle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("operator", Value.fromBytes(Bytes.empty()));
    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("_id", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferSingle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransferSingle entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransferSingle", id.toString(), this);
    }
  }

  static load(id: string): TransferSingle | null {
    return changetype<TransferSingle | null>(store.get("TransferSingle", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get _id(): Bytes {
    let value = this.get("_id");
    return value!.toBytes();
  }

  set _id(value: Bytes) {
    this.set("_id", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class URI extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("value", Value.fromString(""));
    this.set("_id", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save URI entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save URI entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("URI", id.toString(), this);
    }
  }

  static load(id: string): URI | null {
    return changetype<URI | null>(store.get("URI", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get _id(): Bytes {
    let value = this.get("_id");
    return value!.toBytes();
  }

  set _id(value: Bytes) {
    this.set("_id", Value.fromBytes(value));
  }
}