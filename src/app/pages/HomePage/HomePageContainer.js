import { compose, lifecycle, withHandlers, withState } from "recompose";
import { connect } from "react-redux";
import { fetchElementList } from "endpoints/api";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import panelProvider from "app/providers/panelProvider";
import shuffleProvider from "app/providers/shuffleProvider";

const mapActionCreators = {
  fetchElementList
};

function componentWillMount() {
  const { fetchElementList, setElements, setIsLoading, prepareCheckList } = this.props;

  fetchElementList().then(response => {
    const elements = Immutable.fromJS(response.data);
    setElements(elements);

    setIsLoading(false);
    prepareCheckList(elements, true);
  });
}

export default compose(
  withState("isLoading", "setIsLoading", true),
  withState("elements", "setElements", Immutable.List()),
  connect(null, mapActionCreators),
  panelProvider,
  shuffleProvider,
  withHandlers({
    fetchElementList
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
