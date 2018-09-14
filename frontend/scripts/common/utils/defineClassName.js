import { SUCCESS_STATUS, LOADING_STATUS, ERROR_STATUS } from '../constants/StatusConstatns';

export default function (status) {
  switch (status) {
    case LOADING_STATUS:
      return 'status-helper__message_loading';
    case SUCCESS_STATUS:
      return 'status-helper__message_success';
    case ERROR_STATUS:
      return 'status-helper__message_error';
    default:
      return '';
  }
}
