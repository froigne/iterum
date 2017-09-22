import Checkbox from "app/components/UI/Checkbox";
import Drawer from "app/components/UI/Drawer";
import List from "app/components/UI/List";
import ListItem from "app/components/UI/ListItem";
import PropTypes from "prop-types";
import React from "react";
import Subheader from "app/components/UI/Subheader";
import classes from "./Panel.module.css";
import classnames from "classnames";

export const Panel = ({ className, title, ...props }) => (
  <Drawer className={classnames(className, classes.panelContainer)} docked={false} openSecondary={true} {...props}>
    <Subheader>{title}</Subheader>
    <List>
      <ListItem leftCheckbox={<Checkbox />} primaryText="First" />
    </List>
  </Drawer>
);

Panel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Panel;
