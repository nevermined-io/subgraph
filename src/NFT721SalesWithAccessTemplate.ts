import {
  AgreementCreated as NFT721SalesWithAccessTemplateAgreementCreatedEvent,
  Initialized as NFT721SalesWithAccessTemplateInitializedEvent,
  OwnershipTransferred as NFT721SalesWithAccessTemplateOwnershipTransferredEvent,
} from "../generated/NFT721SalesWithAccessTemplate/NFT721SalesWithAccessTemplate"
import {
  NFT721SalesWithAccessTemplateAgreementCreated,
  NFT721SalesWithAccessTemplateInitialized,
  NFT721SalesWithAccessTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721SalesWithAccessTemplateAgreementCreated(
  event: NFT721SalesWithAccessTemplateAgreementCreatedEvent
): void {
  let entity = new NFT721SalesWithAccessTemplateAgreementCreated(
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

export function handleNFT721SalesWithAccessTemplateInitialized(
  event: NFT721SalesWithAccessTemplateInitializedEvent
): void {
  let entity = new NFT721SalesWithAccessTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFT721SalesWithAccessTemplateOwnershipTransferred(
  event: NFT721SalesWithAccessTemplateOwnershipTransferredEvent
): void {
  let entity = new NFT721SalesWithAccessTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
