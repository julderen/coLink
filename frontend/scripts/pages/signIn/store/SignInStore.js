import { observable, action } from 'mobx';
import axios from 'axios';
import { STATE_DEFAULT, STATE_LOADING, STATE_SUCCESS, STATE_ERROR } from 'constants/StateConstatns';
import { defineApiUrl } from 'utils/defineApiUrl';

class SignInStore {
  @observable status = STATE_DEFAULT;

  @observable isAuthorization = true;

  @observable error;

  @action authorisationUser = ({ email, login, password }) => {
    this.status = STATE_LOADING;

    axios.post(defineApiUrl('authorization'), { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = STATE_SUCCESS;
        setTimeout(() => { window.location.href = '/Albums'; }, 2000);
      })
      .catch((err) => {
        this.status = STATE_ERROR;

        if (!err.response) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        } else {
          this.error = err.response.data.type;
        }
        setTimeout(() => { this.status = STATE_DEFAULT; }, 4000);
      });
  }
}

export default new SignInStore();
