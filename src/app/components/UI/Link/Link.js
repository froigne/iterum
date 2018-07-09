import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Link.module.css";
import classnames from "classnames";

export const Link = ({ className, ...props }) => (
  <RouterLink className={classnames(classes.link, className)} {...props} />
);

Link.propTypes = {
  className: PropTypes.string
};

export default Link;
