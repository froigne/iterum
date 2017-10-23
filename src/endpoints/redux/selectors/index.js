import { denormalize } from "normalizr";
import { elementType } from "endpoints/api/schemas";
import Immutable from "immutable";

export const getEntities = state => state.entities || Immutable.Map();

export const getElements = (state, elementIds) =>
  denormalize(elementIds, [elementType], getEntities(state)) || Immutable.List();
