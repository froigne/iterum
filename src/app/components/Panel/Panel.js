import Checkbox from "app/components/UI/Checkbox";
import Drawer from "app/components/UI/Drawer";
import ImmutablePropTypes from "react-immutable-proptypes";
import List from "app/components/UI/List";
import ListItem from "app/components/UI/ListItem";
import PropTypes from "prop-types";
import React from "react";
import Subheader from "app/components/UI/Subheader";
import classes from "./Panel.module.css";
import classnames from "classnames";

export const Panel = ({ className, title, choiceList, onCheck, ...props }) => (
  <Drawer className={classnames(className, classes.panelContainer)} docked={false} openSecondary={true} {...props}>
    <Subheader>{title}</Subheader>
    <List>
      {choiceList
        .entrySeq()
        .map(([index, choiceItem]) => (
          <ListItem
            key={index}
            leftCheckbox={<Checkbox checked={choiceItem.get("active")} onCheck={() => onCheck(index)} />}
            primaryText={choiceItem.get("name")}
          />
        ))}
    </List>
  </Drawer>
);

Panel.propTypes = {
  className: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  choiceList: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  title: PropTypes.string.isRequired
};

export default Panel;
