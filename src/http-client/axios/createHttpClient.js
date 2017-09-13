import axios from "axios";

import paramsSerializer from "./paramsSerializer";

let client;

function createHttpClient() {
  if (!client) {
    // create axios client with custom params serializer
    client = axios.create({
      baseURL: process.env.REACT_APP_RESAMANIA_API_BASE_URL,
      paramsSerializer
    });
  }

  return client;
}

export default createHttpClient;
