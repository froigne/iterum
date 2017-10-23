import { elementType } from "./schemas";
import { generator } from "endpoints/lib";
import createHttpClient from "fake-client/axios/createHttpClient";
const fakeClient = createHttpClient();

// elements
const elementGenerator = generator.with("/elements", elementType);
export const fetchElementList = elementGenerator.fetchEntityList;

export const postElement = params => dispatch => {
  const sendRequest = fakeClient.post("elements", params);

  return sendRequest;
};

export const deleteElement = entry => dispatch => {
  const sendRequest = fakeClient.delete(`elements/${entry}`);

  return sendRequest;
};
