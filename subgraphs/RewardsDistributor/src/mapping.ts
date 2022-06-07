import { Initialized as InitializedEvent } from "../generated/RewardsDistributor/RewardsDistributor"
import { Initialized } from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}
