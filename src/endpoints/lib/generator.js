import { FakeActions } from "../redux";
import FakeClient from "fake-client";

export class Generator {
  constructor(fakeClient, fakeActions) {
    this.fakeClient = fakeClient;
    this.fakeActions = fakeActions;
  }

  fetchEntity = (...args) => dispatch => {
    const sendRequest = this.fakeClient.fetchEntity(...args);

    return sendRequest.then(response => dispatch(this.fakeActions.receiveEntity(response.data)));
  };

  fetchEntityList = (...args) => dispatch => {
    const sendRequest = this.fakeClient.fetchEntityList(...args);

    return sendRequest.then(response => dispatch(this.fakeActions.receiveCollection(response.data)));
  };

  saveEntity = (...args) => dispatch => {
    const sendRequest = this.fakeClient.saveEntity(...args);

    return sendRequest.then(response => dispatch(this.fakeActions.receiveEntity(response.data)));
  };

  saveEntityTransition = (...args) => dispatch => {
    const sendRequest = this.fakeClient.saveEntityTransition(...args);

    return sendRequest.then(response => dispatch(this.fakeActions.receiveEntity(response.data)));
  };

  deleteEntity = (entityUrl, ...args) => dispatch => {
    const sendRequest = this.fakeClient.deleteEntity(entityUrl, ...args);

    return sendRequest.then(response => dispatch(this.fakeActions.dropEntity(entityUrl)));
  };
}

export default {
  with: (collectionUrl, entitySchema) => new Generator(new FakeClient(collectionUrl), new FakeActions(entitySchema))
};
