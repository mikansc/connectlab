export class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  get = (resource, config = {}) => {
    return this.httpClient.get(resource, config);
  };

  post = (resource, data, config = {}) => {
    return this.httpClient.post(resource, data, config);
  };

  put = (resource, data, config = {}) => {
    return this.httpClient.put(resource, data, config);
  };

  remove = (resource, config = {}) => {
    return this.httpClient.delete(resource, config);
  };
}
