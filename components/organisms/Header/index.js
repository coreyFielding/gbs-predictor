import cn from "classnames"
import PropTypes from "prop-types"
import styles from "./header.module.scss"
// import { useContext } from "react"
// import { WPContext } from "../../common/WordpressProvider"

import Container from "../../atoms/Container"
// import Logo from "../../atoms/Logo"
// import Navigation from "../../molecules/Navigation"

export const Header = ({ className }) => {
  const classes = cn(styles.header, className)
  // const { menus } = useContext(WPContext)

  return (
    <header className={classes}>
      <Container className={styles.container}>
        {/* <Logo /> */}
        <div className={styles.header_inner}>
          <div></div>
          <div className={styles.header_span}>
            <span className="span--heading">
              Brought to you by golfbettingsystem.co.uk
            </span>
          </div>
        </div>
        {/* <Navigation className={styles.navigation} links={menus?.primary} /> */}
      </Container>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}
