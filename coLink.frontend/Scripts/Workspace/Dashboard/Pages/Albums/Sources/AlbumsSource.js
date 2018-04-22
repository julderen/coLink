import AjaxService from 'Services/AjaxService';
import { ALBUM_URL } from 'Constants/UrlConstants';

export default {
  getAlbums(query) {
    return AjaxService.getRequest(`${ALBUM_URL}findByUser`, query);
  },

  createAlbum(query) {
    return AjaxService.postRequest(`${ALBUM_URL}create`, query);
  },

  editAlbum(query) {
    return AjaxService.postRequest(`${ALBUM_URL}edit/${query.id}`, query);
  },

  changeAlbumType(id, type) {
    return AjaxService.getRequest(`${ALBUM_URL}changeType/${id}/${type}`, null, { id, type });
  },

  deleteAlbum(id) {
    return AjaxService.getRequest(`${ALBUM_URL}remove/${id}`, null, id);
  }
};
