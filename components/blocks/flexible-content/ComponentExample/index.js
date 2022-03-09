import cn from "classnames"
import PropTypes from "prop-types"
import styles from "./component-example.module.scss"

import { Heading, Body } from "../../../"

//* This is an example of how to structure a basic CMS component

const ComponentExample = ({ title, text, className }) => {
  const classes = cn(styles.componentExample, className)
  console.log("ComponentExample")
  return (
    <section className={classes}>
      <Heading tag="h1">{title}</Heading>
      <Body>{text}</Body>
    </section>
  )
}

export default ComponentExample

ComponentExample.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
}
