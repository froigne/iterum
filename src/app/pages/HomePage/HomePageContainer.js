import { compose, lifecycle, withHandlers, withState } from "recompose";
import { connect } from "react-redux";
import { deleteElement, fetchElementList, saveElement } from "endpoints/api";
import { getElements } from "endpoints/redux/selectors";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";
import panelProvider from "app/providers/panelProvider";
import shuffleProvider from "app/providers/shuffleProvider";

const mapStateToProps = (state, { elementIds }) => ({
  elements: getElements(state, elementIds)
});

const mapActionCreators = {
  fetchElementList,
  saveElement,
  deleteElement
};

function componentWillMount() {
  const { fetchElementList, setElementIds, setIsLoading, prepareCheckList } = this.props;

  fetchElementList().then(response => {
    const elementListIds = response.map(entity => entity.get("id"));
    setElementIds(elementListIds);
    prepareCheckList(elementListIds, true);
    setIsLoading(false);
  });
}

const onAddElement = ({
  newElement,
  setElementIds,
  saveElement,
  elementIds,
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
    saveElement(null, { value: newElement, count: 0 }).then(response => {
      setIsAdding(false);
      setTimeout(() => {
        setElementIds(elementIds.push(response.get("id")));
        setNewElement("");
        setAddingWay(false);
      }, 300);
    });
  }
};

const onDeleteElement = ({ deleteElement, doFetchElementList, setElementIds, elementIds }) => elementId => {
  const index = elementIds.indexOf(elementId);
  setElementIds(elementIds.delete(index));
  deleteElement(elementId);
};

export default compose(
  connect(null, mapActionCreators),
  withState("isLoading", "setIsLoading", true),
  withState("elementIds", "setElementIds"),
  connect(mapStateToProps),
  panelProvider,
  shuffleProvider,
  withHandlers({ onAddElement, onDeleteElement }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
