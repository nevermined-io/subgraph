import { OwnershipTransferred as SignConditionOwnershipTransferredEvent } from '../generated/SignCondition/SignCondition'
import { SignConditionOwnershipTransferred } from '../generated/schema'

export function handleSignConditionOwnershipTransferred(
    event: SignConditionOwnershipTransferredEvent,
): void {
    const entity = new SignConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
