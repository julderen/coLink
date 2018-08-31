import { observable, action } from 'mobx';
import axios from 'axios';
import { Default, Loading, Success, Error } from 'constants/StatusConstatns';

class Registration {
  @observable status = Default;

  @observable error;

  @action resetStatus = () => {
    this.status = Default;
  };

  @action fetchData = ({ email, login, password }) => {
    this.status = Loading;
    setTimeout(() => axios.post('/api/users', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = Success;
        setTimeout(() => window.location = '/Album', 20000);
      })
      .catch((err) => {
        this.status = Error;
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером';
        } else {
          this.error = err.response.data.type;
        }
        setTimeout(() => this.status = Default, 4000);
      }), 2000);
  }
}

export default new Registration();
