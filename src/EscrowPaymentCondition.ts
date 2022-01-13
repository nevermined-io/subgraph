import { Bytes, ethereum } from '@graphprotocol/graph-ts'
import {
    Fulfilled as EscrowPaymentConditionFulfilledEvent,
    OwnershipTransferred as EscrowPaymentConditionOwnershipTransferredEvent,
    Received as EscrowPaymentConditionReceivedEvent,
} from '../generated/EscrowPaymentCondition/EscrowPaymentCondition'
import {
    EscrowPaymentConditionFulfilled,
    EscrowPaymentConditionOwnershipTransferred,
    EscrowPaymentConditionReceived,
} from '../generated/schema'

export function handleEscrowPaymentConditionFulfilled(
    event: EscrowPaymentConditionFulfilledEvent,
): void {
    const entity = new EscrowPaymentConditionFulfilled(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._agreementId = event.params._agreementId
    entity._tokenAddress = event.params._tokenAddress
    entity._receivers = ethereum.Value.fromAddressArray(event.params._receivers).toBytesArray()
    entity._conditionId = event.params._conditionId
    entity._amounts = event.params._amounts
    entity.save()
}

export function handleEscrowPaymentConditionOwnershipTransferred(
    event: EscrowPaymentConditionOwnershipTransferredEvent,
): void {
    const entity = new EscrowPaymentConditionOwnershipTransferred(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity.previousOwner = event.params.previousOwner
    entity.newOwner = event.params.newOwner
    entity.save()
}

export function handleEscrowPaymentConditionReceived(
    event: EscrowPaymentConditionReceivedEvent,
): void {
    const entity = new EscrowPaymentConditionReceived(
        event.transaction.hash.toHex() + '-' + event.logIndex.toString(),
    )
    entity._from = event.params._from
    entity._value = event.params._value
    entity.save()
}
