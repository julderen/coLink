import { createActions } from 'realt';
import { STATUS_DEFAULT, DELAY } from 'Constants/StatusConstants';

import LinksSource from '../Sources/LinksSource';

class DashboardPagesLinksActionsCreate {
  constructor() {
    this.generate(
      'linkCreateCallback',
      'formReset',
    );
  }

  linkCreate(query, callback) {
    return dispatch => {
      LinksSource.createLink(query)
        .loading(result => dispatch(this.linkCreateCallback(result)))
        .then(result => {
          dispatch(this.linkCreateCallback(result));

          setTimeout(() => { callback(); this.linkCreateCallback({ status: STATUS_DEFAULT }); }, DELAY);
        })
        .catch(result => {
          dispatch(this.linkCreateCallback(result));

          setTimeout(() => dispatch(this.linkCreateCallback({ status: STATUS_DEFAULT })), DELAY);
        });
    };
  }
}

export default createActions(DashboardPagesLinksActionsCreate);
