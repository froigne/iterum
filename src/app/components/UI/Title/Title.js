import PropTypes from "prop-types";
import React from "react";
import classes from "./Title.module.css";

export const Title = ({ component = "h1", className, children }) =>
  React.createElement(component, { className: `${classes.title} ${className}` }, [children]);

Title.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Title;
