import _ from 'lodash';

export default {
  defineFullName(surname, name, patronymic) {
    return surname && name && _.trim(`${surname} ${name} ${patronymic || ''}`);
  },

  defineFullNameByUser(user) {
    if (!user) return '';

    return this.defineFullName(user.surname, user.name, user.patronymic);
  },

  defineSurnameWithInitials(user) {
    if (!user) return '';

    const { surname, name, patronymic } = user;

    return `${surname} ${name[0].toUpperCase()}.${patronymic ? `${patronymic[0].toUpperCase()}.` : ''}`;
  }
};
