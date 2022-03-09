import styles from "./sidebar.module.scss"

export const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
      <aside className={styles.sidebar_inner}>
        <div className={styles.sidebar_tab}>
          <div>
            <h2>Genesis International</h2>
            <p>PGA Tour</p>
          </div>
        </div>
        <div className={styles.sidebar_tab}>
          <div>
            <h2>Honda Classic</h2>
          </div>
        </div>

              <div className={styles.sidebar_socials}></div>
      </aside>
    </div>
  )
}
