export class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  get = (resource, config = {}) => {
    return this.httpClient.get(resource, config);
  };

  post = (resource, config = {}) => {
    return this.httpClient.get(resource, config);
  };

  remove = (resource, config = {}) => {
    return this.httpClient.delete(resource, config);
  };
}
