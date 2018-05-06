import _ from 'lodash';
import UserUtils from 'Utils/UserUtils';
import DateUtils from 'Utils/DateUtils';
import { format, leaveOnlyFirst, RANGES } from 'Constants/RegExpConstants';

export default {
  normalize(maxLength) {
    return value => value && value.slice(0, maxLength);
  },

  fixedPointNumberNormalize(digitsBefore, digitsAfter = 0, separator = '.') {
    return str => {
      const formatted = format(str, RANGES.number, separator);
      const parts = leaveOnlyFirst(formatted, separator).split(separator);

      const leftPart = parts[0].substr(0, digitsBefore);

      if (parts.length === 1) return leftPart;

      const rightPart = parts[1].substr(0, digitsAfter);

      return leftPart + separator + rightPart;
    };
  },

  commonNormalize(range, separator, length) {
    return str => format(str, range, separator).substr(0, length || str.length);
  },

  defineUserTextField(user) {
    return UserUtils.defineSurnameWithInitials(user);
  },

  stopPropagation(event) {
    event.stopPropagation();
  },

  definePlaceholderField(label, placeholder) {
    return _.isString(placeholder) ? placeholder : (label && `${_.trimEnd(label, ':')}...`);
  },

  defineLastEditingInfo(lastEditingInfo) {
    if (!lastEditingInfo) return null;

    const { eventTime, user } = lastEditingInfo;

    return {
      user: {
        ...user,
        fullName: UserUtils.defineSurnameWithInitials(user)
      },
      eventTime: DateUtils.moment(eventTime)
    };
  }
};
