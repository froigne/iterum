import createHttpClient from "http-client/axios/createHttpClient";

const httpClient = createHttpClient();

// elements
export const fetchElementList = (config = {}) => dispatch => {
  const sendRequest = httpClient.get("elements", config);

  return sendRequest;
};
