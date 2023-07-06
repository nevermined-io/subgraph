import { ByteArray, Bytes, crypto } from "@graphprotocol/graph-ts";
import {
  Fulfilled as FulfilledEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/AccessCondition/AccessCondition";
import {
  Fulfilled,
  FulfilledCounter,
  Initialized,
  OwnershipTransferred,
} from "../generated/schema";

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._agreementId = event.params._agreementId;
  entity._documentId = event.params._documentId;
  entity._grantee = event.params._grantee;
  entity._conditionId = event.params._conditionId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Custom counter
  let hashId = crypto.keccak256(ByteArray.fromUTF8("FulfilledCounter"));
  let counterId = Bytes.fromHexString(hashId.toHexString());

  let counter = FulfilledCounter.load(counterId);
  if (counter == null) {
    counter = new FulfilledCounter(counterId);
    counter.value = 0;
  }
  counter.value = counter.value + 1;
  counter.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.version = event.params.version;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
