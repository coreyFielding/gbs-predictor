import { useState, useEffect } from "react"

// Styles
import styles from "./dropdown.module.scss"
import cn from "classnames"

export const DropdownFilter = ({
  name,
  label,
  options,
  handlePlayersByBookmaker,
  styles: userStyles,
}) => {
  const classes = cn(styles.select, userStyles)

  const [selectedOption, setSelectedOption] = useState()

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
      {options?.map((option) => (
        <option key={option}>{option}</option>
      ))}
      {options}
    </select>
  )
}
