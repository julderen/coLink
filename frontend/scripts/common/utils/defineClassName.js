import { Error, Loading, Success } from '../constants/StatusConstatns';

export default function (status) {
  switch (status) {
    case Loading:
      return 'status-helper__message_loading';
    case Success:
      return 'status-helper__message_success';
    case Error:
      return 'status-helper__message_error';
    default:
      return '';
  }
}
