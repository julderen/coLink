import { STATE_LOADING, STATE_ERROR, STATE_SUCCESS } from 'constants/StateConstatns';

export default function (status, message) {
  if (message) return message;
  switch (status) {
    case STATE_LOADING:
      return 'Загрузка...';
    case STATE_SUCCESS:
      return 'Успешно!';
    case STATE_ERROR:
      return 'Ошибка сервера, попробуйте позже';
    default:
      return '';
  }
}
