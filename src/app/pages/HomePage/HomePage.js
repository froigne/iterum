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
  onToggleCheckAll,
  isAllChecked,
  onToggleCheck,
  onChoosing,
  isChoosingWay
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
          choiceList={choiceList}
          isOpen={isOpen}
          isChoosingWay={isChoosingWay}
          onChoosing={onChoosing}
        />

        <Panel
          open={isOpen}
          onRequestChange={onPanelClose}
          title={translate("What my choice ?")}
          onToggleCheck={onToggleCheck}
          onToggleCheckAll={onToggleCheckAll}
          choiceList={choiceList}
          isAllChecked={isAllChecked}
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
  onToggleCheckAll: PropTypes.func,
  shuffleResult: PropTypes.string,
  isShuffleFinish: PropTypes.bool,
  isValidate: PropTypes.bool,
  isAllChecked: PropTypes.bool,
  onChoosing: PropTypes.func,
  isChoosingWay: PropTypes.bool
};

export default HomePage;
