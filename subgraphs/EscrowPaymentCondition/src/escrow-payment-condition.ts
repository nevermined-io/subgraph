import { ByteArray, Bytes, crypto } from "@graphprotocol/graph-ts";
import {
  Fulfilled as FulfilledEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Received as ReceivedEvent,
} from "../generated/EscrowPaymentCondition/EscrowPaymentCondition";
import {
  Fulfilled,
  FulfilledCounter,
  Initialized,
  OwnershipTransferred,
  Received,
} from "../generated/schema";

export function handleFulfilled(event: FulfilledEvent): void {
  let entity = new Fulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._agreementId = event.params._agreementId;
  entity._tokenAddress = event.params._tokenAddress;
  entity._receivers = changetype<Bytes[]>(event.params._receivers);
  entity._conditionId = event.params._conditionId;
  entity._amounts = event.params._amounts;

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

export function handleReceived(event: ReceivedEvent): void {
  let entity = new Received(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._from = event.params._from;
  entity._value = event.params._value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
