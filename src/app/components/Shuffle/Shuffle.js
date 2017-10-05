import Button from "app/components/UI/Button";
import Flex from "app/components/UI/Flex";
import Mixer from "app/components/UI/Mixer";
import PropTypes from "prop-types";
import React from "react";
import Roller from "app/components/Roller";
import classes from "./Shuffle.module.css";
import classnames from "classnames";

export const Shuffle = ({
  isShuffleFinish,
  shuffleResult,
  onShuffleProgress,
  onShuffle,
  onValidate,
  isValidate,
  onPanelOpen,
  isOpen
}) => (
  <Flex
    direction="row"
    size={1}
    middle
    center
    className={classnames(classes.shuffleContainer, { [classes.panel__isOpen]: isOpen })}
  >
    {!shuffleResult ? (
      <div onClick={onShuffle}>
        <Mixer className={classes.shuffle__mixer} replacements=")%/](€!\#[&?)" fps={60} factor={1}>
          Shuffle text
        </Mixer>
      </div>
    ) : (
      <Roller
        onShuffleProgress={onShuffleProgress}
        shuffleResult={shuffleResult}
        onShuffle={onShuffle}
        isShuffleFinish={isShuffleFinish}
        isValidate={isValidate}
        onValidate={onValidate}
      />
    )}

    <Button.Float className={classes.shuffle__btn__panel} onClick={onPanelOpen}>
      list
    </Button.Float>
  </Flex>
);

Shuffle.propTypes = {
  onShuffleProgress: PropTypes.func.isRequired,
  shuffleResult: PropTypes.string.isRequired,
  onShuffle: PropTypes.func.isRequired,
  isShuffleFinish: PropTypes.bool.isRequired,
  isValidate: PropTypes.bool.isRequired,
  onValidate: PropTypes.func.isRequired,
  onPanelOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Shuffle;
