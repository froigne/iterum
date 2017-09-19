import Button from "app/components/UI/Button";
import Mixer from "app/components/UI/Mixer";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Shuffle.module.css";

export const Shuffle = ({ isShuffleFinish, shuffleResult, onShuffleProgress, ...props }) => (
  <div className={classes.shuffleContainer}>
    {!shuffleResult ? (
      <Mixer replacements=")%/](€!\#[&?)" fps={60} factor={1}>
        Shuffle text
      </Mixer>
    ) : (
      <div>
        {isShuffleFinish ? <Button.Icon animate>thumb_up</Button.Icon> : ""}
        <Mixer replacements=")%/](€!\#[&?)" fps={60} factor={10} onProgress={onShuffleProgress}>
          {shuffleResult}
        </Mixer>
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
