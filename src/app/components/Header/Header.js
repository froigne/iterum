import Button from "app/components/UI/Button";
import Flex from "app/components/UI/Flex";
import Link from "app/components/UI/Link";
import PropTypes from "prop-types";
import React from "react";
import Title from "app/components/UI/Title";
import classes from "./Header.module.css";

export const Header = ({ onPanelOpen }) => (
  <Flex direction="row" middle center className={classes.headerContainer}>
    <Link to="/">
      <Title component="h1" className={classes.header__title}>
        Iterum
      </Title>
    </Link>
    <Button.IconFlat className={classes.header__btn__panel} size={"small"} onClick={onPanelOpen}>
      list
    </Button.IconFlat>
  </Flex>
);

Header.propTypes = {
  onPanelOpen: PropTypes.func.isRequired
};

export default Header;
