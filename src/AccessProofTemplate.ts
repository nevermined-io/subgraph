import {
  AgreementCreated as AccessProofTemplateAgreementCreatedEvent,
  Initialized as AccessProofTemplateInitializedEvent,
  OwnershipTransferred as AccessProofTemplateOwnershipTransferredEvent,
} from "../generated/AccessProofTemplate/AccessProofTemplate"
import {
  AccessProofTemplateAgreementCreated,
  AccessProofTemplateInitialized,
  AccessProofTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleAccessProofTemplateAgreementCreated(
  event: AccessProofTemplateAgreementCreatedEvent
): void {
  let entity = new AccessProofTemplateAgreementCreated(
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

export function handleAccessProofTemplateInitialized(
  event: AccessProofTemplateInitializedEvent
): void {
  let entity = new AccessProofTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleAccessProofTemplateOwnershipTransferred(
  event: AccessProofTemplateOwnershipTransferredEvent
): void {
  let entity = new AccessProofTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
