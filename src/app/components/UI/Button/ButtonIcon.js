import Icon from "../Icon";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";

export const ButtonIcon = ({ className, ...props }) => (
  <button className={classnames(className, classes.btnIcon)}>
    <Icon {...props} />
  </button>
);

ButtonIcon.propTypes = {
  className: PropTypes.string
};

export default ButtonIcon;
