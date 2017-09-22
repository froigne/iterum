import Icon from "../Icon";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";

export const ButtonIcon = ({ className, children, ...props }) => (
  <button className={classnames(className, classes.btnIcon)} {...props}>
    <Icon children={children} />
  </button>
);

ButtonIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ButtonIcon;
