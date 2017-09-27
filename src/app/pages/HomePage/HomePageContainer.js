import { compose, lifecycle, withHandlers, withState } from "recompose";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import data from "./data.json";
import panelProvider from "app/providers/panelProvider";

function componentWillMount() {
  const { fetchElementList, setIsLoading, prepareCheckList } = this.props;

  fetchElementList().then(response => {
    setIsLoading(false);
    prepareCheckList(response, true);
  });
}

const fetchElementList = ({ setElements }) => () => {
  const elements = Immutable.fromJS(data);

  setElements(elements);

  return Promise.resolve(elements);
};

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
  withState("isLoading", "setIsLoading", true),
  withState("elements", "setElements", Immutable.List()),
  withState("shuffleResult", "setShuffleResult", ""),
  withState("isShuffleFinish", "setIsShuffleFinish", false),
  withState("isValidate", "setIsValidate", false),
  panelProvider,
  withHandlers({
    roll
  }),
  withHandlers({
    fetchElementList,
    onShuffle,
    onShuffleProgress,
    onValidate
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
