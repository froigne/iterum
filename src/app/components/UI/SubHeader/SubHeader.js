import { Subheader as SubheaderMaterial } from "material-ui";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Subheader.module.css";
import classnames from "classnames";

export const Subheader = ({ className, ...props }) => (
  <SubheaderMaterial className={classnames(classes.subheader, className)} {...props} />
);

Subheader.propTypes = {
  className: PropTypes.string
};

export default Subheader;
