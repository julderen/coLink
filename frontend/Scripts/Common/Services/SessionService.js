import LocalStorageService, { TOKEN } from 'Services/LocalStorageService';

class SessionService {
  constructor() {
    this.document = document;
  }

  getCookie() {
    return document.cookie;
  }

  setCookie(name, value) {
    const resultValue = encodeURIComponent(value);
    const expires = new Date(new Date().getTime() + (60 * 60 * 24 * 7 * 1000)).toUTCString();

    document.cookie = `${name}=${resultValue}; path=/; expires=${expires}`;
  }

  removeCookie(name) {
    document.cookie = `${name}=; path=/; expires=${new Date(0).toUTCString()}`;
  }

  signIn(token) {
    LocalStorageService.set(TOKEN, token);
  }

  signOut() {
    LocalStorageService.remove(TOKEN);
  }
}

export default new SessionService();
