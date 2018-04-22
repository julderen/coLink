import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/RegistrationActions';

class SignInReducer {
  constructor() {
    this.bindAction(Actions.registrationCallback, this.handleRegistration);
  }

  get initialState() {
    return {
      message: '',
      errors: '',
      status: STATUS_DEFAULT
    };
  }

  handleRegistration(state, { status, response, message }) {
    return _.assign({}, state, { status, message }, response ? { errors: response.message } : {});
  }
}

export default createReducer(SignInReducer);
