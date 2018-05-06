import _ from 'lodash';
import { STATUS_SUCCESS, STATUS_ERROR, STATUS_NO_RESULTS } from '../Constants/StatusConstants';

export default {
  defineStatusMessage(status, message) {
    switch (status) {
      case STATUS_SUCCESS:
        return message || 'Успешно';
      case STATUS_ERROR:
        return message || 'Ошибка сервера';
      case STATUS_NO_RESULTS:
        return message || 'Нет данных';
      default:
        return message || 'Загрузка...';
    }
  },

  defineStatusClassName(status) {
    switch (status) {
      case STATUS_SUCCESS:
        return 'success';
      case STATUS_ERROR:
        return 'error';
      case STATUS_NO_RESULTS:
      default:
        return 'loader';
    }
  },

  lowerFieldsName(object) {
    const newObject = {};

    _.forEach(object, (value, key) => {
      newObject[_.lowerFirst(key)] = _.isPlainObject(value) ? this.lowerFieldsName(value) : value;

      return newObject;
    });

    return newObject;
  }
};
