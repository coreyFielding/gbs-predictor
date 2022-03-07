import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./logo.module.scss";

import { ImgLink } from "../Image";

const Logo = ({ className, height, width }) => {
  const classes = cn(styles.logo, className);

  return (
    <ImgLink
      className={classes}
      url="/"
      src="https://res.cloudinary.com/insites-digital-ltd/image/upload/v1625492426/Logo_12f147ea86.svg"
      alt="Insites Digital"
      height={height}
      width={width}
    />
  );
};

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Logo.defaultProps = {
  height: 30,
  width: 44,
};
