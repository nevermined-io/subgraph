import {
    AgreementCreated as DIDSalesTemplateAgreementCreatedEvent,
    OwnershipTransferred as DIDSalesTemplateOwnershipTransferredEvent,
} from '../generated/DIDSalesTemplate/DIDSalesTemplate'
import {
    DIDSalesTemplateAgreementCreated,
    DIDSalesTemplateOwnershipTransferred,
} from '../generated/schema'

export function handleDIDSalesTemplateAgreementCreated(
    event: DIDSalesTemplateAgreementCreatedEvent,
): void {
    const entity = new DIDSalesTemplateAgreementCreated(
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

export function handleDIDSalesTemplateOwnershipTransferred(
    event: DIDSalesTemplateOwnershipTransferredEvent,
): void {
    const entity = new DIDSalesTemplateOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
