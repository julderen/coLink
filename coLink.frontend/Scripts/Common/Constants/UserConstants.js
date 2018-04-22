import { STATUS_LOADING } from 'Constants/StatusConstants';
import DateUtils from 'Utils/DateUtils';

export const MIN_BIRTH_DATE = DateUtils.moment('1900-01-01');
export const MAX_BIRTH_DATE = DateUtils.now;

export const GENDER = [
  {
    name: 'male',
    label: 'Мужской',
    value: 1
  },
  {
    name: 'female',
    label: 'Женский',
    value: 2
  }
];

export const DEFAULT_GENDER = GENDER[0];
