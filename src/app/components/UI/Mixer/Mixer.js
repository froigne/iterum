import PropTypes from "prop-types";
import React from "react";
import WrappyText from "react-wrappy-text";
import classes from "./Mixer.module.css";
import classnames from "classnames";

export const Mixer = ({ className, ...props }) => (
  <WrappyText className={classnames(classes.mixer, className)} {...props} />
);

Mixer.propTypes = {
  className: PropTypes.string
};

export default Mixer;
