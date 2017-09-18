import Flex from "app/components/UI/Flex";
import Header from "app/components/Header";
import ImmutablePropTypes from "react-immutable-proptypes";
import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";
import Roller from "app/components/Roller";

export const HomePage = ({
  translate,
  translateHtml,
  isLoading,
  isOpen,
  onClose,
  elements,
  onRoll,
  onRollChange,
  resultIndex,
  isRolling,
  speedRoll
}) => (
  <div>
    <Layout>
      <Header />
      <Flex direction="row" size={1} middle center>
        <Roller
          elements={elements}
          onClick={onRoll}
          onChange={onRollChange}
          autoplaySpeed={speedRoll}
          autoplay={isRolling}
          slickGoTo={resultIndex}
        />
      </Flex>
    </Layout>
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
  speedRoll: PropTypes.number.isRequired,
  resultIndex: PropTypes.number.isRequired,
  isRolling: PropTypes.bool.isRequired
};

export default HomePage;
