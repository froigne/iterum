import { TextField as TextFieldMaterial } from "material-ui";
import PropTypes from "prop-types";
import React from "react";
import classes from "./TextField.module.css";
import classnames from "classnames";

export const TextField = ({ className, onChange, ...props }) => (
  <TextFieldMaterial
    className={classnames(classes.field, className)}
    onChange={event => onChange(event.target.value)}
    {...props}
  />
);

TextField.propTypes = {
  className: PropTypes.string
};

export default TextField;
