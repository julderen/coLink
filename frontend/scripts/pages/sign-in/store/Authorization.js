import { observable, action } from 'mobx';
import axios from 'axios';
import { DEFAULT_STATUS, LOADING_STATUS, SUCCESS_STATUS, ERROR_STATUS } from 'constants/StatusConstatns';
import { API_URL } from 'constants/AddressConstants';

class Authorization {
  @observable status = DEFAULT_STATUS;

  @observable isAuthorization = true;

  @observable error;

  @action fetchData = ({ email, login, password }) => {
    this.status = LOADING_STATUS;
    setTimeout(() => axios.post(`${API_URL}/authorization`, { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = SUCCESS_STATUS;
        setTimeout(() => { window.location.href = '/Album'; }, 2000);
      })
      .catch((err) => {
        this.status = ERROR_STATUS;
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err.response.data.type;
        }
        setTimeout(() => { this.status = DEFAULT_STATUS; }, 4000);
      }), 6000);
  }
}

export default new Authorization();
