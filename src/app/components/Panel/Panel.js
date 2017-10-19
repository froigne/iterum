import Button from "app/components/UI/Button";
import Checkbox from "app/components/UI/Checkbox";
import Drawer from "app/components/UI/Drawer";
import Flex from "app/components/UI/Flex";
import ImmutablePropTypes from "react-immutable-proptypes";
import List from "app/components/UI/List";
import ListItem from "app/components/UI/ListItem";
import PropTypes from "prop-types";
import React from "react";
import Subheader from "app/components/UI/Subheader";
import TextField from "app/components/UI/TextField";
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
  onPanelClose,
  onAddingElement,
  isAdding,
  addingWay,
  newElement,
  setNewElement,
  onAddElement,
  errorAdding
}) => (
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
                className={classes.panel__listItem}
                key={index}
                leftCheckbox={<Checkbox checked={choiceItem.get("active")} onCheck={() => onToggleCheck(index)} />}
                primaryText={choiceItem.get("value")}
              />
            ))}
          {addingWay ? (
            <form onSubmit={onAddElement}>
              <ListItem
                disabled={true}
                className={classnames(classes.panel__listItem__addElement, { [classes.show]: isAdding })}
                insetChildren={true}
                disableKeyboardFocus={true}
              >
                <TextField
                  name="newElement"
                  errorText={errorAdding && !newElement ? "This field is required" : ""}
                  maxLength={15}
                  autoFocus={true}
                  value={newElement}
                  onChange={setNewElement}
                />
              </ListItem>
            </form>
          ) : (
            ""
          )}
        </List>
      </Flex>
      <div
        className={classnames(classes.panel__btn__checkall, { [classes.isAllChecked]: isAllChecked })}
        onClick={onToggleCheckAll}
      >
        Select all
      </div>
    </Flex>
    <Button.Float
      className={classnames(classes.panel__btn__add, { [classes.panel__btn__adding]: addingWay })}
      onClick={addingWay ? onAddElement : onAddingElement}
    >
      {addingWay ? "check" : "add"}
    </Button.Float>
  </Drawer>
);

Panel.propTypes = {
  className: PropTypes.string,
  onToggleCheck: PropTypes.func.isRequired,
  onToggleCheckAll: PropTypes.func.isRequired,
  choiceList: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  title: PropTypes.string.isRequired,
  isAllChecked: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  addingWay: PropTypes.bool.isRequired,
  errorAdding: PropTypes.bool.isRequired,
  onPanelClose: PropTypes.func.isRequired,
  onAddingElement: PropTypes.func,
  setNewElement: PropTypes.func.isRequired,
  onAddElement: PropTypes.func.isRequired,
  newElement: PropTypes.string.isRequired
};

export default Panel;
