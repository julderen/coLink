import _ from 'lodash';
import { STATUS_SUCCESS, STATUS_LOADING, STATUS_ERROR } from 'Constants/StatusConstants';

class AsyncService {
  loading(query, response, data, promise) {
    return callback => {
      callback(_.assign(this.baseModel(STATUS_LOADING, query, response, data), { isLoading: true }));

      return promise;
    };
  }

  success(query, response, data) {
    return _.assign(this.baseModel(STATUS_SUCCESS, query, response, data), { isSuccess: true });
  }

  error(query, response, data) {
    return _.assign(this.baseModel(STATUS_ERROR, query, response, data), { isError: true });
  }

  baseModel(status, query, response, data) {
    return {
      status,
      query: query || null,
      response: response || null,
      data: data || null
    };
  }
}

export default AsyncService;
