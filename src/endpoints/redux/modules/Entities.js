/* eslint-disable filenames/match-exported */
import Immutable from "immutable";

const initialState = Immutable.Map();

// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_ENTITIES = `Entities/RECEIVE_ENTITIES`;
export const DROP_ENTITY = `Entities/DROP_ENTITY`;

// ------------------------------------
// Actions
// ------------------------------------
export const receiveEntities = entities => ({
  type: RECEIVE_ENTITIES,
  payload: entities
});

export const dropEntity = (type, reference) => ({
  type: DROP_ENTITY,
  payload: { type, reference }
});

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {};

// ------------------------------------
// Reducer
// ------------------------------------
export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

const mergeEntitiesInState = (state, entities) => {
  let nextState = state;

  Object.keys(entities).forEach(entityType => {
    Object.keys(entities[entityType]).forEach(key => {
      const entity = entities[entityType][key];
      nextState = nextState.mergeIn([entityType, entity.id], Immutable.fromJS(entity));
    });
  });

  return nextState;
};

ACTION_HANDLERS[RECEIVE_ENTITIES] = (state, action) => {
  return mergeEntitiesInState(state, action.payload);
};

ACTION_HANDLERS[DROP_ENTITY] = (state, { payload }) => {
  if (!payload.reference) {
    return state;
  }

  return state.deleteIn([payload.type, payload.reference]);
};

export default reducer;
