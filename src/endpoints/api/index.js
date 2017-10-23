import { elementType } from "./schemas";
import { generator } from "endpoints/lib";

// elements
const elementGenerator = generator.with("/elements", elementType);
export const fetchElementList = elementGenerator.fetchEntityList;

export const postElement = params => dispatch => {
  const sendRequest = httpClient.post("elements", params);

  return sendRequest;
};

export const deleteElement = entry => dispatch => {
  const sendRequest = httpClient.delete(`elements/${entry}`);

  return sendRequest;
};
