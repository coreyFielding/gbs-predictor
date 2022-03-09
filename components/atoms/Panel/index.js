// Styles
import cn from "classnames"
import styles from "./panel.module.scss"

export const Panel = ({ styles: userStyles, ...rest }) => {
  const classes = cn(styles.panel, userStyles)
  return <div className={classes} {...rest}></div>
}
