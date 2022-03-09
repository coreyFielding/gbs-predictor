import React from "react"
import cn from "classnames"
import PropTypes from "prop-types"
import styles from "./heading.module.scss"

export const Heading = ({ level, styles: userStyles, ...rest }) => {
  const Component = `h${level}`
  const classes = cn(styles.heading, userStyles)

  return <Component className={classes} {...rest} />
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

Heading.defaultProps = {
  level: 1,
}
