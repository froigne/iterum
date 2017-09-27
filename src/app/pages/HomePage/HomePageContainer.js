import { compose, lifecycle, withHandlers, withState } from "recompose";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import data from "./data.json";
import panelProvider from "app/providers/panelProvider";
import shuffleProvider from "app/providers/shuffleProvider";

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

export default compose(
  withState("isLoading", "setIsLoading", true),
  withState("elements", "setElements", Immutable.List()),
  panelProvider,
  shuffleProvider,
  withHandlers({
    fetchElementList
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
