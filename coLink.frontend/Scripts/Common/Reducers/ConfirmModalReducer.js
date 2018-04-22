import { createReducer } from 'realt';
import update from 'immutability-helper';

import ConfirmModalActions from '../Actions/ConfirmModalActions';
import { MODAL_INITIAL_STATE } from '../Constants/ConfirmModalConstants';

class ConfirmModalReducer {
  constructor() {
    this.bindAction(ConfirmModalActions.modalOpen, this.handleModalOpen);
  }

  get initialState() {
    return MODAL_INITIAL_STATE;
  }

  handleModalOpen(state, params) {
    return update(state, { $merge: params });
  }
}

export default createReducer(ConfirmModalReducer, 'confirmModal');
