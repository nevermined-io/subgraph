import {
  AgreementCreated as NFT721AccessTemplateAgreementCreatedEvent,
  OwnershipTransferred as NFT721AccessTemplateOwnershipTransferredEvent,
} from "../generated/NFT721AccessTemplate/NFT721AccessTemplate"
import {
  NFT721AccessTemplateAgreementCreated,
  NFT721AccessTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721AccessTemplateAgreementCreated(
  event: NFT721AccessTemplateAgreementCreatedEvent
): void {
  let entity = new NFT721AccessTemplateAgreementCreated(
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

export function handleNFT721AccessTemplateOwnershipTransferred(
  event: NFT721AccessTemplateOwnershipTransferredEvent
): void {
  let entity = new NFT721AccessTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
