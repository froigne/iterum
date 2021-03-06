import Button from "app/components/UI/Button";
import Flex from "app/components/UI/Flex";
import Mixer from "app/components/UI/Mixer";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Roller.module.css";
import classnames from "classnames";

export const Roller = ({
  shuffleResult,
  className,
  isShuffleFinish,
  isValidate,
  onValidate,
  onShuffleProgress,
  onShuffle,
  onChoosingWay
}) => (
  <div
    className={classnames(className, classes.shuffle__content, {
      [classes.shuffle__done]: isShuffleFinish,
      [classes.isValidate]: isValidate
    })}
  >
    <div className={classes.shuffle__btn__validateContainer}>
      <Button.Icon className={classnames(classes.shuffle__btn__validate)} onClick={onValidate}>
        thumb_up
      </Button.Icon>
    </div>
    <div className={classes.shuffle__mixerContainer}>
      <Mixer
        className={classes.shuffle__mixer}
        replacements=")%/](€!\#[&?)"
        fps={60}
        factor={10}
        onProgress={onShuffleProgress}
      >
        {shuffleResult}
      </Mixer>
      <Flex direction="row" space="between" center className={classes.shuffle__btn__actions}>
        <button
          className={classes.shuffle__btn__choose}
          onClick={onChoosingWay}
          disabled={isShuffleFinish && isValidate}
        >
          I choose
        </button>
        <button className={classes.shuffle__btn__reroll} onClick={onShuffle} disabled={isShuffleFinish && isValidate}>
          I retry
        </button>
      </Flex>
    </div>
  </div>
);

Roller.propTypes = {
  className: PropTypes.string,
  onShuffleProgress: PropTypes.func.isRequired,
  shuffleResult: PropTypes.string.isRequired,
  onShuffle: PropTypes.func.isRequired,
  isShuffleFinish: PropTypes.bool.isRequired,
  isValidate: PropTypes.bool.isRequired,
  onValidate: PropTypes.func.isRequired,
  onChoosingWay: PropTypes.func.isRequired
};

export default Roller;
