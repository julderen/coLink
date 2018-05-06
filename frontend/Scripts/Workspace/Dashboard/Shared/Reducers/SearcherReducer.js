import { createReducer } from 'realt';
import _ from 'lodash';

import Actions from '../Actions/SearcherActions';

class DashboardSearcherReducer {
  constructor() {
    this.bindAction(Actions.changeValue, this.handleChangeValue);
    this.bindAction(Actions.searcherClear, this.handleSearcherClear);
  }

  get initialState() {
    return { value: '' };
  }

  handleChangeValue(state, value) {
    return _.assign({}, state, { value });
  }

  handleSearcherClear(state) {
    return _.assign({}, state, { value: '' });
  }
}

export default createReducer(DashboardSearcherReducer);
