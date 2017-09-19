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

const onShuffle = ({ elements, setShuffleResult, setIsShuffleFinish }) => e => {
  const rollIndex = Math.floor(Math.random() * (elements.size - 1));

  setIsShuffleFinish(false);
  setTimeout(() => setShuffleResult(elements.get(rollIndex)), 300);
};

const onShuffleProgress = ({ setIsShuffleFinish }) => progress => {
  if (progress.done === progress.total) {
    setIsShuffleFinish(true);
  }
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
  withHandlers({
    fetchElementList,
    onShuffle,
    onShuffleProgress,
    onClose
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
