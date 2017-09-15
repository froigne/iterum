import Flex from "app/components/UI/Flex";
import Header from "app/components/Header";
import ImmutablePropTypes from "react-immutable-proptypes";
import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";
import Roller from "app/components/Roller";

export const HomePage = ({ translate, translateHtml, isLoading, isOpen, onClose, elements }) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header />
        <Flex direction="row" size={1} middle center>
          <Roller elements={elements} />
        </Flex>
      </Layout>
    )}
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  elements: ImmutablePropTypes.list,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default HomePage;
