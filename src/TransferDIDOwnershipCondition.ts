import {
    Fulfilled as TransferDIDOwnershipConditionFulfilledEvent,
    OwnershipTransferred as TransferDIDOwnershipConditionOwnershipTransferredEvent,
} from '../generated/TransferDIDOwnershipCondition/TransferDIDOwnershipCondition'
import {
    TransferDIDOwnershipConditionFulfilled,
    TransferDIDOwnershipConditionOwnershipTransferred,
} from '../generated/schema'

export function handleTransferDIDOwnershipConditionFulfilled(
    event: TransferDIDOwnershipConditionFulfilledEvent,
): void {
    const entity = new TransferDIDOwnershipConditionFulfilled(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._agreementId = event.params._agreementId
    entity._did = event.params._did
    entity._receiver = event.params._receiver
    entity._conditionId = event.params._conditionId
    entity.save()
}

export function handleTransferDIDOwnershipConditionOwnershipTransferred(
    event: TransferDIDOwnershipConditionOwnershipTransferredEvent,
): void {
    const entity = new TransferDIDOwnershipConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
