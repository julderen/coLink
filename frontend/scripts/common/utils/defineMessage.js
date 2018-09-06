import { Loading, Error, Success } from 'constants/StatusConstatns';

export default function(status, isAuthorization) {
  switch (status) {
    case Loading:
      return 'Загрузка...';
    case Success:
      return isAuthorization ? 'Авторизация прошла успешно!' : 'Регистрация прошла успешно!';
    case Error:
      return isAuthorization ? 'Ошибка авторизации' : 'Ошибка регистрации';
    default:
      return '';
  }
};
