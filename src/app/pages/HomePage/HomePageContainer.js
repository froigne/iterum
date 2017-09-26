import { compose, lifecycle, withHandlers, withProps, withState } from "recompose";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import data from "./data.json";

function componentWillMount() {
  const { fetchElementList, setIsLoading, setCheckList } = this.props;

  fetchElementList().then(response => {
    setIsLoading(false);
    const checkList = Immutable.fromJS([...Array(response.size)].map((x, index) => true));
    setCheckList(checkList);
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

const onPanelOpen = ({ setIsOpen }) => () => {
  setIsOpen(true);
};

const onPanelClose = ({ setIsOpen }) => () => {
  setIsOpen(false);
};

const onCheck = ({ setCheckList, checkList }) => index => {
  setCheckList(checkList.update(index, value => !value));
};

export default compose(
  withState("isLoading", "setIsLoading", true),
  withState("isOpen", "setIsOpen", false),
  withState("elements", "setElements", Immutable.List()),
  withState("shuffleResult", "setShuffleResult", ""),
  withState("isShuffleFinish", "setIsShuffleFinish", false),
  withState("checkList", "setCheckList", Immutable.List()),
  withState("isValidate", "setIsValidate", false),
  withProps(({ elements, checkList }) => ({
    choiceList: Immutable.fromJS(
      elements.map((element, index) =>
        Immutable.fromJS({
          name: element,
          active: checkList.get(index)
        })
      )
    )
  })),
  withHandlers({
    roll
  }),
  withHandlers({
    fetchElementList,
    onShuffle,
    onShuffleProgress,
    onValidate,
    onPanelOpen,
    onPanelClose,
    onCheck
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
