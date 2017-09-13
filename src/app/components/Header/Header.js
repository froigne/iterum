import Flex from "app/components/UI/Flex";
import Link from "app/components/UI/Link";
import PropTypes from "prop-types";
import React from "react";
import Title from "app/components/UI/Title";
import classes from "./Header.module.css";
import logo from "./logo.png";

export const Header = () => (
  <div className={classes.brandNavbar}>
    <Flex direction="row" middle>
      <Flex size={1}>
        <Link to="/" className={classes.brandLogo}>
          <img src={logo} alt="Iterum" />
        </Link>
        <Title component="h1" className={classes.brandName}>
          Iterum
        </Title>
      </Flex>
    </Flex>
  </div>
);

export default Header;
