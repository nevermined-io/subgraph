import {
    AgreementCreated as NFTSalesTemplateAgreementCreatedEvent,
    OwnershipTransferred as NFTSalesTemplateOwnershipTransferredEvent,
} from '../generated/NFTSalesTemplate/NFTSalesTemplate'
import {
    NFTSalesTemplateAgreementCreated,
    NFTSalesTemplateOwnershipTransferred,
} from '../generated/schema'

export function handleNFTSalesTemplateAgreementCreated(
    event: NFTSalesTemplateAgreementCreatedEvent,
): void {
    const entity = new NFTSalesTemplateAgreementCreated(
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

export function handleNFTSalesTemplateOwnershipTransferred(
    event: NFTSalesTemplateOwnershipTransferredEvent,
): void {
    const entity = new NFTSalesTemplateOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
