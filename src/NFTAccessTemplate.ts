import {
  AgreementCreated as NFTAccessTemplateAgreementCreatedEvent,
  OwnershipTransferred as NFTAccessTemplateOwnershipTransferredEvent,
} from "../generated/NFTAccessTemplate/NFTAccessTemplate"
import {
  NFTAccessTemplateAgreementCreated,
  NFTAccessTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFTAccessTemplateAgreementCreated(
  event: NFTAccessTemplateAgreementCreatedEvent
): void {
  let entity = new NFTAccessTemplateAgreementCreated(
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

export function handleNFTAccessTemplateOwnershipTransferred(
  event: NFTAccessTemplateOwnershipTransferredEvent
): void {
  let entity = new NFTAccessTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
