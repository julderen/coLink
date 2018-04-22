import { createActions } from 'realt';
import WindowService from 'Services/WindowService';
import SessionService from 'Services/SessionService';
import { STATUS_DEFAULT, DELAY } from 'Constants/StatusConstants';

import AccountSource from '../Sources/AccountSource';

class AccountRegistrationActions {
  constructor() {
    this.generate('registrationCallback');
  }

  registration(query) {
    return dispatch => {
      AccountSource.registration(query)
        .loading(result => dispatch(this.registrationCallback(result)))
        .then(result => {
          SessionService.signIn(result.response.token);
          dispatch(this.registrationCallback(result));

          setTimeout(() => WindowService.redirect('/Dashboard'), DELAY);
        })
        .catch(result => {
          dispatch(this.registrationCallback(result));

          setTimeout(() => dispatch(this.registrationCallback({ status: STATUS_DEFAULT })), DELAY);
        });
    };
  }
}

export default createActions(AccountRegistrationActions);
