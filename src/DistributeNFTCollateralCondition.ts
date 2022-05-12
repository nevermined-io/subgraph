import {
  Fulfilled as DistributeNFTCollateralConditionFulfilledEvent,
  Initialized as DistributeNFTCollateralConditionInitializedEvent,
  OwnershipTransferred as DistributeNFTCollateralConditionOwnershipTransferredEvent,
} from "../generated/DistributeNFTCollateralCondition/DistributeNFTCollateralCondition"
import {
  DistributeNFTCollateralConditionFulfilled,
  DistributeNFTCollateralConditionInitialized,
  DistributeNFTCollateralConditionOwnershipTransferred,
} from "../generated/schema"

export function handleDistributeNFTCollateralConditionFulfilled(
  event: DistributeNFTCollateralConditionFulfilledEvent
): void {
  let entity = new DistributeNFTCollateralConditionFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._agreementId = event.params._agreementId
  entity._did = event.params._did
  entity._receiver = event.params._receiver
  entity._conditionId = event.params._conditionId
  entity._contract = event.params._contract
  entity.save()
}

export function handleDistributeNFTCollateralConditionInitialized(
  event: DistributeNFTCollateralConditionInitializedEvent
): void {
  let entity = new DistributeNFTCollateralConditionInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleDistributeNFTCollateralConditionOwnershipTransferred(
  event: DistributeNFTCollateralConditionOwnershipTransferredEvent
): void {
  let entity = new DistributeNFTCollateralConditionOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
