import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./component-example-two.module.scss";

import Heading from "../../../atoms/Heading";
import Body from "../../../atoms/Body";

//* This is an example of a basic CMS component

const ComponentExampleTwo = ({ title, text, className }) => {
  const classes = cn(styles.componentExampleTwo, className);
  console.log("ComponentExampleTwo");
  return (
    <section className={classes}>
      <Heading tag="h1">{title}</Heading>
      <Body>{text}</Body>
    </section>
  );
};

export default ComponentExampleTwo;

ComponentExampleTwo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};
