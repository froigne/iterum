import Flex from "app/components/UI/Flex";
import Header from "app/components/Header";
import ImmutablePropTypes from "react-immutable-proptypes";
import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";
import Shuffle from "app/components/UI/Shuffle";

export const HomePage = ({
  translate,
  translateHtml,
  isLoading,
  isOpen,
  onClose,
  elements,
  onRoll,
  onRollChange,
  rollResult,
  isRolling,
  rollSpeed
}) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header />
        <Flex direction="row" size={1} middle center onClick={onRoll}>
          <Shuffle replacements="$$$$$$$$$$$$)%/](€!\#[&?)" fps={60} factor={5}>
            Shuffle text
          </Shuffle>
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
  onClose: PropTypes.func.isRequired,
  onRoll: PropTypes.func.isRequired,
  onRollChange: PropTypes.func.isRequired,
  rollSpeed: PropTypes.number.isRequired,
  rollResult: PropTypes.number.isRequired,
  isRolling: PropTypes.bool.isRequired
};

export default HomePage;
