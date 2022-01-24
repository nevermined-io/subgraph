import {
  AgreementCreated as AgreementCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  VaultCreated as VaultCreatedEvent
} from "../generated/AaveCreditTemplate/AaveCreditTemplate"
import {
  AgreementCreated,
  OwnershipTransferred,
  VaultCreated
} from "../generated/schema"

export function handleAgreementCreated(event: AgreementCreatedEvent): void {
  let entity = new AgreementCreated(
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

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleVaultCreated(event: VaultCreatedEvent): void {
  let entity = new VaultCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._vaultAddress = event.params._vaultAddress
  entity._creator = event.params._creator
  entity._lender = event.params._lender
  entity._borrower = event.params._borrower
  entity.save()
}