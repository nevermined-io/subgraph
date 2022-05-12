import {
  AgreementCreated as NFTSalesWithAccessTemplateAgreementCreatedEvent,
  Initialized as NFTSalesWithAccessTemplateInitializedEvent,
  OwnershipTransferred as NFTSalesWithAccessTemplateOwnershipTransferredEvent,
} from "../generated/NFTSalesWithAccessTemplate/NFTSalesWithAccessTemplate"
import {
  NFTSalesWithAccessTemplateAgreementCreated,
  NFTSalesWithAccessTemplateInitialized,
  NFTSalesWithAccessTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFTSalesWithAccessTemplateAgreementCreated(
  event: NFTSalesWithAccessTemplateAgreementCreatedEvent
): void {
  let entity = new NFTSalesWithAccessTemplateAgreementCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._accessConsumer = event.params._accessConsumer
  entity._accessProvider = event.params._accessProvider
  entity._timeLocks = event.params._timeLocks
  entity._timeOuts = event.params._timeOuts
  entity._conditionIdSeeds = event.params._conditionIdSeeds
  entity._conditionIds = event.params._conditionIds
  entity._idSeed = event.params._idSeed
  entity._creator = event.params._creator
  entity.save()
}

export function handleNFTSalesWithAccessTemplateInitialized(
  event: NFTSalesWithAccessTemplateInitializedEvent
): void {
  let entity = new NFTSalesWithAccessTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFTSalesWithAccessTemplateOwnershipTransferred(
  event: NFTSalesWithAccessTemplateOwnershipTransferredEvent
): void {
  let entity = new NFTSalesWithAccessTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
