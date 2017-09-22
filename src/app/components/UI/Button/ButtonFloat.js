import FloatingActionButton from "material-ui/FloatingActionButton";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";

export const ButtonFloat = ({ className, ...props }) => (
  <FloatingActionButton className={classnames(classes.btnFloat, className)} {...props} />
);

ButtonFloat.propTypes = {
  className: PropTypes.string
};

export default ButtonFloat;
