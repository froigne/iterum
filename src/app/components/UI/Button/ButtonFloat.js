import FloatingActionButton from "material-ui/FloatingActionButton";
import Icon from "app/components/UI/Icon";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";
import classnames from "classnames";

export const ButtonFloat = ({ className, children, ...props }) => (
  <FloatingActionButton className={classnames(classes.btnFloat, className)} {...props}>
    <Icon>{children}</Icon>
  </FloatingActionButton>
);

ButtonFloat.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ButtonFloat;
