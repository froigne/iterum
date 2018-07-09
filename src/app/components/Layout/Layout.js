import Flex from "app/components/UI/Flex";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }) => (
  <Flex direction="column" className={classes.layoutContainer}>
    {children}
  </Flex>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
