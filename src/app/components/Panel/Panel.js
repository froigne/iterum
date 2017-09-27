import Checkbox from "app/components/UI/Checkbox";
import Drawer from "app/components/UI/Drawer";
import Flex from "app/components/UI/Flex";
import ImmutablePropTypes from "react-immutable-proptypes";
import List from "app/components/UI/List";
import ListItem from "app/components/UI/ListItem";
import PropTypes from "prop-types";
import React from "react";
import Subheader from "app/components/UI/Subheader";
import classes from "./Panel.module.css";
import classnames from "classnames";

export const Panel = ({ className, title, choiceList, onCheck, onChekAll, isAllChecked, ...props }) => (
  <Drawer className={classnames(className, classes.panelContainer)} docked={false} openSecondary={true} {...props}>
    <Flex direction="column" className={classes.panel__content}>
      <Subheader>{title}</Subheader>
      <Flex size={1} className={classes.panel__listContainer}>
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
      </Flex>
      <div
        className={classnames(classes.panel__btn__checkall, { [classes.isAllChecked]: isAllChecked })}
        onClick={onChekAll}
      >
        Tout sélectionner
      </div>
    </Flex>
  </Drawer>
);

Panel.propTypes = {
  className: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  onChekAll: PropTypes.func.isRequired,
  choiceList: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  title: PropTypes.string.isRequired,
  isAllChecked: PropTypes.bool.isRequired
};

export default Panel;
