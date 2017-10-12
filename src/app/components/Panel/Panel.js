import Checkbox from "app/components/UI/Checkbox";
import Drawer from "app/components/UI/Drawer";
import Flex from "app/components/UI/Flex";
import ImmutablePropTypes from "react-immutable-proptypes";
import List from "app/components/UI/List";
import ListItem from "app/components/UI/ListItem";
import PanelButton from "app/components/PanelButton";
import PropTypes from "prop-types";
import React from "react";
import Subheader from "app/components/UI/Subheader";
import classes from "./Panel.module.css";
import classnames from "classnames";

export const Panel = ({
  className,
  isOpen,
  title,
  choiceList,
  onToggleCheck,
  onToggleCheckAll,
  isAllChecked,
  onPanelOpen,
  onPanelClose,
  onAddElement
}) => (
  <div>
    <Drawer
      className={classnames(className, classes.panelContainer)}
      open={isOpen}
      docked={false}
      openSecondary={true}
      onRequestChange={onPanelClose}
    >
      <Flex direction="column" className={classes.panel__content}>
        <Subheader>{title}</Subheader>
        <Flex size={1} className={classes.panel__listContainer}>
          <List>
            {choiceList
              .entrySeq()
              .map(([index, choiceItem]) => (
                <ListItem
                  key={index}
                  leftCheckbox={<Checkbox checked={choiceItem.get("active")} onCheck={() => onToggleCheck(index)} />}
                  primaryText={choiceItem.get("value")}
                />
              ))}
          </List>
        </Flex>
        <div
          className={classnames(classes.panel__btn__checkall, { [classes.isAllChecked]: isAllChecked })}
          onClick={onToggleCheckAll}
        >
          Select all
        </div>
      </Flex>
    </Drawer>

    <PanelButton isOpen={isOpen} onPanelOpen={onPanelOpen} onAddElement={onAddElement} />
  </div>
);

Panel.propTypes = {
  className: PropTypes.string,
  onToggleCheck: PropTypes.func.isRequired,
  onToggleCheckAll: PropTypes.func.isRequired,
  choiceList: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  title: PropTypes.string.isRequired,
  isAllChecked: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPanelOpen: PropTypes.func,
  onPanelClose: PropTypes.func.isRequired,
  onAddElement: PropTypes.func
};

export default Panel;
