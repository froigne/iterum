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
        <Flex direction="row" size={1} middle center>
          <Roller
            onClick={onRoll}
            elements={elements}
            onChange={onRollChange}
            rollSpeed={rollSpeed}
            isRolling={isRolling}
            rollResult={rollResult}
          />
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
