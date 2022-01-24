import {
  AgreementCreated as AaveCreditTemplateAgreementCreatedEvent,
  OwnershipTransferred as AaveCreditTemplateOwnershipTransferredEvent,
  VaultCreated as AaveCreditTemplateVaultCreatedEvent,
} from "../generated/AaveCreditTemplate/AaveCreditTemplate"
import {
  AaveCreditTemplateAgreementCreated,
  AaveCreditTemplateOwnershipTransferred,
  AaveCreditTemplateVaultCreated,
} from "../generated/schema"

export function handleAaveCreditTemplateAgreementCreated(
  event: AaveCreditTemplateAgreementCreatedEvent
): void {
  let entity = new AaveCreditTemplateAgreementCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._accessConsumer = event.params._accessConsumer
  entity._accessProvider = event.params._accessProvider
  entity._timeLocks = event.params._timeLocks
  entity._timeOuts = event.params._timeOuts
  entity.save()
}

export function handleAaveCreditTemplateOwnershipTransferred(
  event: AaveCreditTemplateOwnershipTransferredEvent
): void {
  let entity = new AaveCreditTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleAaveCreditTemplateVaultCreated(
  event: AaveCreditTemplateVaultCreatedEvent
): void {
  let entity = new AaveCreditTemplateVaultCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._vaultAddress = event.params._vaultAddress
  entity._creator = event.params._creator
  entity._lender = event.params._lender
  entity._borrower = event.params._borrower
  entity.save()
}
