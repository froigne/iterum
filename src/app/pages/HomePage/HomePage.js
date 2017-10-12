import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Layout from "app/components/Layout";
import Panel from "app/components/Panel";
import PanelButton from "app/components/PanelButton";
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
  onAddElement,
  choiceList,
  onToggleCheckAll,
  isAllChecked,
  onToggleCheck,
  onChoosingWay,
  onChoose,
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
          choiceList={choiceList}
          isChoosingWay={isChoosingWay}
          onChoosingWay={onChoosingWay}
          onChoose={onChoose}
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

        <PanelButton isOpen={isOpen} onPanelOpen={onPanelOpen} onAddElement={onAddElement} />

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
  onAddElement: PropTypes.func,
  onShuffle: PropTypes.func,
  onShuffleProgress: PropTypes.func,
  onValidate: PropTypes.func,
  onToggleCheckAll: PropTypes.func,
  shuffleResult: PropTypes.string,
  isShuffleFinish: PropTypes.bool,
  isValidate: PropTypes.bool,
  isAllChecked: PropTypes.bool,
  onChoosingWay: PropTypes.func,
  onChoose: PropTypes.func,
  isChoosingWay: PropTypes.bool
};

export default HomePage;
