import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./body.module.scss";

const Body = ({ children, className }) => {
  className = styles && className ? cn(styles, className) : null;

  return children && <div className={className}>{children}</div>;
};

export default Body;

Body.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
