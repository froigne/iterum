import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap Button
injectTapEventPlugin();

export const Button = ({ className, ...props }) => (
  <RaisedButton className={classnames(classes.btn, className)} {...props} />
);

Button.propTypes = {
  className: PropTypes.string
};

export default Button;
