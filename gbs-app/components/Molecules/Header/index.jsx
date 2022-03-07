import styles from "./header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
          <div className={styles.header_inner}>
              <div></div>
        <div className={styles.header_span}>
          <span className="span--heading">
            Brought to you by golfbettingsystem.co.uk
          </span>
        </div>
      </div>
    </header>
  )
}
