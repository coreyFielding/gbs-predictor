import { useState, useEffect } from "react"

// Styles
import styles from "./dropdown.module.scss"
import cn from "classnames"

export const DropdownFilter = ({
  name,
  label,
  options,
  selectedBookmaker,
  handlePlayersByBookmaker,
  styles: userStyles,
}) => {
  const classes = cn(styles.select, userStyles)

  const [selectedOption, setSelectedOption] = useState("")

  // Reset dropdown when DraftKings toggle is true
  useEffect(() => {
    selectedBookmaker === "DraftKings" && setSelectedOption("")
  }, [selectedBookmaker])

  return (
    <select
      id="select"
      name={name}
      value={selectedOption}
      onChange={(e) => {
        setSelectedOption(e.target.value)
        handlePlayersByBookmaker(e.target.value)
      }}
      className={classes}
    >
      <option>Filter By Bookmaker</option>
      {options?.map((option) => (
        <option key={option}>{option}</option>
      ))}
      {options}
    </select>
  )
}
