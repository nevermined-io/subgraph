import {
    AgreementCreated as NFT721SalesTemplateAgreementCreatedEvent,
    OwnershipTransferred as NFT721SalesTemplateOwnershipTransferredEvent,
} from '../generated/NFT721SalesTemplate/NFT721SalesTemplate'
import {
    NFT721SalesTemplateAgreementCreated,
    NFT721SalesTemplateOwnershipTransferred,
} from '../generated/schema'

export function handleNFT721SalesTemplateAgreementCreated(
    event: NFT721SalesTemplateAgreementCreatedEvent,
): void {
    const entity = new NFT721SalesTemplateAgreementCreated(
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

export function handleNFT721SalesTemplateOwnershipTransferred(
    event: NFT721SalesTemplateOwnershipTransferredEvent,
): void {
    const entity = new NFT721SalesTemplateOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}
