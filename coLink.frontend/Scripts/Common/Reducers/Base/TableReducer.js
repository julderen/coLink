import _ from 'lodash';
import update from 'immutability-helper';
import TableUtils from 'Utils/TableUtils';
import { STATUS_SUCCESS, STATUS_DEFAULT } from 'Constants/StatusConstants';

class BaseTableReducer {
  handleDataGet(state, { status, response }) {
    const data = response ? response.data || response : [];
    const totalCount = (response && response.totalCount) || data.length;

    return update(state, {
      $merge: {
        data: status === STATUS_SUCCESS ? data : state.data,
        totalCount: status === STATUS_SUCCESS ? totalCount : state.totalCount,
        status: TableUtils.getStatus(totalCount, status)
      }
    });
  }

  handleFilterChange(state, { field, value }) {
    return update(state, {
      params: {
        filters: {
          $merge: {
            [field]: value
          }
        },
        $merge: field === 'search' ? { offset: 0 } : {}
      }
    });
  }

  handleParamsChange(state, { field, value }) {
    const newParams = {
      [field]: value
    };

    if (field === 'count') newParams.offset = 0;

    return update(state, {
      params: {
        $merge: newParams
      }
    });
  }

  handleItemAdd(state, item) {
    return update(state, {
      data: { $push: [item] },
      $merge: {
        status: STATUS_DEFAULT,
        totalCount: state.totalCount + 1
      }
    });
  }

  handleItemsAdd(state, items) {
    return update(state, {
      data: { $set: [...state.data, ...items] },
      $merge: {
        status: STATUS_DEFAULT,
        totalCount: state.totalCount + items.length
      }
    });
  }

  handleItemRemove(state, predicate, status) {
    const index = _.findIndex(state.data, predicate);

    if (index < 0) return update(state, { $merge: { status } });

    return update(state, {
      $merge: {
        status,
        totalCount: state.totalCount - 1
      },
      data: { $splice: [[index, 1]] }
    });
  }

  handleItemsRemove(state, predicate, status) {
    const oldData = _.cloneDeep(state.data);
    const newData = _.filter(oldData, item => !predicate(item));

    return update(state, {
      $merge: {
        status,
        totalCount: state.totalCount - (oldData.length - newData.length),
        data: newData
      }
    });
  }

  handleItemUpdate(state, item, predicate) {
    const index = _.findIndex(state.data, predicate);

    if (index < 0) return state;

    return update(state, {
      data: { [index]: {
        $merge: item
      } }
    });
  }

  handleTableClear(initialState) {
    return state => update(state, { $set: initialState });
  }
}

export default BaseTableReducer;
