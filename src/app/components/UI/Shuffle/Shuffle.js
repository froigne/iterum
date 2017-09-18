import PropTypes from "prop-types";
import React from "react";
import WrappyText from "react-wrappy-text";
import classes from "./Shuffle.module.css";
import classnames from "classnames";

export const Shuffle = ({ className, ...props }) => (
  <WrappyText className={classnames(classes.shuffle, className)} {...props} />
);

Shuffle.propTypes = {
  className: PropTypes.string
};

export default Shuffle;
