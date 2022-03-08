// Styles
import styles from "./toggle.module.scss"

export const ToggleFilter = ({ label, styles: userStyles }) => {
  return (
    <div className={userStyles}>
      {label && <span className={styles.label}>{label}</span>}
      <input type="checkbox" role="switch" className={styles.input} />
      <span className={styles.toggleActive} />
    </div>
  )
}
