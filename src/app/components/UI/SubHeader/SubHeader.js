import { SubHeader as SubHeaderMaterial } from "material-ui";
import PropTypes from "prop-types";
import React from "react";
import classes from "./SubHeader.module.css";
import classnames from "classnames";

export const SubHeader = ({ className, ...props }) => (
  <SubHeaderMaterial className={classnames(classes.subHeader, className)} {...props} />
);

SubHeader.propTypes = {
  className: PropTypes.string
};

export default SubHeader;
