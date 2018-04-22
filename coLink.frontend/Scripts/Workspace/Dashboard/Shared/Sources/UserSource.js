import AjaxService from 'Services/AjaxService';
import { USER_URL } from 'Constants/UrlConstants';

export default {
  getUser(query) {
    return AjaxService.getRequest(`${USER_URL}validate`, query);
  }
};
