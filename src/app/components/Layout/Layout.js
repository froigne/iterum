import PropTypes from "prop-types";
import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }) => (
  <div direction="column" className={classes.layout}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
