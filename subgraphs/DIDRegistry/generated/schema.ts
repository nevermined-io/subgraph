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

export class ActedOnBehalf extends Entity {
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
    assert(id != null, "Cannot save ActedOnBehalf entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ActedOnBehalf entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ActedOnBehalf", id.toString(), this);
    }
  }

  static load(id: string): ActedOnBehalf | null {
    return changetype<ActedOnBehalf | null>(store.get("ActedOnBehalf", id));
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

export class DIDAttributeRegistered extends Entity {
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
      "Cannot save DIDAttributeRegistered entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDAttributeRegistered entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDAttributeRegistered", id.toString(), this);
    }
  }

  static load(id: string): DIDAttributeRegistered | null {
    return changetype<DIDAttributeRegistered | null>(
      store.get("DIDAttributeRegistered", id)
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

export class DIDOwnershipTransferred extends Entity {
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
      "Cannot save DIDOwnershipTransferred entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDOwnershipTransferred entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDOwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): DIDOwnershipTransferred | null {
    return changetype<DIDOwnershipTransferred | null>(
      store.get("DIDOwnershipTransferred", id)
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

export class DIDPermissionGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_owner", Value.fromBytes(Bytes.empty()));
    this.set("_grantee", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DIDPermissionGranted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDPermissionGranted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDPermissionGranted", id.toString(), this);
    }
  }

  static load(id: string): DIDPermissionGranted | null {
    return changetype<DIDPermissionGranted | null>(
      store.get("DIDPermissionGranted", id)
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

export class DIDPermissionRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_owner", Value.fromBytes(Bytes.empty()));
    this.set("_grantee", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DIDPermissionRevoked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDPermissionRevoked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDPermissionRevoked", id.toString(), this);
    }
  }

  static load(id: string): DIDPermissionRevoked | null {
    return changetype<DIDPermissionRevoked | null>(
      store.get("DIDPermissionRevoked", id)
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

export class DIDProvenanceDelegateAdded extends Entity {
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
      "Cannot save DIDProvenanceDelegateAdded entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDProvenanceDelegateAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDProvenanceDelegateAdded", id.toString(), this);
    }
  }

  static load(id: string): DIDProvenanceDelegateAdded | null {
    return changetype<DIDProvenanceDelegateAdded | null>(
      store.get("DIDProvenanceDelegateAdded", id)
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

export class DIDProvenanceDelegateRemoved extends Entity {
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
      "Cannot save DIDProvenanceDelegateRemoved entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDProvenanceDelegateRemoved entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDProvenanceDelegateRemoved", id.toString(), this);
    }
  }

  static load(id: string): DIDProvenanceDelegateRemoved | null {
    return changetype<DIDProvenanceDelegateRemoved | null>(
      store.get("DIDProvenanceDelegateRemoved", id)
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

export class DIDProviderAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_provider", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DIDProviderAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDProviderAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDProviderAdded", id.toString(), this);
    }
  }

  static load(id: string): DIDProviderAdded | null {
    return changetype<DIDProviderAdded | null>(
      store.get("DIDProviderAdded", id)
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

export class DIDProviderRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_did", Value.fromBytes(Bytes.empty()));
    this.set("_provider", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DIDProviderRemoved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDProviderRemoved entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDProviderRemoved", id.toString(), this);
    }
  }

  static load(id: string): DIDProviderRemoved | null {
    return changetype<DIDProviderRemoved | null>(
      store.get("DIDProviderRemoved", id)
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

export class DIDRoyaltiesAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("did", Value.fromBytes(Bytes.empty()));
    this.set("addr", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DIDRoyaltiesAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRoyaltiesAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRoyaltiesAdded", id.toString(), this);
    }
  }

  static load(id: string): DIDRoyaltiesAdded | null {
    return changetype<DIDRoyaltiesAdded | null>(
      store.get("DIDRoyaltiesAdded", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get did(): Bytes {
    let value = this.get("did");
    return value!.toBytes();
  }

  set did(value: Bytes) {
    this.set("did", Value.fromBytes(value));
  }

  get addr(): Bytes {
    let value = this.get("addr");
    return value!.toBytes();
  }

  set addr(value: Bytes) {
    this.set("addr", Value.fromBytes(value));
  }
}

export class DIDRoyaltyRecipientChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("did", Value.fromBytes(Bytes.empty()));
    this.set("addr", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DIDRoyaltyRecipientChanged entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DIDRoyaltyRecipientChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DIDRoyaltyRecipientChanged", id.toString(), this);
    }
  }

  static load(id: string): DIDRoyaltyRecipientChanged | null {
    return changetype<DIDRoyaltyRecipientChanged | null>(
      store.get("DIDRoyaltyRecipientChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get did(): Bytes {
    let value = this.get("did");
    return value!.toBytes();
  }

  set did(value: Bytes) {
    this.set("did", Value.fromBytes(value));
  }

  get addr(): Bytes {
    let value = this.get("addr");
    return value!.toBytes();
  }

  set addr(value: Bytes) {
    this.set("addr", Value.fromBytes(value));
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

export class ProvenanceAttributeRegistered extends Entity {
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
      "Cannot save ProvenanceAttributeRegistered entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProvenanceAttributeRegistered entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProvenanceAttributeRegistered", id.toString(), this);
    }
  }

  static load(id: string): ProvenanceAttributeRegistered | null {
    return changetype<ProvenanceAttributeRegistered | null>(
      store.get("ProvenanceAttributeRegistered", id)
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

export class Used extends Entity {
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
    assert(id != null, "Cannot save Used entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Used entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Used", id.toString(), this);
    }
  }

  static load(id: string): Used | null {
    return changetype<Used | null>(store.get("Used", id));
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

export class WasAssociatedWith extends Entity {
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
    assert(id != null, "Cannot save WasAssociatedWith entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save WasAssociatedWith entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("WasAssociatedWith", id.toString(), this);
    }
  }

  static load(id: string): WasAssociatedWith | null {
    return changetype<WasAssociatedWith | null>(
      store.get("WasAssociatedWith", id)
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

export class WasDerivedFrom extends Entity {
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
    assert(id != null, "Cannot save WasDerivedFrom entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save WasDerivedFrom entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("WasDerivedFrom", id.toString(), this);
    }
  }

  static load(id: string): WasDerivedFrom | null {
    return changetype<WasDerivedFrom | null>(store.get("WasDerivedFrom", id));
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

export class WasGeneratedBy extends Entity {
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
    assert(id != null, "Cannot save WasGeneratedBy entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save WasGeneratedBy entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("WasGeneratedBy", id.toString(), this);
    }
  }

  static load(id: string): WasGeneratedBy | null {
    return changetype<WasGeneratedBy | null>(store.get("WasGeneratedBy", id));
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
