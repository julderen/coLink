import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT } from 'Constants/StatusConstants';

import Actions from '../Actions/EditFormActions';

class DashboardPagesAlbumsCreateFormReducer {
  constructor() {
    this.bindAction(Actions.albumEditCallback, this.handleAlbumEdit);
    this.bindAction(Actions.formInit, this.handleFormInit);
  }

  get initialState() {
    return {
      status: STATUS_DEFAULT,
      initialValues: {}
    };
  }

  handleAlbumEdit(state, { status }) {
    return _.assign({}, state, { status });
  }

  handleFormInit(state, initialValues) {
    return _.assign({}, state, { initialValues });
  }
}

export default createReducer(DashboardPagesAlbumsCreateFormReducer);
