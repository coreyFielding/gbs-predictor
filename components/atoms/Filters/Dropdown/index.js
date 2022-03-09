// Styles
import styles from "./dropdown.module.scss"
import cn from "classnames"

export const DropdownFilter = ({
  name,
  label,
  options,
  handleOnChange,
  styles: userStyles,
}) => {
  const classes = cn(styles.select, userStyles)

  return (
    <select id="select" name={name} className={classes}>
      {options}
    </select>
  )
}
