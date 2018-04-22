import { createActions } from 'realt';
import { STATUS_DEFAULT, DELAY } from 'Constants/StatusConstants';

import AlbumsSource from '../Sources/AlbumsSource';

class DashboardPagesAlbumsActionsCreate {
  constructor() {
    this.generate(
      'albumCreateCallback',
      'formReset'
    );
  }

  albumCreate(query, callback) {
    return dispatch => {
      AlbumsSource.createAlbum(query)
        .loading(result => dispatch(this.albumCreateCallback(result)))
        .then(result => {
          dispatch(this.albumCreateCallback(result));

          setTimeout(() => { callback(); this.albumCreateCallback({ status: STATUS_DEFAULT }); }, DELAY);
        })
        .catch(result => {
          dispatch(this.albumCreateCallback(result));

          setTimeout(() => dispatch(this.albumCreateCallback({ status: STATUS_DEFAULT })), DELAY);
        });
    };
  }
}

export default createActions(DashboardPagesAlbumsActionsCreate);
