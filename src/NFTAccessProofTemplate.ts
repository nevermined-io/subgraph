import {
  AgreementCreated as NFTAccessProofTemplateAgreementCreatedEvent,
  Initialized as NFTAccessProofTemplateInitializedEvent,
  OwnershipTransferred as NFTAccessProofTemplateOwnershipTransferredEvent,
} from "../generated/NFTAccessProofTemplate/NFTAccessProofTemplate"
import {
  NFTAccessProofTemplateAgreementCreated,
  NFTAccessProofTemplateInitialized,
  NFTAccessProofTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFTAccessProofTemplateAgreementCreated(
  event: NFTAccessProofTemplateAgreementCreatedEvent
): void {
  let entity = new NFTAccessProofTemplateAgreementCreated(
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

export function handleNFTAccessProofTemplateInitialized(
  event: NFTAccessProofTemplateInitializedEvent
): void {
  let entity = new NFTAccessProofTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFTAccessProofTemplateOwnershipTransferred(
  event: NFTAccessProofTemplateOwnershipTransferredEvent
): void {
  let entity = new NFTAccessProofTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
