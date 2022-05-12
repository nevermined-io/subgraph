import {
  AgreementCreated as EscrowComputeExecutionTemplateAgreementCreatedEvent,
  Initialized as EscrowComputeExecutionTemplateInitializedEvent,
  OwnershipTransferred as EscrowComputeExecutionTemplateOwnershipTransferredEvent,
} from "../generated/EscrowComputeExecutionTemplate/EscrowComputeExecutionTemplate"
import {
  EscrowComputeExecutionTemplateAgreementCreated,
  EscrowComputeExecutionTemplateInitialized,
  EscrowComputeExecutionTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleEscrowComputeExecutionTemplateAgreementCreated(
  event: EscrowComputeExecutionTemplateAgreementCreatedEvent
): void {
  let entity = new EscrowComputeExecutionTemplateAgreementCreated(
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

export function handleEscrowComputeExecutionTemplateInitialized(
  event: EscrowComputeExecutionTemplateInitializedEvent
): void {
  let entity = new EscrowComputeExecutionTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleEscrowComputeExecutionTemplateOwnershipTransferred(
  event: EscrowComputeExecutionTemplateOwnershipTransferredEvent
): void {
  let entity = new EscrowComputeExecutionTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
