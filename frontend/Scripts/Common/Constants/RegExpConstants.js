import _ from 'lodash';

export const exact = regExpString => `^(${regExpString})$`;

export const not = regExpString => `^${regExpString}`;

export const global = str => new RegExp(str, 'g');

export const singleSeparator = (str, separator) => str
  .replace(global(`[${separator}]+`), matched => matched && matched[0]);

export const leaveOnlyFirst = (str, symbol = '') => {
  const parts = str.split(symbol);

  if (parts.length < 2) return str;

  return parts[0] + symbol + _.join(_.drop(parts, 1), '');
};

export const format = (str, range = '', separator = '') =>
  singleSeparator(str.replace(global(`[${not(range + separator)}]+`), ''), separator);

export const RANGES = {
  symbol: 'A-Za-zА-Яа-яЁё',
  number: '0-9',
  symbolOrNumber: 'A-Za-zА-Яа-яЁё0-9'
};

export const SEPARATORS = {
  dot: '\\.'
};
