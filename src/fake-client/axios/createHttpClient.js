import axios from "axios";
import paramsSerializer from "./paramsSerializer";

const preventPagination = request => {
  if (request.params && request.params.pagination !== undefined) {
    throw new Error('"pagination" parameter is now forbidden.');
  }

  return request;
};

const addDefaultContentType = request => {
  return {
    ...request,
    headers: {
      "Content-Type": "application/json",
      ...request.headers
    }
  };
};

let client;

function createHttpClient() {
  if (!client) {
    // create axios client with custom params serializer
    client = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      paramsSerializer
    });

    // create interceptors
    client.interceptors.request.use(preventPagination);
    client.interceptors.request.use(addDefaultContentType);
  }

  return client;
}

export default createHttpClient;
