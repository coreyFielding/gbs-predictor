import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./container.module.scss";

const Container = ({ children, className }) => {
  const classes = cn(styles.container, className);

  return <div className={classes}>{children}</div>;
};

export default Container;

Container.propTypes = {
  className: PropTypes.string,
};
