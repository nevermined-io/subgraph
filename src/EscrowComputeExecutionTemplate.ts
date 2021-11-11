import {
    AgreementCreated as EscrowComputeExecutionTemplateAgreementCreatedEvent,
    OwnershipTransferred as EscrowComputeExecutionTemplateOwnershipTransferredEvent,
} from '../generated/EscrowComputeExecutionTemplate/EscrowComputeExecutionTemplate'
import {
    EscrowComputeExecutionTemplateAgreementCreated,
    EscrowComputeExecutionTemplateOwnershipTransferred,
} from '../generated/schema'

export function handleEscrowComputeExecutionTemplateAgreementCreated(
    event: EscrowComputeExecutionTemplateAgreementCreatedEvent,
): void {
    const entity = new EscrowComputeExecutionTemplateAgreementCreated(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._agreementId = event.params._agreementId
    entity._did = event.params._did
    entity._accessConsumer = event.params._accessConsumer
    entity._accessProvider = event.params._accessProvider
    entity._timeLocks = event.params._timeLocks
    entity._timeOuts = event.params._timeOuts
    entity.save()
}

export function handleEscrowComputeExecutionTemplateOwnershipTransferred(
    event: EscrowComputeExecutionTemplateOwnershipTransferredEvent,
): void {
    const entity = new EscrowComputeExecutionTemplateOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
