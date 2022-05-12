import {
  AgreementCreated as DIDSalesTemplateAgreementCreatedEvent,
  Initialized as DIDSalesTemplateInitializedEvent,
  OwnershipTransferred as DIDSalesTemplateOwnershipTransferredEvent,
} from "../generated/DIDSalesTemplate/DIDSalesTemplate"
import {
  DIDSalesTemplateAgreementCreated,
  DIDSalesTemplateInitialized,
  DIDSalesTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleDIDSalesTemplateAgreementCreated(
  event: DIDSalesTemplateAgreementCreatedEvent
): void {
  let entity = new DIDSalesTemplateAgreementCreated(
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

export function handleDIDSalesTemplateInitialized(
  event: DIDSalesTemplateInitializedEvent
): void {
  let entity = new DIDSalesTemplateInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleDIDSalesTemplateOwnershipTransferred(
  event: DIDSalesTemplateOwnershipTransferredEvent
): void {
  let entity = new DIDSalesTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
