import { createActions } from 'realt';

class DashboardSearcherActions {
  constructor() {
    this.generate(
      'changeValue',
      'searcherClear'
    );
  }
}

export default createActions(DashboardSearcherActions);
