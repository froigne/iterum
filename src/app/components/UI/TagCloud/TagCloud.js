import { TagCloud as ReactTagCloud } from "react-tagcloud";
import PropTypes from "prop-types";
import React from "react";
import classes from "./TagCloud.module.css";
import classnames from "classnames";

const tagRenderer = (tag, fontSize, color) => {
  return (
    <span className={classes.tagCloud__item} key={tag.id} style={{ color, fontSize: `${fontSize}vh` }}>
      {tag.value}
    </span>
  );
};

export const TagCloud = ({ className, ...props }) => (
  <ReactTagCloud className={classnames(classes.tagCloud, className)} renderer={tagRenderer} {...props} />
);

TagCloud.propTypes = {
  className: PropTypes.string
};

export default TagCloud;
