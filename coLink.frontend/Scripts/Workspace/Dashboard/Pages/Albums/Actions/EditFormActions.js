import { createActions } from 'realt';
import { STATUS_DEFAULT, DELAY } from 'Constants/StatusConstants';

import AlbumsSource from '../Sources/AlbumsSource';
import ViewActions from './ViewActions';

class DashboardPagesAlbumsActionsEdit {
  constructor() {
    this.generate(
      'formInit',
      'albumEditCallback'
    );
  }

  editCancel() {
    return dispatch => dispatch(ViewActions.editingAlbumSelect(''));
  }

  albumEdit(query) {
    return dispatch => {
      AlbumsSource.editAlbum(query)
        .loading(result => dispatch(this.albumEditCallback(result)))
        .then(result => {
          dispatch(this.albumEditCallback(result));

          setTimeout(() => {
            dispatch(this.albumEditCallback({ status: STATUS_DEFAULT }));
            dispatch(ViewActions.editingAlbumSelect(''));
          }, DELAY);
        })
        .catch(result => {
          dispatch(this.albumEditCallback(result));

          setTimeout(() => dispatch(this.albumEditCallback({ status: STATUS_DEFAULT })), DELAY);
        });
    };
  }
}

export default createActions(DashboardPagesAlbumsActionsEdit);
