import { observable, action } from 'mobx';
import axios from 'axios';

class Registration {
  @observable status = 'default';

  @observable error;

  @action resetStatus = () => {
    this.status = 'default';
  };

  @action fetchData = ({ email, login, password }) => {
    this.status = 'loading';
    setTimeout(() => axios.post('/api/users', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = 'success';
        setTimeout(() => window.location = '/Album', 20000);
      })
      .catch((err) => {
        this.status = 'error';
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err;
        }
      }), 2000);
  }
}

export default new Registration();
