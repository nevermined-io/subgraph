import {
    Fulfilled as TransferNFTConditionFulfilledEvent,
    OwnershipTransferred as TransferNFTConditionOwnershipTransferredEvent,
    RoleAdminChanged as TransferNFTConditionRoleAdminChangedEvent,
    RoleGranted as TransferNFTConditionRoleGrantedEvent,
    RoleRevoked as TransferNFTConditionRoleRevokedEvent,
} from '../generated/TransferNFTCondition/TransferNFTCondition'
import {
    TransferNFTConditionFulfilled,
    TransferNFTConditionOwnershipTransferred,
    TransferNFTConditionRoleAdminChanged,
    TransferNFTConditionRoleGranted,
    TransferNFTConditionRoleRevoked,
} from '../generated/schema'

export function handleTransferNFTConditionFulfilled(
    event: TransferNFTConditionFulfilledEvent,
): void {
    const entity = new TransferNFTConditionFulfilled(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._agreementId = event.params._agreementId
    entity._did = event.params._did
    entity._receiver = event.params._receiver
    entity._amount = event.params._amount
    entity._conditionId = event.params._conditionId
    entity._contract = event.params._contract
    entity.save()
}

export function handleTransferNFTConditionOwnershipTransferred(
    event: TransferNFTConditionOwnershipTransferredEvent,
): void {
    const entity = new TransferNFTConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}

export function handleTransferNFTConditionRoleAdminChanged(
    event: TransferNFTConditionRoleAdminChangedEvent,
): void {
    const entity = new TransferNFTConditionRoleAdminChanged(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.previousAdminRole = event.params.previousAdminRole
    entity.newAdminRole = event.params.newAdminRole
    entity.save()
}

export function handleTransferNFTConditionRoleGranted(
    event: TransferNFTConditionRoleGrantedEvent,
): void {
    const entity = new TransferNFTConditionRoleGranted(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.account = event.params.account
    entity.sender = event.params.sender
    entity.save()
}

export function handleTransferNFTConditionRoleRevoked(
    event: TransferNFTConditionRoleRevokedEvent,
): void {
    const entity = new TransferNFTConditionRoleRevoked(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.account = event.params.account
    entity.sender = event.params.sender
    entity.save()
}