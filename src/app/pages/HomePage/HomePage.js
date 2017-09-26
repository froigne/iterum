import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Layout from "app/components/Layout";
import Panel from "app/components/Panel";
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
  onValidate,
  isOpen,
  onPanelOpen,
  onPanelClose,
  choiceList,
  onCheck
}) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header />

        <Shuffle
          onShuffle={onShuffle}
          shuffleResult={shuffleResult}
          isShuffleFinish={isShuffleFinish}
          isValidate={isValidate}
          onValidate={onValidate}
          onShuffleProgress={onShuffleProgress}
          onPanelOpen={onPanelOpen}
          isOpen={isOpen}
        />

        <Panel
          open={isOpen}
          onRequestChange={onPanelClose}
          title={translate("What my choice ?")}
          onCheck={onCheck}
          choiceList={choiceList}
        />

        <Footer />
      </Layout>
    )}
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool,
  onPanelOpen: PropTypes.func,
  onPanelClose: PropTypes.func,
  onShuffle: PropTypes.func,
  onShuffleProgress: PropTypes.func,
  onValidate: PropTypes.func,
  shuffleResult: PropTypes.string,
  isShuffleFinish: PropTypes.bool,
  isValidate: PropTypes.bool
};

export default HomePage;
