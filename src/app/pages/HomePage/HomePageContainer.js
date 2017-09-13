import { compose, lifecycle, withHandlers, withState } from "recompose";
import { withTranslator } from "app/decorators";
import HomePage from "./HomePage";

function componentWillMount() {
  console.log("start");
}

const onClose = ({ setIsOpen }) => () => {
  setIsOpen(false);
};

export default compose(
  withState("isLoading", "setIsLoading", false),
  withState("isOpen", "setIsOpen", false),
  withHandlers({
    onClose
  }),
  lifecycle({ componentWillMount }),
  withTranslator
)(HomePage);
