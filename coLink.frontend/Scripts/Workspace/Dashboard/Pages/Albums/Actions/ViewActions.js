import { createActions } from 'realt';

import EditFormActions from './EditFormActions';
import AlbumsSource from '../Sources/AlbumsSource';

class DashboardPagesAlbumsActionsView {
  constructor() {
    this.generate(
      'editingAlbumSelect',
      'filterChange'
    );
  }

  albumsGet(query) {
    return AlbumsSource.getAlbums(query);
  }

  albumEditFormOpen(album) {
    return dispatch => {
      dispatch(EditFormActions.formInit(album));
      dispatch(this.editingAlbumSelect(album.id));
    };
  }

  albumDelete(id) {
    return AlbumsSource.deleteAlbum(id);
  }

  albumTypeToggle(id, type) {
    return AlbumsSource.changeAlbumType(id, type);
  }
}

export default createActions(DashboardPagesAlbumsActionsView);
