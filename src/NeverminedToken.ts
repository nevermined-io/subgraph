import {
    Approval as NeverminedTokenApprovalEvent,
    OwnershipTransferred as NeverminedTokenOwnershipTransferredEvent,
    RoleAdminChanged as NeverminedTokenRoleAdminChangedEvent,
    RoleGranted as NeverminedTokenRoleGrantedEvent,
    RoleRevoked as NeverminedTokenRoleRevokedEvent,
    Transfer as NeverminedTokenTransferEvent,
} from '../generated/NeverminedToken/NeverminedToken'
import {
    NeverminedTokenApproval,
    NeverminedTokenOwnershipTransferred,
    NeverminedTokenRoleAdminChanged,
    NeverminedTokenRoleGranted,
    NeverminedTokenRoleRevoked,
    NeverminedTokenTransfer,
} from '../generated/schema'

export function handleNeverminedTokenApproval(
    event: NeverminedTokenApprovalEvent,
): void {
    const entity = new NeverminedTokenApproval(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.owner = event.params.owner
    entity.spender = event.params.spender
    entity.value = event.params.value
    entity.save()
}

export function handleNeverminedTokenOwnershipTransferred(
    event: NeverminedTokenOwnershipTransferredEvent,
): void {
    const entity = new NeverminedTokenOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}

export function handleNeverminedTokenRoleAdminChanged(
    event: NeverminedTokenRoleAdminChangedEvent,
): void {
    const entity = new NeverminedTokenRoleAdminChanged(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.previousAdminRole = event.params.previousAdminRole
    entity.newAdminRole = event.params.newAdminRole
    entity.save()
}

export function handleNeverminedTokenRoleGranted(
    event: NeverminedTokenRoleGrantedEvent,
): void {
    const entity = new NeverminedTokenRoleGranted(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.account = event.params.account
    entity.sender = event.params.sender
    entity.save()
}

export function handleNeverminedTokenRoleRevoked(
    event: NeverminedTokenRoleRevokedEvent,
): void {
    const entity = new NeverminedTokenRoleRevoked(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.role = event.params.role
    entity.account = event.params.account
    entity.sender = event.params.sender
    entity.save()
}

export function handleNeverminedTokenTransfer(
    event: NeverminedTokenTransferEvent,
): void {
    const entity = new NeverminedTokenTransfer(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.from = event.params.from
    entity.to = event.params.to
    entity.value = event.params.value
    entity.save()
}
