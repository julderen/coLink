import { observable, action } from 'mobx';
import axios from 'axios';
import { Default, Loading, Success, Error } from 'constants/StatusConstatns';
import { Address } from 'constants/AddressConstants';

class Authorization {
  @observable status = Default;

  @observable isAuthorization = true;

  @observable error;

  @action resetStatus = () => {
    this.status = Default;
  };

  @action fetchData = ({ email, login, password }) => {
    this.status = Loading;
    setTimeout(() => axios.post(`${Address}/authorization`, { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = Success;
        setTimeout(() => window.location.href = `\`${Address}/Album`, 2000);
      })
      .catch((err) => {
        this.status = Error;
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err.response.data.type;
        }
        setTimeout(() => this.status = Default, 4000);
      }), 6000);
  }
}

export default new Authorization();
