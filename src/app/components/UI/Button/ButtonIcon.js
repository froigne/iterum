import Icon from "../Icon";
import IconButton from "material-ui/IconButton";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";

export const ButtonIcon = ({ className, children, size, ...props }) => (
  <IconButton className={classnames(className, classes.btnIcon, { [classes[`${size}`]]: size })} {...props}>
    <Icon children={children} />
  </IconButton>
);

ButtonIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ButtonIcon;
