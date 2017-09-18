import { compose, lifecycle, withHandlers, withState } from "recompose";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import data from "./data.json";

function componentWillMount() {
  const { fetchElementList, setIsLoading, setIsRolling, setSpeedRoll } = this.props;

  fetchElementList().then(() => {
    setIsLoading(false);

    setTimeout(() => {
      setIsRolling(false);
      setSpeedRoll(100);
    }, 2000);
  });
}

const fetchElementList = ({ setElements }) => () => {
  const elements = Immutable.fromJS(data);

  setElements(elements);

  return Promise.resolve();
};

const onRoll = ({ elements, setRollResult, setSpeedRoll, setIsRolling }) => e => {
  const rollIndex = Math.floor(Math.random() * (elements.size - 1));

  setIsRolling(true);

  setTimeout(() => {
    setIsRolling(false);
    setRollResult(rollIndex);
  }, 3000);
};

const onRollChange = () => e => {
  console.log(e);
};

const onClose = ({ setIsOpen }) => () => {
  setIsOpen(false);
};

export default compose(
  withState("isLoading", "setIsLoading", true),
  withState("isOpen", "setIsOpen", false),
  withState("elements", "setElements", Immutable.List()),
  withState("rollResult", "setRollResult", 0),
  withState("isRolling", "setIsRolling", true),
  withState("rollSpeed", "setSpeedRoll", 500),
  withHandlers({
    fetchElementList,
    onRoll,
    onRollChange,
    onClose
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
