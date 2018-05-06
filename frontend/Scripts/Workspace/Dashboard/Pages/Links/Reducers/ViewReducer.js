import update from 'immutability-helper';
import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT, STATUS_LOADING } from 'Constants/StatusConstants';

import Actions from '../Actions/ViewActions';
import CreateFormActions from '../Actions/CreateFormActions';

class DashboardPagesLinksViewReducer {
  constructor() {
    this.bindAction(Actions.linksGet, this.handleLinksGet);
    this.bindAction(Actions.linkDelete, this.handleLinkDelete);
    this.bindAction(Actions.filterChange, this.handleFilterChange);
    this.bindAction(Actions.dataClear, this.handleDataClear(this.initialState));
    this.bindAction(Actions.albumNameSet, this.handleAlbumNameSet);
    this.bindAction(CreateFormActions.linkCreateCallback, this.handleLinkCreate);
  }

  get initialState() {
    return {
      data: [],
      status: STATUS_DEFAULT,
      contentStatus: STATUS_LOADING,
      albumName: '',
      filter: {
        limit: 25,
        offset: 0,
        query: '',
      }
    };
  }

  handleLinksGet(state, { status, isSuccess, response }) {
    if (!isSuccess) return _.assign({}, state, { status });

    if (state.filter.offset !== 0) {
      return update(state, {
        $merge: { status: STATUS_DEFAULT, data: [...state.data, ...response], lastCount: response.length }
      });
    }

    return update(state, {
      $merge: {
        contentStatus: STATUS_DEFAULT,
        status: STATUS_DEFAULT,
        data: response,
        lastCount: response.length
      }
    });
  }

  handleLinkCreate(state, { isSuccess, response }) {
    if (!isSuccess) return state;

    return update(state, {
      data: { $push: [response] },
    });
  }

  handleFilterChange(state, filter) {
    return update(state, {
      filter: { $merge: { ...filter } },
    });
  }

  handleAlbumNameSet(state, albumName) {
    return update(state, {
      $merge: { albumName }
    });
  }

  handleLinkDelete(state, { isSuccess, data }) {
    if (!isSuccess) return state;

    const index = _.findIndex(state.data, ({ id }) => data === id);

    if (index < 0) return state;

    return update(state, {
      $merge: {
        status: STATUS_DEFAULT,
        totalCount: state.totalCount - 1
      },
      data: { $splice: [[index, 1]] }
    });
  }

  handleDataClear(state) {
    return () => _.assign({}, state);
  }
}

export default createReducer(DashboardPagesLinksViewReducer);
