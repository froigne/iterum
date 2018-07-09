import { List as ListMaterial } from "material-ui";
import PropTypes from "prop-types";
import React from "react";
import classes from "./List.module.css";
import classnames from "classnames";

export const List = ({ className, ...props }) => (
  <ListMaterial className={classnames(classes.list, className)} {...props} />
);

List.propTypes = {
  className: PropTypes.string
};

export default List;
