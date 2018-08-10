import { observable, action } from 'mobx';
import axios from 'axios';

class Registration {
  @observable status;

  @observable error;

  @action fetchData = ({ email, login, password }) => {
    axios.post('http://localhost:8892/api/users', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = 'ok';
        this.error = '';
      })
      .catch((err) => this.error = err);
  }
}

export default new Registration();
