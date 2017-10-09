import Button from "app/components/UI/Button";
import Flex from "app/components/UI/Flex";
import ImmutablePropTypes from "react-immutable-proptypes";
import Mixer from "app/components/UI/Mixer";
import PropTypes from "prop-types";
import React from "react";
import Roller from "app/components/Roller";
import TagCloud from "app/components/UI/TagCloud";
import classes from "./Shuffle.module.css";
import classnames from "classnames";

export const Shuffle = ({
  choiceList,
  isShuffleFinish,
  shuffleResult,
  onShuffleProgress,
  onShuffle,
  onValidate,
  isValidate,
  onPanelOpen,
  isOpen,
  onChoosingWay,
  onChoose,
  isChoosingWay
}) => {
  const activeList = choiceList.filter(item => item.get("active") === true);

  return (
    <Flex
      direction="row"
      size={1}
      middle
      center
      className={classnames(classes.shuffleContainer, { [classes.panel__isOpen]: isOpen })}
    >
      {!shuffleResult ? (
        <div className={classes.shuffle__element} onClick={onShuffle}>
          <Mixer className={classes.shuffle__mixer} replacements=")%/](€!\#[&?)" fps={60} factor={1}>
            I don't know what i want
          </Mixer>
        </div>
      ) : (
        ""
      )}

      {shuffleResult && !isChoosingWay ? (
        <Roller
          className={classes.shuffle__element}
          onShuffleProgress={onShuffleProgress}
          shuffleResult={shuffleResult}
          onShuffle={onShuffle}
          isShuffleFinish={isShuffleFinish}
          isValidate={isValidate}
          onValidate={onValidate}
          onChoosingWay={onChoosingWay}
        />
      ) : (
        ""
      )}

      {isChoosingWay ? (
        <TagCloud
          className={classes.shuffle__element}
          minSize={35}
          maxSize={60}
          tags={activeList.toJS()}
          disableRandomColor={true}
          onClick={tag => onChoose(tag.value)}
        />
      ) : (
        ""
      )}

      <Button.Float className={classes.shuffle__btn__panel} onClick={onPanelOpen}>
        list
      </Button.Float>
    </Flex>
  );
};

Shuffle.propTypes = {
  choiceList: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  onShuffleProgress: PropTypes.func,
  shuffleResult: PropTypes.string.isRequired,
  onShuffle: PropTypes.func.isRequired,
  isShuffleFinish: PropTypes.bool,
  isValidate: PropTypes.bool,
  onValidate: PropTypes.func,
  onPanelOpen: PropTypes.func.isRequired,
  onChoosingWay: PropTypes.func,
  onChoose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isChoosingWay: PropTypes.bool.isRequired
};

export default Shuffle;
