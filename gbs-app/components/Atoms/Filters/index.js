import { SliderFilter } from "./Slider"
import { ToggleFilter } from "./Toggle"
import { DropdownFilter } from "./Dropdown"

export * from "./Slider"
export * from "./Toggle"
export * from "./Dropdown"

export const Filter = {
  Slider: SliderFilter,
  Toggle: ToggleFilter,
  Select: DropdownFilter,
}
