import _ from 'lodash';
import { ERROR_MESSAGES } from 'Constants/ValidationConstants';

const errorMessage = (isInvalid, name, message) => (isInvalid ? _.set({}, name, message) : {});
const valueGet = (values, valueOrPath) => (_.isString(valueOrPath) ? _.get(values, valueOrPath) : valueOrPath);

const required = (name, value) => (errorMessage(
  _.isString(value) ? !_.trim(value, ' ') : !value && !_.isNumber(value),
  name,
  'Пожалуйста, заполните это поле'
));

const requiredIf = preconditionOrPath => (name, value, values) => {
  const precondition = valueGet(values, preconditionOrPath);

  if (!precondition) return null;

  return (
    errorMessage(_.isEmpty(value) && !_.isNumber(value), name, 'Пожалуйста, заполните это поле')
  );
};

const requiredIfNot = preconditionOrPath => (name, value, values) => {
  const precondition = valueGet(values, preconditionOrPath);

  if (precondition) return null;

  return (
    errorMessage(_.isEmpty(value) && !_.isNumber(value), name, 'Пожалуйста, заполните это поле')
  );
};

const maxCount = count => (name, values) =>
  errorMessage(values && values.length > count, name, { _error: `Максимальное количество - ${count}` });

const minLength = length => (name, value) =>
  errorMessage(value && value.length < length, name, `Минимальная длина поля ${length} символов`);

const maxLength = length => (name, value) =>
  errorMessage(value && value.length > length, name, `Максимальная длина поля ${length} символов`);

const alfaNumber = (name, value = '') => {
  if (_.isEmpty(value)) return true;

  const val = value.replace(/[a-z\s0-9\sа-я\s-]+/ig, '');

  return errorMessage(val.length, name, ERROR_MESSAGES.incorrectFormat);
};

const number = (name, value = '') => {
  if (_.isEmpty(value)) return true;

  const val = value.replace(/[0-9\s]/ig, '');

  return errorMessage(val.length, name, ERROR_MESSAGES.incorrectFormat);
};

const alfa = (name, value = '') => {
  if (_.isEmpty(value)) return true;

  const val = value.replace(/[а-я\sa-z\s_\-"]+/ig, '');

  return errorMessage(val.length, name, ERROR_MESSAGES.incorrectFormat);
};

const email = (name, value) => {
  if (_.isEmpty(value)) return true;

  const re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

  return errorMessage(!re.test(value), name, ERROR_MESSAGES.incorrectFormat);
};

const login = (name, value = '') => {
  const val = value.replace(/[a-z\sа-я\s0-9\s-\s@\s,\s."]+/ig, '');

  return errorMessage(val.length, name, ERROR_MESSAGES.incorrectFormat);
};

const maskedInputDate = (minDateOrPath, maxDateOrPath) => (name, value = '', values) => {
  const minDate = valueGet(values, minDateOrPath);
  const maxDate = valueGet(values, maxDateOrPath);

  if (!value) return true;

  if (!value.isValid() || !(minDate.isBefore(value) && maxDate.isAfter(value))) {
    return errorMessage(true, name, ERROR_MESSAGES.incorrectValue);
  }

  return errorMessage(false);
};

const afterDate = (dateOrPath, message) => (name, value = '', values) => {
  const date = valueGet(values, dateOrPath);

  if (!value || !date) return true;

  if (!value.isValid() || !value.isAfter(date)) {
    return errorMessage(true, name, message || ERROR_MESSAGES.incorrectValue);
  }

  return errorMessage(false);
};

const afterSameDate = (dateOrPath, message) => (name, value = '', values) => {
  const date = valueGet(values, dateOrPath);

  if (!value || !date) return true;

  if (!value.isValid() || (!value.isAfter(date) && !value.isSame(date, 'day'))) {
    return errorMessage(true, name, message || ERROR_MESSAGES.incorrectValue);
  }

  return errorMessage(false);
};

const beforeDate = (dateOrPath, message) => (name, value = '', values) => {
  const date = valueGet(values, dateOrPath);

  if (!value || !date) return true;

  if (!value.isValid() || !value.isBefore(date) || value.isSame(date, 'day')) {
    return errorMessage(true, name, message || ERROR_MESSAGES.incorrectValue);
  }

  return errorMessage(false);
};

const beforeSameDate = (dateOrPath, message) => (name, value = '', values) => {
  const date = valueGet(values, dateOrPath);

  if (!value || !date) return true;

  if (!value.isValid() || (!value.isBefore(date) && !value.isSame(date, 'day'))) {
    return errorMessage(true, name, message || ERROR_MESSAGES.incorrectValue);
  }

  return errorMessage(false);
};

const date = (name, value = '') => {
  if (!value) return true;

  if (!value.isValid()) {
    return errorMessage(true, name, ERROR_MESSAGES.incorrectFormat);
  }

  return errorMessage(false);
};

const weekDay = weekDays => value =>
  value && _.includes(weekDays, value.day()) && 'На этот день уже создан шаблон';

const numberInterval = (minOrPath = 0, maxOrPath = 0) => (name, value = 0, values) => {
  const min = valueGet(values, minOrPath);
  const max = valueGet(values, maxOrPath);

  if (value < min || value > max) {
    return errorMessage(true, name, ERROR_MESSAGES.incorrectValue);
  }

  return errorMessage(false);
};

const inn = (name, value = '') => {
  if (!value) return errorMessage(false);

  if (value.length === 0) {
    return errorMessage(false);
  }

  if (value.length !== 10 && value.length !== 12) {
    return errorMessage(true, name, 'Длина поля должна составлять 10 или 12 символов');
  }

  const coefficients = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

  const calculateControlNumber = (digits, length) => {
    let result = 0;

    _.take(digits, length).forEach((digit, index) => {
      result += digit * _.takeRight(coefficients, length)[index];
    });

    return result % 11 % 10;
  };

  const validControlNumber = (digits, length) => {
    switch (length) {
      case 10:
        return calculateControlNumber(digits, 9) === digits[9];
      case 12:
        return calculateControlNumber(digits, 10) === digits[10] &&
          calculateControlNumber(digits, 11) === digits[11];
      default:
        return false;
    }
  };

  const digits = _.split(value, '').map(digit => parseInt(digit, 10));

  if (!validControlNumber(digits, value.length)) {
    return errorMessage(true, name, 'Контрольное число не совпадает с рассчитанным');
  }

  return errorMessage(false);
};

const kpp = (name, value = '') => {
  if (!value) return errorMessage(false);

  if (value.length !== 0 && value.length !== 9) {
    return errorMessage(true, name, 'Длина поля должна составлять 9 символов');
  }

  return errorMessage(false);
};

export {
  required,
  requiredIf,
  requiredIfNot,
  email,
  login,
  maxCount,
  minLength,
  maxLength,
  number,
  alfa,
  alfaNumber,
  maskedInputDate,
  date,
  weekDay,
  numberInterval,
  inn,
  kpp,
  afterDate,
  afterSameDate,
  beforeDate,
  beforeSameDate
};
