import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

export const Icon = ({ className, children, ...props }) =>
  <i className={classnames("material-icons", className)} {...props}>
    {children}
  </i>;

Icon.propTypes = {
  children: PropTypes.node
};

export default Icon;
