import Button from "app/components/UI/Button";
import Flex from "app/components/UI/Flex";
import Mixer from "app/components/UI/Mixer";
import PropTypes from "prop-types";
import React from "react";
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
  <Flex direction="row" size={1} middle center className={classes.shuffleContainer}>
    {!shuffleResult ? (
      <div onClick={onShuffle}>
        <Mixer className={classes.shuffle__mixer} replacements=")%/](€!\#[&?)" fps={60} factor={1}>
          Shuffle text
        </Mixer>
      </div>
    ) : (
      <div
        className={classnames(classes.shuffle__content, {
          [classes.shuffle__done]: isShuffleFinish
        })}
      >
        <div className={classes.shuffle__btn__validateContainer}>
          <Button.Icon
            className={classnames(classes.shuffle__btn__validate, {
              [classes.isValidate]: isValidate
            })}
            onClick={onValidate}
          >
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
            <div className={classes.shuffle__btn__choose}>Je choisis</div>
            <div className={classes.shuffle__btn__reroll} onClick={onShuffle}>
              Je relance
            </div>
          </Flex>
        </div>
      </div>
    )}

    <Button.Float
      className={classnames(classes.shuffle__btn__panel, { [classes.panel__isOpen]: isOpen })}
      onClick={onPanelOpen}
    />
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
