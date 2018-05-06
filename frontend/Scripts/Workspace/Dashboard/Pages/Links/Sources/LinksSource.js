import AjaxService from 'Services/AjaxService';
import { LINK_URL } from 'Constants/UrlConstants';

export default {
  getLinks(albumId, query) {
    return AjaxService.getRequest(`${LINK_URL}findByAlbum/${albumId}`, query);
  },

  createLink(query) {
    return AjaxService.postRequest(`${LINK_URL}create`, query);
  },

  deleteLink(id) {
    return AjaxService.postRequest(`${LINK_URL}remove/${id}`, null, id);
  }
};
