import {
  AgreementCreated as NFT721AccessSwapTemplateAgreementCreatedEvent,
  Initialized as NFT721AccessSwapTemplateInitializedEvent,
  OwnershipTransferred as NFT721AccessSwapTemplateOwnershipTransferredEvent,
} from "../generated/NFT721AccessSwapTemplate/NFT721AccessSwapTemplate"
import {
  NFT721AccessSwapTemplateAgreementCreated,
  NFT721AccessSwapTemplateInitialized,
  NFT721AccessSwapTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721AccessSwapTemplateAgreementCreated(
  event: NFT721AccessSwapTemplateAgreementCreatedEvent
): void {
  let entity = new NFT721AccessSwapTemplateAgreementCreated(
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

export function handleNFT721AccessSwapTemplateInitialized(
  event: NFT721AccessSwapTemplateInitializedEvent
): void {
  let entity = new NFT721AccessSwapTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFT721AccessSwapTemplateOwnershipTransferred(
  event: NFT721AccessSwapTemplateOwnershipTransferredEvent
): void {
  let entity = new NFT721AccessSwapTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
