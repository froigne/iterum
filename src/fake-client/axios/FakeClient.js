import createHttpClient from "./createHttpClient";
import parseLink from "parse-link-header";

const _omit = (arr, key) => {
  // eslint-disable-next-line no-unused-vars
  const { [key]: value, ...res } = arr;
  return res;
};

const httpClient = createHttpClient();

class FakeClient {
  constructor(collectionUrl) {
    this.collectionUrl = collectionUrl;
  }

  fetchEntity = (entity, config = {}) => {
    const sendGetRequest = httpClient.get(`${this.collectionUrl}/${entity}`, config);

    return sendGetRequest;
  };

  fetchEntityList = (config = {}) => {
    let sendGetRequest;

    if (config.params && (config.params.pagination === false || config.params._page !== undefined)) {
      sendGetRequest = httpClient.get(config.url || this.collectionUrl, config);
    } else {
      let _responses = [];

      const handleResponse = response => {
        _responses.push(response);
        const parsingHeaderLink = parseLink(response.headers.link);
        if (parsingHeaderLink && parsingHeaderLink.next) {
          return httpClient.get(parsingHeaderLink.next.url, _omit(config, "params")).then(handleResponse);
        } else {
          return _responses;
        }
      };

      const mergeResponses = responses => {
        const mergedResponse = { ...responses[0] };

        mergedResponse.data = responses.reduce((data, response) => data.concat(response.data), []);

        return mergedResponse;
      };

      sendGetRequest = httpClient
        .get(config.url || this.collectionUrl, config)
        .then(handleResponse)
        .then(mergeResponses);
    }

    return sendGetRequest;
  };

  saveEntity = (entityUrl = null, data = {}, config = {}) => {
    const sendSaveRequest = httpClient.request({
      method: entityUrl ? "PUT" : "POST",
      url: entityUrl || this.collectionUrl,
      data,
      ...config
    });

    return sendSaveRequest;
  };

  deleteEntity = (entityUrl, config = {}) => {
    const sendDeleteRequest = httpClient.delete(entityUrl, config);

    return sendDeleteRequest;
  };
}

export default FakeClient;
