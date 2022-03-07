import PropTypes from "prop-types";
import { createContext, useContext } from "react";

// Initialize Menu context object.
export const WPContext = createContext();

export function useWordPressContext() {
  return useContext(WPContext);
}

export default function WordPressProvider(props) {
  const { value, children } = props;

  return <WPContext.Provider value={value}>{children}</WPContext.Provider>;
}

WordPressProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  value: PropTypes.object,
};
