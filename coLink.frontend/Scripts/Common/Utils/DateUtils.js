import moment from 'moment';
import 'moment/locale/ru';
import { SERVER_FORMAT } from '../Constants/DateConstants';

export default {
  utcOffset: moment().utcOffset(),
  isMoment: moment.isMoment,
  moment,
  now: moment().startOf('day'),

  serverDate() {
    return moment.utc().format(SERVER_FORMAT);
  },

  toMoment(date, isServer) {
    const momentDate = this.isMoment(date) ? date : moment(date);

    return isServer ? momentDate.subtract(this.utcOffset, 'm') : momentDate.add(this.utcOffset, 'm');
  },

  toServer(date) {
    return this.moment(date).format(SERVER_FORMAT);
  },

  toClient(date, format) {
    return this.toMoment(date).format(format);
  },

  timeToMoment(time) {
    if (!time) return this.moment();

    const [hours, minutes] = time.split(':');
    return this.moment({ hours, minutes });
  },

  isLastDay(date) {
    const now = this.moment();

    return !now.isSame(date, 'day') && now.isAfter(date);
  }
};
