import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";

export const ButtonFlat = ({ className, ...props }) => (
  <FlatButton className={classnames(classes.btnFlat, className)} {...props} />
);

ButtonFlat.propTypes = {
  className: PropTypes.string
};

export default ButtonFlat;
