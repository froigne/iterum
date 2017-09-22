import { compose, lifecycle, withHandlers, withState } from "recompose";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import data from "./data.json";

function componentWillMount() {
  const { fetchElementList, setIsLoading } = this.props;

  fetchElementList().then(() => {
    setIsLoading(false);
  });
}

const fetchElementList = ({ setElements }) => () => {
  const elements = Immutable.fromJS(data);

  setElements(elements);

  return Promise.resolve();
};

const roll = ({ elements }) => () => {
  const rollIndex = Math.floor(Math.random() * elements.size);

  return elements.get(rollIndex);
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

const onClose = ({ setIsOpen }) => () => {
  setIsOpen(false);
};

export default compose(
  withState("isLoading", "setIsLoading", true),
  withState("isOpen", "setIsOpen", false),
  withState("elements", "setElements", Immutable.List()),
  withState("shuffleResult", "setShuffleResult", ""),
  withState("isShuffleFinish", "setIsShuffleFinish", false),
  withState("isValidate", "setIsValidate", false),
  withHandlers({
    roll
  }),
  withHandlers({
    fetchElementList,
    onShuffle,
    onShuffleProgress,
    onValidate,
    onClose
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
