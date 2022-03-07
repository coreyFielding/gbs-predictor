import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./heading.module.scss";

const Heading = ({ children, tag, className }) => {
  className =
    styles.heading && className ? cn(styles.heading, className) : null;

  return (
    children &&
    React.createElement(
      tag,
      {
        className,
      },
      children
    )
  );
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(["div", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
};

Heading.defaultProps = {
  tag: "div",
};
