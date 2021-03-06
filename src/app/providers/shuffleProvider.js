import { compose, withHandlers, withState } from "recompose";

const roll = ({ choiceList }) => () => {
  const activeList = choiceList.filter(item => item.get("active") === true);
  const rollIndex = Math.floor(Math.random() * activeList.size);

  return activeList.getIn([rollIndex, "value"]);
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

const onChoosingWay = ({ setIsChoosingWay, setIsShuffleFinish }) => () => {
  setIsChoosingWay(true);
  setIsShuffleFinish(false);
};

const onChoose = ({ setIsChoosingWay, setShuffleResult }) => result => {
  setShuffleResult(result);
  setIsChoosingWay(false);
};

export default compose(
  withState("shuffleResult", "setShuffleResult", ""),
  withState("isShuffleFinish", "setIsShuffleFinish", false),
  withState("isValidate", "setIsValidate", false),
  withState("isChoosingWay", "setIsChoosingWay", false),
  withHandlers({
    roll
  }),
  withHandlers({
    onShuffle,
    onShuffleProgress,
    onValidate,
    onChoosingWay,
    onChoose
  })
);
