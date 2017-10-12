import Button from "app/components/UI/Button";
import PropTypes from "prop-types";
import React from "react";
import classes from "./PanelButton.module.css";
import classnames from "classnames";

export const PanelButton = ({ isOpen, onAddElement, onPanelOpen }) => (
  <Button.Float
    className={classnames(classes.shuffle__btn__panel, { [classes.suffle__btn__panel__open]: isOpen })}
    onClick={isOpen ? onAddElement : onPanelOpen}
  >
    {isOpen ? "add" : "list"}
  </Button.Float>
);

PanelButton.propTypes = {
  onPanelOpen: PropTypes.func.isRequired,
  onAddElement: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default PanelButton;
