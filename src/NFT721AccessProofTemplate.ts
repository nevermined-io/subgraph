import {
  AgreementCreated as NFT721AccessProofTemplateAgreementCreatedEvent,
  Initialized as NFT721AccessProofTemplateInitializedEvent,
  OwnershipTransferred as NFT721AccessProofTemplateOwnershipTransferredEvent,
} from "../generated/NFT721AccessProofTemplate/NFT721AccessProofTemplate"
import {
  NFT721AccessProofTemplateAgreementCreated,
  NFT721AccessProofTemplateInitialized,
  NFT721AccessProofTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFT721AccessProofTemplateAgreementCreated(
  event: NFT721AccessProofTemplateAgreementCreatedEvent
): void {
  let entity = new NFT721AccessProofTemplateAgreementCreated(
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

export function handleNFT721AccessProofTemplateInitialized(
  event: NFT721AccessProofTemplateInitializedEvent
): void {
  let entity = new NFT721AccessProofTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFT721AccessProofTemplateOwnershipTransferred(
  event: NFT721AccessProofTemplateOwnershipTransferredEvent
): void {
  let entity = new NFT721AccessProofTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
