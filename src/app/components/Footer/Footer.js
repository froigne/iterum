import Flex from "app/components/UI/Flex";
import React from "react";
import classes from "./Footer.module.css";

export const Header = () => (
  <Flex direction="row" middle center className={classes.footerContainer}>
    © 2017 Iterum
  </Flex>
);

export default Header;
