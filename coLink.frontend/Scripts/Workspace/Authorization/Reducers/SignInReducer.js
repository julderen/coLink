import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';
import Actions from '../Actions/SignInActions';

class SignInReducer {
  constructor() {
    this.bindHandler(this.handleSignInCallback, Actions.signInCallback);
  }

  get initialState() {
    return {
      message: '',
      errors: '',
      status: STATUS_DEFAULT
    };
  }

  handleSignInCallback(state, { status, response, message }) {
    return _.assign({}, state, { status, message }, response ? { errors: response.message } : {});
  }
}

export default createReducer(SignInReducer);
