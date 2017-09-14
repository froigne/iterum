import Header from "app/components/Header";
import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";

export const HomePage = ({ translate, translateHtml, isLoading, isOpen, onClose }) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header />
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
