import { compose, withHandlers, withProps, withState } from "recompose";
import Immutable from "immutable";

const prepareCheckList = ({ setCheckList }) => (list, value) => {
  const checkList = Immutable.fromJS([...Array(list.size)].map((x, index) => value));
  setCheckList(checkList);
};

const onAddingElement = ({ setAddingWay, setIsAdding }) => () => {
  setIsAdding(true);
  setAddingWay(true);
};

const onPanelOpen = ({ setIsOpen }) => () => {
  setIsOpen(true);
};

const onPanelClose = ({ setIsOpen, setAddingWay, setIsAdding, setNewElement }) => () => {
  setIsOpen(false);
  setIsAdding(false);
  setAddingWay(false);
  setNewElement("");
};

const onToggleCheck = ({ setCheckList, checkList }) => index => {
  setCheckList(checkList.update(index, value => !value));
};

const onToggleCheckAll = ({ elements, setIsAllChecked, isAllChecked, prepareCheckList }) => () => {
  const nextValue = !isAllChecked;

  prepareCheckList(elements, nextValue);
  setIsAllChecked(nextValue);
};

export default compose(
  withState("isOpen", "setIsOpen", false),
  withState("checkList", "setCheckList", Immutable.List()),
  withState("isAllChecked", "setIsAllChecked", true),
  withState("isAdding", "setIsAdding", false),
  withState("addingWay", "setAddingWay", false),
  withState("errorAdding", "setErrorAdding", false),
  withState("newElement", "setNewElement", ""),
  withProps(({ elements, checkList }) => ({
    choiceList: Immutable.fromJS(elements.map((element, index) => element.merge({ active: checkList.get(index) })))
  })),
  withHandlers({
    prepareCheckList
  }),
  withHandlers({
    onPanelOpen,
    onPanelClose,
    onToggleCheck,
    onToggleCheckAll,
    onAddingElement
  })
);
