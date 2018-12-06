import { STATE_SUCCESS, STATE_LOADING, STATE_ERROR } from '../constants/StateConstatns';

export default function (status) {
  switch (status) {
    case STATE_LOADING:
      return 'status-helper__message--loading';
    case STATE_SUCCESS:
      return 'status-helper__message--success';
    case STATE_ERROR:
      return 'status-helper__message--error';
    default:
      return '';
  }
}
