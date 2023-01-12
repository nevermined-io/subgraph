import {
  ApprovalForAll as ApprovalForAllEvent,
  Initialized as InitializedEvent,
  NFTCloned as NFTClonedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProxyApproval as ProxyApprovalEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from "../generated/NFT1155Upgradeable/NFT1155Upgradeable";
import {
  ApprovalForAll,
  Initialized,
  NFTCloned,
  OwnershipTransferred,
  ProxyApproval,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TransferBatch,
  TransferSingle,
  URI,
} from "../generated/schema";

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.account = event.params.account;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;
  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.version = event.params.version;
  entity.save();
}

export function handleNFTCloned(event: NFTClonedEvent): void {
  let entity = new NFTCloned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._newAddress = event.params._newAddress;
  entity._fromAddress = event.params._fromAddress;
  entity._ercType = event.params._ercType;
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleProxyApproval(event: ProxyApprovalEvent): void {
  let entity = new ProxyApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;
  entity.save();
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.role = event.params.role;
  entity.previousAdminRole = event.params.previousAdminRole;
  entity.newAdminRole = event.params.newAdminRole;
  entity.save();
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.role = event.params.role;
  entity.account = event.params.account;
  entity.sender = event.params.sender;
  entity.save();
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.role = event.params.role;
  entity.account = event.params.account;
  entity.sender = event.params.sender;
  entity.save();
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.operator = event.params.operator;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.ids = event.params.ids;
  entity.values = event.params.values;
  entity.save();
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.operator = event.params.operator;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity._id = event.params.id;
  entity.value = event.params.value;
  entity.save();
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.value = event.params.value;
  entity._id = event.params.id;
  entity.save();
}
