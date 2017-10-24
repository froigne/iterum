import { denormalize } from "normalizr";
import { elementType } from "endpoints/api/schemas";
import Immutable from "immutable";

export const getEntities = state => state.entities || Immutable.Map();

export const getElements = (state, elementIds) => {
  return denormalize(elementIds, [elementType], getEntities(state).toJS()) || Immutable.List();
};
