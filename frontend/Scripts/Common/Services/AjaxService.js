import axios from 'axios';
import {
  TYPE_POST,
  TYPE_GET,
  TYPE_DELETE,
  TYPE_PUT,
  AXIOS_CONFIG
} from 'Constants/AjaxConstants';
import LocalStorageService, { TOKEN } from 'Services/LocalStorageService';
import AsyncService from './AsyncService';

class AjaxService extends AsyncService {
  postRequest(url, query, data, options) {
    return this.request(TYPE_POST, url, query, data, options);
  }

  getRequest(url, query, data, options) {
    return this.request(TYPE_GET, url, query, data, options);
  }

  deleteRequest(url, query, data, options) {
    return this.request(TYPE_DELETE, url, query, data, options);
  }

  putRequest(url, query, data, options) {
    return this.request(TYPE_PUT, url, query, data, options);
  }

  request(method, url, query, data, options) {
    const token = LocalStorageService.get(TOKEN);
    const headers = {
      authorization: (token || null),
    };

    const promise = new Promise((resolve, reject) => {
      axios(AXIOS_CONFIG({ method, url, query, headers, ...options }))
        .then(response => resolve(this.success(query, response.data, data)))
        .catch(error => reject(this.error(query, error.response ? error.response.data : error, data)));
    });

    promise.loading = this.loading(query, null, data, promise);

    return promise;
  }
}

export default new AjaxService();
