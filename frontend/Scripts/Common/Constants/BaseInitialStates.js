import { STATUS_DEFAULT, STATUS_LOADING } from 'Constants/StatusConstants';

export const DATA_DEFAULT_SAMPLE = {
  offset: 0,
  count: 10
};

export const TABLE_INITIAL_STATE = {
  status: STATUS_DEFAULT,
  data: [],
  totalCount: 0,
  params: {
    filters: {
      search: ''
    },
    sort: {
      field: null,
      order: null
    },
    ...DATA_DEFAULT_SAMPLE
  }
};

export const CREATION_INITIAL_STATE = {
  status: STATUS_DEFAULT,
  contentStatus: STATUS_LOADING
};

export const EDITING_INITIAL_STATE = {
  status: STATUS_DEFAULT,
  contentStatus: STATUS_LOADING,
  initialValues: null
};
