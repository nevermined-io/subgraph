import { OwnershipTransferred as TemplateStoreManagerOwnershipTransferredEvent } from "../generated/TemplateStoreManager/TemplateStoreManager"
import { TemplateStoreManagerOwnershipTransferred } from "../generated/schema"

export function handleTemplateStoreManagerOwnershipTransferred(
  event: TemplateStoreManagerOwnershipTransferredEvent
): void {
  let entity = new TemplateStoreManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
