import Flex from "app/components/UI/Flex";
import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Layout from "app/components/Layout";
import PropTypes from "prop-types";
import React from "react";
import Shuffle from "app/components/Shuffle";

export const HomePage = ({
  translate,
  isLoading,
  onShuffle,
  shuffleResult,
  isValidate,
  onShuffleProgress,
  isShuffleFinish,
  onValidate
}) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header />
        <Flex direction="row" size={1} middle center>
          <Shuffle
            onShuffle={onShuffle}
            shuffleResult={shuffleResult}
            isShuffleFinish={isShuffleFinish}
            isValidate={isValidate}
            onValidate={onValidate}
            onShuffleProgress={onShuffleProgress}
          />
        </Flex>
        <Footer />
      </Layout>
    )}
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onShuffle: PropTypes.func,
  onShuffleProgress: PropTypes.func,
  onValidate: PropTypes.func,
  shuffleResult: PropTypes.string,
  isShuffleFinish: PropTypes.bool,
  isValidate: PropTypes.bool
};

export default HomePage;
