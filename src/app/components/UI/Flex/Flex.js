import PropTypes from "prop-types";
import React from "react";
import classes from "./Flex.module.css";
import classnames from "classnames";

export const Flex = ({ size, className, children, direction, middle, center, end, wrap, space, right, ...props }) => (
  <div
    className={classnames(className, classes[`flex-${size}`], {
      [classes[`flex-${direction}`]]: direction,
      [classes.middle]: middle,
      [classes.center]: center,
      [classes.end]: end,
      [classes["flex-wrap"]]: wrap,
      [classes[`space-${space}`]]: space,
      [classes.right]: right
    })}
    {...props}
  >
    {children}
  </div>
);

Flex.propTypes = {
  size: PropTypes.number,
  direction: PropTypes.string,
  middle: PropTypes.bool,
  end: PropTypes.bool,
  wrap: PropTypes.bool,
  right: PropTypes.bool,
  space: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Flex;
