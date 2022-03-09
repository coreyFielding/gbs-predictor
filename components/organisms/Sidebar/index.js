import styles from "./sidebar.module.scss"

export const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
      <aside className={styles.sidebar_inner}>
        <div className={styles.sidebar_tab}></div>
        <div className={styles.sidebar_tab}></div>

              <div className={styles.sidebar_socials}></div>
      </aside>
    </div>
  )
}
