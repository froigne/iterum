import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Slider.module.css";
import classnames from "classnames";

export const Slider = ({ className, ...props }) => (
  <Carousel className={classnames(classes.slider, className)} {...props} />
);

Slider.propTypes = {
  className: PropTypes.string
};

export default Slider;
