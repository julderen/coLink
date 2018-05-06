import _ from 'lodash';
import update from 'immutability-helper';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

class BaseFormReducer {
  handleFormInit(state, initialValues) {
    return update(state, {
      initialValues: { $set: _.merge(state.initialValues, initialValues) },
      $merge: {
        status: STATUS_DEFAULT,
        contentStatus: STATUS_DEFAULT
      }
    });
  }

  handleFormClear(initialState) {
    return () => initialState;
  }

  handleSubmit(state, { status, response }) {
    return update(state, { $merge: { status, message: response && response.message } });
  }
}

export default BaseFormReducer;
