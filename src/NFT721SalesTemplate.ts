import {
  AgreementCreated as NFT721SalesTemplateAgreementCreatedEvent,
  Initialized as NFT721SalesTemplateInitializedEvent,
  OwnershipTransferred as NFT721SalesTemplateOwnershipTransferredEvent,
} from "../generated/NFT721SalesTemplate/NFT721SalesTemplate"
import {
  NFT721SalesTemplateAgreementCreated,
  NFT721SalesTemplateInitialized,
  NFT721SalesTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721SalesTemplateAgreementCreated(
  event: NFT721SalesTemplateAgreementCreatedEvent
): void {
  let entity = new NFT721SalesTemplateAgreementCreated(
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

export function handleNFT721SalesTemplateInitialized(
  event: NFT721SalesTemplateInitializedEvent
): void {
  let entity = new NFT721SalesTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFT721SalesTemplateOwnershipTransferred(
  event: NFT721SalesTemplateOwnershipTransferredEvent
): void {
  let entity = new NFT721SalesTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
