import * as Entities from "./modules/Entities";
import { normalize } from "normalizr";
import Immutable from "immutable";

class FakeActions {
  constructor(entitySchema) {
    this.entitySchema = entitySchema;
  }

  _resolveEntity(entityIdentifier, { entities }) {
    return entities.getIn([this.entitySchema.key, entityIdentifier]);
  }

  _resolveCollection(entityIdentifiers, state) {
    return Immutable.List(entityIdentifiers.map(identifier => this._resolveEntity(identifier, state)));
  }

  receiveEntity = responseData => (dispatch, getState) => {
    const normalizedData = normalize(responseData, this.entitySchema);

    dispatch(Entities.receiveEntities(normalizedData.entities));
    return this._resolveEntity(normalizedData.result, getState());
  };

  receiveCollection = responseData => (dispatch, getState) => {
    const normalizedData = normalize(responseData["data"], [this.entitySchema]);
    dispatch(Entities.receiveEntities(normalizedData.entities));
    return {
      ...responseData,
      data: this._resolveCollection(normalizedData.result, getState())
    };
  };

  dropEntity = entityIdentifier => (dispatch, getState) => {
    dispatch(Entities.dropEntity(this.entitySchema.key, entityIdentifier));
  };
}

export default FakeActions;
