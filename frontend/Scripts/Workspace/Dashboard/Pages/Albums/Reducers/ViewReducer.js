import update from 'immutability-helper';
import { createReducer } from 'realt';
import _ from 'lodash';
import { STATUS_DEFAULT, STATUS_LOADING } from 'Constants/StatusConstants';

import Actions from '../Actions/ViewActions';
import CreateFormActions from '../Actions/CreateFormActions';
import EditFormActions from '../Actions/EditFormActions';

class DashboardPagesAlbumsViewReducer {
  constructor() {
    this.bindAction(Actions.albumsGet, this.handleAlbumsGet);
    this.bindAction(Actions.editingAlbumSelect, this.handleEditingAlbumSelect);
    this.bindAction(Actions.albumTypeToggle, this.handleAlbumTypeToggle);
    this.bindAction(Actions.albumDelete, this.handleAlbumDelete);
    this.bindAction(Actions.filterChange, this.handleFilterChange);
    this.bindAction(CreateFormActions.albumCreateCallback, this.handleAlbumCreate);
    this.bindAction(EditFormActions.albumEditCallback, this.handleAlbumEdit);
  }

  get initialState() {
    return {
      data: [],
      editingAlbum: '',
      status: STATUS_DEFAULT,
      contentStatus: STATUS_LOADING,
      filter: {
        limit: 25,
        offset: 0,
        query: '',
      }
    };
  }

  handleAlbumsGet(state, { status, isSuccess, response }) {
    if (state.filter.offset !== 0) {
      if (!isSuccess) return update(state, { $merge: { status } });

      return update(state, {
        $merge: { status: STATUS_DEFAULT, data: [...state.data, ...response], lastCount: response.length }
      });
    }

    if (!isSuccess) return update(state, { $merge: { contentStatus: status } });

    return update(state, {
      $merge: {
        contentStatus: STATUS_DEFAULT,
        status: STATUS_DEFAULT,
        data: response,
        lastCount: response.length
      }
    });
  }

  handleEditingAlbumSelect(state, editingAlbum) {
    return update(state, { $merge: { editingAlbum } });
  }

  handleAlbumCreate(state, { isSuccess, response }) {
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

  handleAlbumTypeToggle(state, { isSuccess, data }) {
    if (!isSuccess) return state;

    const index = _.findIndex(state.data, ({ id }) => data.id === id);

    if (index < 0) return state;

    return update(state, {
      data: {
        [index]: {
          $merge: { type: data.type }
        }
      }
    });
  }

  handleAlbumDelete(state, { isSuccess, data }) {
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

  handleAlbumEdit(state, { isSuccess, response, query }) {
    if (!isSuccess) return state;

    const index = _.findIndex(state.data, ({ id }) => query.id === id);

    if (index < 0) return state;

    return update(state, {
      data: {
        [index]: {
          $merge: response
        }
      }
    });
  }
}

export default createReducer(DashboardPagesAlbumsViewReducer);
