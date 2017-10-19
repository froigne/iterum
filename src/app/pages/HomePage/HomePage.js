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
  onAddingElement,
  choiceList,
  onToggleCheckAll,
  isAllChecked,
  onToggleCheck,
  onChoosingWay,
  onChoose,
  isChoosingWay,
  isAdding,
  addingWay,
  newElement,
  setNewElement,
  onAddElement,
  errorAdding
}) => (
  <div>
    {isLoading ? (
      <div>load</div>
    ) : (
      <Layout>
        <Header onPanelOpen={onPanelOpen} />

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
          isOpen={isOpen}
          onAddingElement={onAddingElement}
          onPanelClose={onPanelClose}
          title={translate("What my choice ?")}
          onToggleCheck={onToggleCheck}
          onToggleCheckAll={onToggleCheckAll}
          choiceList={choiceList}
          isAllChecked={isAllChecked}
          isAdding={isAdding}
          addingWay={addingWay}
          onAddElement={onAddElement}
          newElement={newElement}
          errorAdding={errorAdding}
          setNewElement={setNewElement}
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
  onAddingElement: PropTypes.func,
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
  isChoosingWay: PropTypes.bool,
  isAdding: PropTypes.bool,
  addingWay: PropTypes.bool,
  newElement: PropTypes.string,
  setNewElement: PropTypes.func,
  onAddElement: PropTypes.func,
  errorAdding: PropTypes.bool
};

export default HomePage;
