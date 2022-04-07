// Styles
import styles from "./toggle.module.scss"
import cn from "classnames"

export const ToggleFilter = ({
  label,
  selectedBookmaker,
  handlePlayersByBookmaker,
  styles: userStyles,
}) => {
  const slideClasses = cn(styles.toggleActive, styles.toggleSlide)
  return (
    <div className={userStyles}>
      <label className={styles.toggle}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type="checkbox"
          role="switch"
          checked={selectedBookmaker === "DraftKings"}
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
