// Styles
import styles from "./toggle.module.scss"
import cn from "classnames"
import { usePlayers } from "hooks/usePlayers"
import { useEffect, useState } from "react"

export const ToggleFilter = ({
  label,
  handlePlayersByBookmaker,
  styles: userStyles,
}) => {
  const { selectedBookmaker } = usePlayers()

  const slideClasses = cn(styles.toggleActive, styles.toggleSlide)
  return (
    <div className={userStyles}>
      <label className={styles.toggle}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type="checkbox"
          role="switch"
          onChange={(e) => {
            handlePlayersByBookmaker(e.target.checked ? "DraftKings" : "Bet365")
          }}
          className={styles.input}
        />
        <span className={slideClasses} />
      </label>
    </div>
  )
}
