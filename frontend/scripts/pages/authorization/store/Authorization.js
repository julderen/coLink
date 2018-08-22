import { observable, action } from 'mobx';
import axios from 'axios';

class Authorization {
  @observable status = 'default';

  @observable error;

  @action resetStatus = () => {
    this.status = 'default';
  };

  @action fetchData = ({ email, login, password }) => {
    this.status = 'loading';
    setTimeout(() => axios.post('http://localhost:8892/authorization', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = 'success';
        setTimeout(() => window.location = 'http://www.localhost:9000/Album', 2000);
      })
      .catch((err) => {
        this.status = 'error';
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err.response.data.type;
        }
      }), 6000);
  }
}

export default new Authorization();
