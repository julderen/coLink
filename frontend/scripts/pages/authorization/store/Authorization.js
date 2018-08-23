import { observable, action } from 'mobx';
import axios from 'axios';
import { Default, Loading, Succsess, Error } from '../constants/Constants';

class Authorization {
  @observable status = Default;

  @observable error;

  @action resetStatus = () => {
    this.status = Default;
  };

  @action fetchData = ({ email, login, password }) => {
    this.status = Loading;
    setTimeout(() => axios.post('http://localhost:8892/authorization', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = Succsess;
        setTimeout(() => window.location.href = 'localhost:9000/Album', 2000);
      })
      .catch((err) => {
        this.status = Error;
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err.response.data.type;
        }
      }), 6000);
  }
}

export default new Authorization();
