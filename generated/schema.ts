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

export class DIDRegistryActedOnBehalf extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_entityDid", Value.fromBytes(Bytes.empty()));
    this.set("_delegateAgentId", Value.fromBytes(Bytes.empty()));
    this.set("_responsibleAgentId", Value.fromBytes(Bytes.empty()));
    this.set("_activityId", Value.fromBytes(Bytes.empty()));
    this.set("provId", Value.fromBytes(Bytes.empty()));
    this.set("_attributes", Value.fromString(""));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryActedOnBehalf entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryActedOnBehalf entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryActedOnBehalf", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryActedOnBehalf | null {
    return changetype<DIDRegistryActedOnBehalf | null>(
      store.get("DIDRegistryActedOnBehalf", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _entityDid(): Bytes {
    let value = this.get("_entityDid");
    return value!.toBytes();
  }

  set _entityDid(value: Bytes) {
    this.set("_entityDid", Value.fromBytes(value));
  }

  get _delegateAgentId(): Bytes {
    let value = this.get("_delegateAgentId");
    return value!.toBytes();
  }

  set _delegateAgentId(value: Bytes) {
    this.set("_delegateAgentId", Value.fromBytes(value));
  }

  get _responsibleAgentId(): Bytes {
    let value = this.get("_responsibleAgentId");
    return value!.toBytes();
  }

  set _responsibleAgentId(value: Bytes) {
    this.set("_responsibleAgentId", Value.fromBytes(value));
  }

  get _activityId(): Bytes {
    let value = this.get("_activityId");
    return value!.toBytes();
  }

  set _activityId(value: Bytes) {
    this.set("_activityId", Value.fromBytes(value));
  }

  get provId(): Bytes {
    let value = this.get("provId");
    return value!.toBytes();
  }

  set provId(value: Bytes) {
    this.set("provId", Value.fromBytes(value));
  }

  get _attributes(): string {
    let value = this.get("_attributes");
    return value!.toString();
  }

  set _attributes(value: string) {
    this.set("_attributes", Value.fromString(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}

export class DIDRegistryDIDAttributeRegistered extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_owner", Value.fromBytes(Bytes.empty()));
    this.set("_checksum", Value.fromBytes(Bytes.empty()));
    this.set("_value", Value.fromString(""));
    this.set("_lastUpdatedBy", Value.fromBytes(Bytes.empty()));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDAttributeRegistered entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDAttributeRegistered entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDAttributeRegistered", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDAttributeRegistered | null {
    return changetype<DIDRegistryDIDAttributeRegistered | null>(
      store.get("DIDRegistryDIDAttributeRegistered", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _owner(): Bytes {
    let value = this.get("_owner");
    return value!.toBytes();
  }

  set _owner(value: Bytes) {
    this.set("_owner", Value.fromBytes(value));
  }

  get _checksum(): Bytes {
    let value = this.get("_checksum");
    return value!.toBytes();
  }

  set _checksum(value: Bytes) {
    this.set("_checksum", Value.fromBytes(value));
  }

  get _value(): string {
    let value = this.get("_value");
    return value!.toString();
  }

  set _value(value: string) {
    this.set("_value", Value.fromString(value));
  }

  get _lastUpdatedBy(): Bytes {
    let value = this.get("_lastUpdatedBy");
    return value!.toBytes();
  }

  set _lastUpdatedBy(value: Bytes) {
    this.set("_lastUpdatedBy", Value.fromBytes(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}

export class DIDRegistryDIDOwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_previousOwner", Value.fromBytes(Bytes.empty()));
    this.set("_newOwner", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDOwnershipTransferred entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDOwnershipTransferred entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDOwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDOwnershipTransferred | null {
    return changetype<DIDRegistryDIDOwnershipTransferred | null>(
      store.get("DIDRegistryDIDOwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _previousOwner(): Bytes {
    let value = this.get("_previousOwner");
    return value!.toBytes();
  }

  set _previousOwner(value: Bytes) {
    this.set("_previousOwner", Value.fromBytes(value));
  }

  get _newOwner(): Bytes {
    let value = this.get("_newOwner");
    return value!.toBytes();
  }

  set _newOwner(value: Bytes) {
    this.set("_newOwner", Value.fromBytes(value));
  }
}

export class DIDRegistryDIDPermissionGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_owner", Value.fromBytes(Bytes.empty()));
    this.set("_grantee", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDPermissionGranted entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDPermissionGranted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDPermissionGranted", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDPermissionGranted | null {
    return changetype<DIDRegistryDIDPermissionGranted | null>(
      store.get("DIDRegistryDIDPermissionGranted", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _owner(): Bytes {
    let value = this.get("_owner");
    return value!.toBytes();
  }

  set _owner(value: Bytes) {
    this.set("_owner", Value.fromBytes(value));
  }

  get _grantee(): Bytes {
    let value = this.get("_grantee");
    return value!.toBytes();
  }

  set _grantee(value: Bytes) {
    this.set("_grantee", Value.fromBytes(value));
  }
}

export class DIDRegistryDIDPermissionRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_owner", Value.fromBytes(Bytes.empty()));
    this.set("_grantee", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDPermissionRevoked entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDPermissionRevoked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDPermissionRevoked", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDPermissionRevoked | null {
    return changetype<DIDRegistryDIDPermissionRevoked | null>(
      store.get("DIDRegistryDIDPermissionRevoked", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _owner(): Bytes {
    let value = this.get("_owner");
    return value!.toBytes();
  }

  set _owner(value: Bytes) {
    this.set("_owner", Value.fromBytes(value));
  }

  get _grantee(): Bytes {
    let value = this.get("_grantee");
    return value!.toBytes();
  }

  set _grantee(value: Bytes) {
    this.set("_grantee", Value.fromBytes(value));
  }
}

export class DIDRegistryDIDProvenanceDelegateAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_delegate", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDProvenanceDelegateAdded entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDProvenanceDelegateAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDProvenanceDelegateAdded", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDProvenanceDelegateAdded | null {
    return changetype<DIDRegistryDIDProvenanceDelegateAdded | null>(
      store.get("DIDRegistryDIDProvenanceDelegateAdded", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _delegate(): Bytes {
    let value = this.get("_delegate");
    return value!.toBytes();
  }

  set _delegate(value: Bytes) {
    this.set("_delegate", Value.fromBytes(value));
  }
}

export class DIDRegistryDIDProvenanceDelegateRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_delegate", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDProvenanceDelegateRemoved entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDProvenanceDelegateRemoved entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDProvenanceDelegateRemoved", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDProvenanceDelegateRemoved | null {
    return changetype<DIDRegistryDIDProvenanceDelegateRemoved | null>(
      store.get("DIDRegistryDIDProvenanceDelegateRemoved", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _delegate(): Bytes {
    let value = this.get("_delegate");
    return value!.toBytes();
  }

  set _delegate(value: Bytes) {
    this.set("_delegate", Value.fromBytes(value));
  }

  get state(): boolean {
    let value = this.get("state");
    return value!.toBoolean();
  }

  set state(value: boolean) {
    this.set("state", Value.fromBoolean(value));
  }
}

export class DIDRegistryDIDProviderAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_provider", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDProviderAdded entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDProviderAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDProviderAdded", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDProviderAdded | null {
    return changetype<DIDRegistryDIDProviderAdded | null>(
      store.get("DIDRegistryDIDProviderAdded", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _provider(): Bytes {
    let value = this.get("_provider");
    return value!.toBytes();
  }

  set _provider(value: Bytes) {
    this.set("_provider", Value.fromBytes(value));
  }
}

export class DIDRegistryDIDProviderRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_provider", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryDIDProviderRemoved entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryDIDProviderRemoved entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryDIDProviderRemoved", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryDIDProviderRemoved | null {
    return changetype<DIDRegistryDIDProviderRemoved | null>(
      store.get("DIDRegistryDIDProviderRemoved", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _provider(): Bytes {
    let value = this.get("_provider");
    return value!.toBytes();
  }

  set _provider(value: Bytes) {
    this.set("_provider", Value.fromBytes(value));
  }

  get state(): boolean {
    let value = this.get("state");
    return value!.toBoolean();
  }

  set state(value: boolean) {
    this.set("state", Value.fromBoolean(value));
  }
}

export class DIDRegistryOwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("previousOwner", Value.fromBytes(Bytes.empty()));
    this.set("newOwner", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryOwnershipTransferred entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryOwnershipTransferred entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryOwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryOwnershipTransferred | null {
    return changetype<DIDRegistryOwnershipTransferred | null>(
      store.get("DIDRegistryOwnershipTransferred", id)
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

export class DIDRegistryProvenanceAttributeRegistered extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("provId", Value.fromBytes(Bytes.empty()));
    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_agentId", Value.fromBytes(Bytes.empty()));
    this.set("_activityId", Value.fromBytes(Bytes.empty()));
    this.set("_relatedDid", Value.fromBytes(Bytes.empty()));
    this.set("_agentInvolvedId", Value.fromBytes(Bytes.empty()));
    this.set("_attributes", Value.fromString(""));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryProvenanceAttributeRegistered entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryProvenanceAttributeRegistered entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set(
        "DIDRegistryProvenanceAttributeRegistered",
        id.toString(),
        this
      );
    }
  }

  static load(id: string): DIDRegistryProvenanceAttributeRegistered | null {
    return changetype<DIDRegistryProvenanceAttributeRegistered | null>(
      store.get("DIDRegistryProvenanceAttributeRegistered", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get provId(): Bytes {
    let value = this.get("provId");
    return value!.toBytes();
  }

  set provId(value: Bytes) {
    this.set("provId", Value.fromBytes(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _agentId(): Bytes {
    let value = this.get("_agentId");
    return value!.toBytes();
  }

  set _agentId(value: Bytes) {
    this.set("_agentId", Value.fromBytes(value));
  }

  get _activityId(): Bytes {
    let value = this.get("_activityId");
    return value!.toBytes();
  }

  set _activityId(value: Bytes) {
    this.set("_activityId", Value.fromBytes(value));
  }

  get _relatedDid(): Bytes {
    let value = this.get("_relatedDid");
    return value!.toBytes();
  }

  set _relatedDid(value: Bytes) {
    this.set("_relatedDid", Value.fromBytes(value));
  }

  get _agentInvolvedId(): Bytes {
    let value = this.get("_agentInvolvedId");
    return value!.toBytes();
  }

  set _agentInvolvedId(value: Bytes) {
    this.set("_agentInvolvedId", Value.fromBytes(value));
  }

  get _method(): i32 {
    let value = this.get("_method");
    return value!.toI32();
  }

  set _method(value: i32) {
    this.set("_method", Value.fromI32(value));
  }

  get _attributes(): string {
    let value = this.get("_attributes");
    return value!.toString();
  }

  set _attributes(value: string) {
    this.set("_attributes", Value.fromString(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}

export class DIDRegistryUsed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_agentId", Value.fromBytes(Bytes.empty()));
    this.set("_activityId", Value.fromBytes(Bytes.empty()));
    this.set("provId", Value.fromBytes(Bytes.empty()));
    this.set("_attributes", Value.fromString(""));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DIDRegistryUsed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryUsed entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryUsed", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryUsed | null {
    return changetype<DIDRegistryUsed | null>(store.get("DIDRegistryUsed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _agentId(): Bytes {
    let value = this.get("_agentId");
    return value!.toBytes();
  }

  set _agentId(value: Bytes) {
    this.set("_agentId", Value.fromBytes(value));
  }

  get _activityId(): Bytes {
    let value = this.get("_activityId");
    return value!.toBytes();
  }

  set _activityId(value: Bytes) {
    this.set("_activityId", Value.fromBytes(value));
  }

  get provId(): Bytes {
    let value = this.get("provId");
    return value!.toBytes();
  }

  set provId(value: Bytes) {
    this.set("provId", Value.fromBytes(value));
  }

  get _attributes(): string {
    let value = this.get("_attributes");
    return value!.toString();
  }

  set _attributes(value: string) {
    this.set("_attributes", Value.fromString(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}

export class DIDRegistryWasAssociatedWith extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_entityDid", Value.fromBytes(Bytes.empty()));
    this.set("_agentId", Value.fromBytes(Bytes.empty()));
    this.set("_activityId", Value.fromBytes(Bytes.empty()));
    this.set("provId", Value.fromBytes(Bytes.empty()));
    this.set("_attributes", Value.fromString(""));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryWasAssociatedWith entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryWasAssociatedWith entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryWasAssociatedWith", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryWasAssociatedWith | null {
    return changetype<DIDRegistryWasAssociatedWith | null>(
      store.get("DIDRegistryWasAssociatedWith", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _entityDid(): Bytes {
    let value = this.get("_entityDid");
    return value!.toBytes();
  }

  set _entityDid(value: Bytes) {
    this.set("_entityDid", Value.fromBytes(value));
  }

  get _agentId(): Bytes {
    let value = this.get("_agentId");
    return value!.toBytes();
  }

  set _agentId(value: Bytes) {
    this.set("_agentId", Value.fromBytes(value));
  }

  get _activityId(): Bytes {
    let value = this.get("_activityId");
    return value!.toBytes();
  }

  set _activityId(value: Bytes) {
    this.set("_activityId", Value.fromBytes(value));
  }

  get provId(): Bytes {
    let value = this.get("provId");
    return value!.toBytes();
  }

  set provId(value: Bytes) {
    this.set("provId", Value.fromBytes(value));
  }

  get _attributes(): string {
    let value = this.get("_attributes");
    return value!.toString();
  }

  set _attributes(value: string) {
    this.set("_attributes", Value.fromString(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}

export class DIDRegistryWasDerivedFrom extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_newEntityDid", Value.fromBytes(Bytes.empty()));
    this.set("_usedEntityDid", Value.fromBytes(Bytes.empty()));
    this.set("_agentId", Value.fromBytes(Bytes.empty()));
    this.set("_activityId", Value.fromBytes(Bytes.empty()));
    this.set("provId", Value.fromBytes(Bytes.empty()));
    this.set("_attributes", Value.fromString(""));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryWasDerivedFrom entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryWasDerivedFrom entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryWasDerivedFrom", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryWasDerivedFrom | null {
    return changetype<DIDRegistryWasDerivedFrom | null>(
      store.get("DIDRegistryWasDerivedFrom", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _newEntityDid(): Bytes {
    let value = this.get("_newEntityDid");
    return value!.toBytes();
  }

  set _newEntityDid(value: Bytes) {
    this.set("_newEntityDid", Value.fromBytes(value));
  }

  get _usedEntityDid(): Bytes {
    let value = this.get("_usedEntityDid");
    return value!.toBytes();
  }

  set _usedEntityDid(value: Bytes) {
    this.set("_usedEntityDid", Value.fromBytes(value));
  }

  get _agentId(): Bytes {
    let value = this.get("_agentId");
    return value!.toBytes();
  }

  set _agentId(value: Bytes) {
    this.set("_agentId", Value.fromBytes(value));
  }

  get _activityId(): Bytes {
    let value = this.get("_activityId");
    return value!.toBytes();
  }

  set _activityId(value: Bytes) {
    this.set("_activityId", Value.fromBytes(value));
  }

  get provId(): Bytes {
    let value = this.get("provId");
    return value!.toBytes();
  }

  set provId(value: Bytes) {
    this.set("provId", Value.fromBytes(value));
  }

  get _attributes(): string {
    let value = this.get("_attributes");
    return value!.toString();
  }

  set _attributes(value: string) {
    this.set("_attributes", Value.fromString(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}

export class DIDRegistryWasGeneratedBy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_agentId", Value.fromBytes(Bytes.empty()));
    this.set("_activityId", Value.fromBytes(Bytes.empty()));
    this.set("provId", Value.fromBytes(Bytes.empty()));
    this.set("_attributes", Value.fromString(""));
    this.set("_blockNumberUpdated", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRegistryWasGeneratedBy entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRegistryWasGeneratedBy entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRegistryWasGeneratedBy", id.toString(), this);
    }
  }

  static load(id: string): DIDRegistryWasGeneratedBy | null {
    return changetype<DIDRegistryWasGeneratedBy | null>(
      store.get("DIDRegistryWasGeneratedBy", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _did(): Bytes {
    let value = this.get("_did");
    return value!.toBytes();
  }

  set _did(value: Bytes) {
    this.set("_did", Value.fromBytes(value));
  }

  get _agentId(): Bytes {
    let value = this.get("_agentId");
    return value!.toBytes();
  }

  set _agentId(value: Bytes) {
    this.set("_agentId", Value.fromBytes(value));
  }

  get _activityId(): Bytes {
    let value = this.get("_activityId");
    return value!.toBytes();
  }

  set _activityId(value: Bytes) {
    this.set("_activityId", Value.fromBytes(value));
  }

  get provId(): Bytes {
    let value = this.get("provId");
    return value!.toBytes();
  }

  set provId(value: Bytes) {
    this.set("provId", Value.fromBytes(value));
  }

  get _attributes(): string {
    let value = this.get("_attributes");
    return value!.toString();
  }

  set _attributes(value: string) {
    this.set("_attributes", Value.fromString(value));
  }

  get _blockNumberUpdated(): BigInt {
    let value = this.get("_blockNumberUpdated");
    return value!.toBigInt();
  }

  set _blockNumberUpdated(value: BigInt) {
    this.set("_blockNumberUpdated", Value.fromBigInt(value));
  }
}
