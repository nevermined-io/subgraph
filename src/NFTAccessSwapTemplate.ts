import {
  AgreementCreated as NFTAccessSwapTemplateAgreementCreatedEvent,
  Initialized as NFTAccessSwapTemplateInitializedEvent,
  OwnershipTransferred as NFTAccessSwapTemplateOwnershipTransferredEvent,
} from "../generated/NFTAccessSwapTemplate/NFTAccessSwapTemplate"
import {
  NFTAccessSwapTemplateAgreementCreated,
  NFTAccessSwapTemplateInitialized,
  NFTAccessSwapTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleNFTAccessSwapTemplateAgreementCreated(
  event: NFTAccessSwapTemplateAgreementCreatedEvent
): void {
  let entity = new NFTAccessSwapTemplateAgreementCreated(
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

export function handleNFTAccessSwapTemplateInitialized(
  event: NFTAccessSwapTemplateInitializedEvent
): void {
  let entity = new NFTAccessSwapTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNFTAccessSwapTemplateOwnershipTransferred(
  event: NFTAccessSwapTemplateOwnershipTransferredEvent
): void {
  let entity = new NFTAccessSwapTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
