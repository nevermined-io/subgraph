import {
  AgreementCreated as AccessTemplateAgreementCreatedEvent,
  OwnershipTransferred as AccessTemplateOwnershipTransferredEvent,
} from "../generated/AccessTemplate/AccessTemplate"
import {
  AccessTemplateAgreementCreated,
  AccessTemplateOwnershipTransferred,
} from "../generated/schema"

export function handleAccessTemplateAgreementCreated(
  event: AccessTemplateAgreementCreatedEvent
): void {
  let entity = new AccessTemplateAgreementCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._accessConsumer = event.params._accessConsumer
  entity._accessProvider = event.params._accessProvider
  entity._timeLocks = event.params._timeLocks
  entity._timeOuts = event.params._timeOuts
  entity.save()
}

export function handleAccessTemplateOwnershipTransferred(
  event: AccessTemplateOwnershipTransferredEvent
): void {
  let entity = new AccessTemplateOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
