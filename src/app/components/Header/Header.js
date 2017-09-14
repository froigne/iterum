import Flex from "app/components/UI/Flex";
import Link from "app/components/UI/Link";
import React from "react";
import Title from "app/components/UI/Title";
import classes from "./Header.module.css";
import logo from "./logo.png";

export const Header = () => (
  <Flex direction="row" middle center className={classes.headerContainer}>
    <Link to="/" className={classes.header__logo}>
      <img src={logo} alt="Iterum" />
    </Link>
    <Title component="h1" className={classes.header__title}>
      Iterum
    </Title>
  </Flex>
);

export default Header;
