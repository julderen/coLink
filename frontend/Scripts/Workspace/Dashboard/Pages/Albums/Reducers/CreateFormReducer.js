import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/CreateFormActions';

class DashboardPagesAlbumsCreateFormReducer {
  constructor() {
    this.bindAction(Actions.albumCreateCallback, this.handleAlbumCreate);
    this.bindAction(Actions.formReset, this.handleFormReset(this.initialState));
  }

  get initialState() {
    return {
      status: STATUS_DEFAULT
    };
  }

  handleAlbumCreate(state, { status }) {
    return _.assign({}, state, { status });
  }

  handleFormReset(state) {
    return () => _.assign({}, state);
  }
}

export default createReducer(DashboardPagesAlbumsCreateFormReducer);
