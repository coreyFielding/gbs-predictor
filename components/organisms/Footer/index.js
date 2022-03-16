import cn from "classnames"
import PropTypes from "prop-types"
import styles from "./footer.module.scss"

import Container from "../../atoms/Container"
import Logo from "../../atoms/Logo"
import NextImage from "../../atoms/Image"

export const Footer = ({ className }) => {
  const classes = cn(styles.footer, className)

  return (
    <footer className={classes}>
      <Container className={styles.container}>
        <div className={styles.break} />
        <div className={styles.row}>
          <div className={styles.left}>
            <p className={styles.age}>18+</p>
            <p className={styles.disclaimer}>© 2022. This website is to be used strictly by those aged 18 or over. Please gamble responsibly.</p>
          </div>
          <div className={styles.right}>
           <a href="https://www.begambleaware.org/" aria-label="Be gamble aware website">
             <NextImage src="/../public/images/gambleaware.png" width={200} height={26} />
           </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}
