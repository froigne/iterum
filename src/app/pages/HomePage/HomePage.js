import Flex from "app/components/UI/Flex";
import Header from "app/components/Header";
import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";
import Shuffle from "app/components/Shuffle";

export const HomePage = ({ translate, isLoading, onShuffle, shuffleResult, onShuffleProgress, isShuffleFinish }) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header />
        <Flex direction="row" size={1} middle center onClick={onShuffle}>
          <Shuffle
            shuffleResult={shuffleResult}
            isShuffleFinish={isShuffleFinish}
            onShuffleProgress={onShuffleProgress}
          />
        </Flex>
      </Layout>
    )}
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onShuffle: PropTypes.func.isRequired,
  onShuffleProgress: PropTypes.func.isRequired,
  shuffleResult: PropTypes.string.isRequired,
  isShuffleFinish: PropTypes.bool
};

export default HomePage;
