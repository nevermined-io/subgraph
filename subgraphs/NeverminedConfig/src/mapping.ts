import {
  NeverminedConfigChange as NeverminedConfigChangeEvent
} from "../generated/NeverminedConfig/NeverminedConfig"
import {
  NeverminedConfigChange
} from "../generated/schema"

export function handleNeverminedConfigChange(event: NeverminedConfigChangeEvent): void {
  let entity = new NeverminedConfigChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._whoChanged = event.params._whoChanged
  entity._parameter = event.params._parameter
  entity.save()
}
