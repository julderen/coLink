import AjaxService from 'Services/AjaxService';
import { USER_URL } from 'Constants/UrlConstants';

export default {
  signIn(query) {
    return AjaxService.postRequest(`${USER_URL}auth`, query);
  },

  registration(query) {
    return AjaxService.postRequest(`${USER_URL}reg`, query);
  }
};
