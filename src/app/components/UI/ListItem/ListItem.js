import { ListItem as ListItemMaterial } from "material-ui/ListItem";
import PropTypes from "prop-types";
import React from "react";
import classes from "./ListItem.module.css";
import classnames from "classnames";

export const ListItem = ({ className, ...props }) => (
  <ListItemMaterial className={classnames(classes.listItem, className)} {...props} />
);

ListItem.propTypes = {
  className: PropTypes.string
};

export default ListItem;
