import Button from "app/components/UI/Button";
import Flex from "app/components/UI/Flex";
import Mixer from "app/components/UI/Mixer";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Shuffle.module.css";
import classnames from "classnames";

export const Shuffle = ({ isShuffleFinish, shuffleResult, onShuffleProgress, ...props }) => (
  <div className={classes.shuffleContainer}>
    {!shuffleResult ? (
      <Mixer className={classes.shuffle__mixer} replacements=")%/](€!\#[&?)" fps={60} factor={1}>
        Shuffle text
      </Mixer>
    ) : (
      <div
        className={classnames(classes.shuffle__content, {
          [classes.shuffle__done]: isShuffleFinish
        })}
      >
        <div className={classes.shuffle__btn__validateContainer}>
          <Button.Icon className={classes.shuffle__btn__validate}>thumb_up</Button.Icon>
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
            <div className={classes.shuffle__btn__choose}>Je choisis</div>
            <div className={classes.shuffle__btn__reroll}>Je relance</div>
          </Flex>
        </div>
      </div>
    )}
  </div>
);

Shuffle.propTypes = {
  onShuffleProgress: PropTypes.func.isRequired,
  shuffleResult: PropTypes.string.isRequired,
  isShuffleFinish: PropTypes.bool
};

export default Shuffle;
