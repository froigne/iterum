import { compose, withHandlers, withState } from "recompose";

const roll = ({ choiceList }) => () => {
  const activeList = choiceList.filter(item => item.get("active") === true);
  const rollIndex = Math.floor(Math.random() * activeList.size);

  return activeList.getIn([rollIndex, "name"]);
};

const onShuffle = ({ roll, setShuffleResult, setIsShuffleFinish, shuffleResult, setIsValidate }) => e => {
  let result = roll();

  while (shuffleResult === result) {
    result = roll();
  }

  setIsShuffleFinish(false);
  setTimeout(() => {
    setIsValidate(false);
    setShuffleResult(result);
  }, 300);
};

const onShuffleProgress = ({ setIsShuffleFinish }) => progress => {
  if (progress.done === progress.total) {
    setIsShuffleFinish(true);
  }
};

const onValidate = ({ setIsValidate }) => () => {
  setIsValidate(true);
};

export default compose(
  withState("shuffleResult", "setShuffleResult", ""),
  withState("isShuffleFinish", "setIsShuffleFinish", false),
  withState("isValidate", "setIsValidate", false),
  withHandlers({
    roll
  }),
  withHandlers({
    onShuffle,
    onShuffleProgress,
    onValidate
  })
);
