import { compose, lifecycle, withHandlers, withState } from "recompose";
import { connect } from "react-redux";
import { deleteElement, fetchElementList, postElement } from "endpoints/api";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import Immutable from "immutable";
import panelProvider from "app/providers/panelProvider";
import shuffleProvider from "app/providers/shuffleProvider";

const mapActionCreators = {
  fetchElementList,
  postElement,
  deleteElement
};

function componentWillMount() {
  const { doFetchElementList } = this.props;

  doFetchElementList();
}

const onAddElement = ({
  newElement,
  doFetchElementList,
  postElement,
  setNewElement,
  setIsAdding,
  setAddingWay,
  setErrorAdding
}) => e => {
  e.preventDefault();

  if (!newElement) {
    setErrorAdding(true);
  } else {
    setErrorAdding(false);
    postElement({ value: newElement, count: 0 }).then(() => {
      doFetchElementList();
      setIsAdding(false);
      setTimeout(() => {
        setNewElement("");
        setAddingWay(false);
      }, 300);
    });
  }
};

const onDeleteElement = ({ deleteElement, doFetchElementList }) => elementId => {
  deleteElement(elementId).then(() => {
    doFetchElementList();
  });
};

const doFetchElementList = ({ fetchElementList, setElements, setIsLoading, prepareCheckList }) => () => {
  fetchElementList().then(response => {
    const elements = Immutable.fromJS(response.data);
    setElements(elements);

    setIsLoading(false);
    prepareCheckList(elements, true);
  });
};

export default compose(
  withState("isLoading", "setIsLoading", true),
  withState("elements", "setElements", Immutable.List()),
  connect(null, mapActionCreators),
  panelProvider,
  shuffleProvider,
  withHandlers({
    doFetchElementList
  }),
  withHandlers({ onAddElement, onDeleteElement }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
