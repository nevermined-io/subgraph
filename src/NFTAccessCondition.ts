import {
    Fulfilled as NFTAccessConditionFulfilledEvent,
    OwnershipTransferred as NFTAccessConditionOwnershipTransferredEvent,
} from '../generated/NFTAccessCondition/NFTAccessCondition'
import {
    NFTAccessConditionFulfilled,
    NFTAccessConditionOwnershipTransferred,
} from '../generated/schema'

export function handleNFTAccessConditionFulfilled(
    event: NFTAccessConditionFulfilledEvent,
): void {
    const entity = new NFTAccessConditionFulfilled(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._agreementId = event.params._agreementId
    entity._documentId = event.params._documentId
    entity._grantee = event.params._grantee
    entity._conditionId = event.params._conditionId
    entity.save()
}

export function handleNFTAccessConditionOwnershipTransferred(
    event: NFTAccessConditionOwnershipTransferredEvent,
): void {
    const entity = new NFTAccessConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
