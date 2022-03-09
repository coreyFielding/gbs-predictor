import cn from "classnames"
import PropTypes from "prop-types"
import styles from "./footer.module.scss"

import Container from "../../atoms/Container"
import Logo from "../../atoms/Logo"

export const Footer = ({ className }) => {
  const classes = cn(styles.footer, className)

  return (
    <footer className={classes}>
      <Container className={styles.container}>
        <div className={styles.break} />
        {/* <Logo /> */}
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}
