import { compose, withHandlers, withProps, withState } from "recompose";
import Immutable from "immutable";

const prepareCheckList = ({ setCheckList }) => (list, value) => {
  const checkList = Immutable.fromJS([...Array(list.size)].map((x, index) => value));
  setCheckList(checkList);
};

const onPanelOpen = ({ setIsOpen }) => () => {
  setIsOpen(true);
};

const onPanelClose = ({ setIsOpen }) => () => {
  setIsOpen(false);
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
    prepareCheckList
  }),
  withHandlers({
    onPanelOpen,
    onPanelClose,
    onToggleCheck,
    onToggleCheckAll
  })
);
