import { observable, action } from 'mobx';
import axios from 'axios';
import { defineApiUrl } from 'utils/defineApiUrl';
import { STATE_DEFAULT, STATE_LOADING } from 'constants/StateConstatns';

class AlbumsStore {
  @observable data = [];

  @observable state = STATE_LOADING;

  @observable filters = {
    offset: 0,
    count: 20,
    searcher: '',
  };

  @action fetchAlbums() {
    this.state = STATE_LOADING;

    axios.get(defineApiUrl('albums'), {
      headers: { 'auth-token': localStorage.token },
      params: { ...this.filters },
    })
      .then((response) => {
        console.log('response', response);
      })
      .catch((response) => {
        console.log('response', response);
      });
  }
}

export default new AlbumsStore();
