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
    setTimeout(() => axios.post('http://localhost:8892/api/users', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = Success;
        setTimeout(() => window.location = 'http://localhost:9000/Album', 2000);
      })
      .catch((err) => {
        this.status = Error;
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером';
        } else {
          this.error = err.response.data.type;
        }
        setTimeout(() => this.status = Default, 4000);
      }), 6000);
  }
}

export default new Registration();
