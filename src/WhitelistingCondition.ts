import { OwnershipTransferred as WhitelistingConditionOwnershipTransferredEvent } from "../generated/WhitelistingCondition/WhitelistingCondition"
import { WhitelistingConditionOwnershipTransferred } from "../generated/schema"

export function handleWhitelistingConditionOwnershipTransferred(
  event: WhitelistingConditionOwnershipTransferredEvent
): void {
  let entity = new WhitelistingConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
