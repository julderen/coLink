import { createActions } from 'realt';
import ModalsActions from 'Actions/ModalsActions';

import { MODAL_TYPES } from 'Constants/ModalsConstants';

class ConfirmModalActions {
  modalToggle() {
    return dispatch => dispatch(ModalsActions.modalToggle(MODAL_TYPES.confirm));
  }

  modalOpen(params) {
    return dispatch => {
      dispatch(this.modalToggle());

      return params;
    };
  }
}

export default createActions(ConfirmModalActions, 'confirmModal');
