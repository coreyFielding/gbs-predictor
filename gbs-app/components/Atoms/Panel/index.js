import styles from "./panel.module.scss"

export const Panel = ({ styles: userStyles, ...rest }) => {
  return <div className={styles.panel} {...rest}></div>
}
