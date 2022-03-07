import cn from "classnames"
import Link from "next/link"
import PropTypes from "prop-types"
import styles from "./button.module.scss"

const Button = ({ children, className, type, url, urlExternal }) => {
  const classes = cn(styles.button, type, className)

  if (url) {
    return urlExternal ? (
      <a href={url} className={classes} aria-label={children} target="_blank">
        {children}
      </a>
    ) : (
      <Link href={url}>
        <a className={classes} aria-label={children}>
          {children}
        </a>
      </Link>
    )
  }
}

export default Button

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  url: PropTypes.string,
  urlExternal: PropTypes.bool,
}

Button.defaultProps = {
  type: "primary",
  urlExternal: false,
}
