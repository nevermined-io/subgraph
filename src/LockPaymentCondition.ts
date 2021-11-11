import {
    Fulfilled as LockPaymentConditionFulfilledEvent,
    OwnershipTransferred as LockPaymentConditionOwnershipTransferredEvent,
} from '../generated/LockPaymentCondition/LockPaymentCondition'
import {
    LockPaymentConditionFulfilled,
    LockPaymentConditionOwnershipTransferred,
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
    entity._receivers = event.params._receivers
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
