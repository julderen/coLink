import { observable, action } from 'mobx';
import axios from 'axios';
import { STATE_DEFAULT, STATE_LOADING, STATE_SUCCESS, STATE_ERROR } from 'constants/StateConstatns';
import { defineApiUrl } from 'utils/defineApiUrl';

class SignUpStore {
  @observable status = STATE_DEFAULT;

  @observable error;

  @action registrationUser = ({ email, login, password }) => {
    this.status = STATE_LOADING;

    axios.post(defineApiUrl('users'), { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = STATE_SUCCESS;
        setTimeout(() => { window.location = '/Albums'; }, 3000);
      })
      .catch((err) => {
        this.status = STATE_ERROR;
        if (!err.response) {
          this.error = 'Ошибка соединения с сервером';
        } else {
          this.error = err.response.data.type;
        }

        setTimeout(() => { this.status = STATE_DEFAULT; }, 3000);
      });
  }
}

export default new SignUpStore();
