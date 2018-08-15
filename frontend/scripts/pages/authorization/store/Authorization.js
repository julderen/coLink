import { observable, action } from 'mobx';
import axios from 'axios';

class Authorization {
  @observable status;

  @observable error;

  @action resetError = () => {
    this.error = undefined;
  };

  @action fetchData = ({ email, login, password }) => {
    axios.post('http://localhost:8892/authorization', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = 'success';
      })
      .catch((err) => {
        if (err.response === undefined) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err.response.data.type;
          this.status = 'failure';
        }
      });
  }
}

export default new Authorization();
