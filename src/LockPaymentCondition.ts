import { ethereum } from '@graphprotocol/graph-ts'
import {
    Fulfilled as LockPaymentConditionFulfilledEvent,
    OwnershipTransferred as LockPaymentConditionOwnershipTransferredEvent,
    RoleAdminChanged as LockPaymentConditionRoleAdminChangedEvent,
    RoleGranted as LockPaymentConditionRoleGrantedEvent,
    RoleRevoked as LockPaymentConditionRoleRevokedEvent,
} from '../generated/LockPaymentCondition/LockPaymentCondition'
import {
    LockPaymentConditionFulfilled,
    LockPaymentConditionOwnershipTransferred,
    LockPaymentConditionRoleAdminChanged,
    LockPaymentConditionRoleGranted,
    LockPaymentConditionRoleRevoked,
} from '../generated/schema'

export function handleLockPaymentConditionFulfilled(
    event: LockPaymentConditionFulfilledEvent,
): void {
    const entity = new LockPaymentConditionFulfilled(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._agreementId = event.params._agreementId
    entity._did = event.params._did
    entity._conditionId = event.params._conditionId
    entity._rewardAddress = event.params._rewardAddress
    entity._tokenAddress = event.params._tokenAddress
    entity._receivers = ethereum.Value.fromAddressArray(event.params._receivers).toBytesArray()
    entity._amounts = event.params._amounts
    entity.save()
}

export function handleLockPaymentConditionOwnershipTransferred(
    event: LockPaymentConditionOwnershipTransferredEvent,
): void {
    const entity = new LockPaymentConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}

export function handleLockPaymentConditionRoleAdminChanged(
    event: LockPaymentConditionRoleAdminChangedEvent,
): void {
    const entity = new LockPaymentConditionRoleAdminChanged(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.previousAdminRole = event.params.previousAdminRole
    entity.newAdminRole = event.params.newAdminRole
    entity.save()
}

export function handleLockPaymentConditionRoleGranted(
    event: LockPaymentConditionRoleGrantedEvent,
): void {
    const entity = new LockPaymentConditionRoleGranted(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.account = event.params.account
    entity.sender = event.params.sender
    entity.save()
}

export function handleLockPaymentConditionRoleRevoked(
    event: LockPaymentConditionRoleRevokedEvent,
): void {
    const entity = new LockPaymentConditionRoleRevoked(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.account = event.params.account
    entity.sender = event.params.sender
    entity.save()
}
