import { combineReducers } from "redux";
import { reducer as entities } from "endpoints/redux";

const reducers = combineReducers({
  entities
});

export default reducers;
