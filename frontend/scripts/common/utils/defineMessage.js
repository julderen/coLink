import { LOADING_STATUS, ERROR_STATUS, SUCCESS_STATUS } from 'constants/StatusConstatns';

export default function (status, message) {
  if (message) return message;
  switch (status) {
    case LOADING_STATUS:
      return 'Загрузка...';
    case SUCCESS_STATUS:
      return 'Успешно!';
    case ERROR_STATUS:
      return 'Ошибка сервера, попробуйте позже';
    default:
      return '';
  }
}
