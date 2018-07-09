import { Drawer as DrawerMaterial } from "material-ui";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Drawer.module.css";
import classnames from "classnames";

export const Drawer = ({ className, ...props }) => (
  <DrawerMaterial className={classnames(classes.drawer, className)} {...props} />
);

Drawer.propTypes = {
  className: PropTypes.string
};

export default Drawer;
