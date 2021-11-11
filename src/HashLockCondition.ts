import { OwnershipTransferred as HashLockConditionOwnershipTransferredEvent } from '../generated/HashLockCondition/HashLockCondition'
import { HashLockConditionOwnershipTransferred } from '../generated/schema'

export function handleHashLockConditionOwnershipTransferred(
    event: HashLockConditionOwnershipTransferredEvent,
): void {
    const entity = new HashLockConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
