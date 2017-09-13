import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";
import classes from "./HomePage.module.css";

export const HomePage = ({ translate, translateHtml, isLoading, isOpen, onClose }) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <div className={classes.pageContainer}>
          <div className={classes.homePageContainer}>Bienvenue !</div>
        </div>
      </Layout>
    )}
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default HomePage;
