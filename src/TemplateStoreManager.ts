import {
  Initialized as TemplateStoreManagerInitializedEvent,
  OwnershipTransferred as TemplateStoreManagerOwnershipTransferredEvent,
} from "../generated/TemplateStoreManager/TemplateStoreManager"
import {
  TemplateStoreManagerInitialized,
  TemplateStoreManagerOwnershipTransferred,
} from "../generated/schema"

export function handleTemplateStoreManagerInitialized(
  event: TemplateStoreManagerInitializedEvent
): void {
  let entity = new TemplateStoreManagerInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

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
