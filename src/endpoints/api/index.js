import createHttpClient from "http-client/axios/createHttpClient";

const httpClient = createHttpClient();

// elements
export const fetchElementList = (config = {}) => dispatch => {
  const sendRequest = httpClient.get("elements", config);

  return sendRequest;
};

export const postElement = params => dispatch => {
  const sendRequest = httpClient.post("elements", params);

  return sendRequest;
};

export const deleteElement = entry => dispatch => {
  const sendRequest = httpClient.delete(`elements/${entry}`);

  return sendRequest;
};
