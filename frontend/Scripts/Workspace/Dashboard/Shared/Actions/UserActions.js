import { createActions } from 'realt';

import UserSource from '../Sources/UserSource';

class DashboardUserActions {
  userGet() {
    return UserSource.getUser();
  }
}

export default createActions(DashboardUserActions);
