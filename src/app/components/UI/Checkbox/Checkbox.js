import { Checkbox as CheckboxMaterial } from "material-ui";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Checkbox.module.css";
import classnames from "classnames";

export const Checkbox = ({ className, ...props }) => (
  <CheckboxMaterial className={classnames(classes.checkbox, className)} {...props} />
);

Checkbox.propTypes = {
  className: PropTypes.string
};

export default Checkbox;
