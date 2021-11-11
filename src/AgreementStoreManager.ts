import { OwnershipTransferred as AgreementStoreManagerOwnershipTransferredEvent } from "../generated/AgreementStoreManager/AgreementStoreManager"
import { AgreementStoreManagerOwnershipTransferred } from "../generated/schema"

export function handleAgreementStoreManagerOwnershipTransferred(
  event: AgreementStoreManagerOwnershipTransferredEvent
): void {
  let entity = new AgreementStoreManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
