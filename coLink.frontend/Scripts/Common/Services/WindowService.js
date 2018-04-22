class WindowService {
  constructor() {
    this.window = window;
  }

  get location() {
    return this.window.location;
  }

  get origin() {
    return this.window.location.origin;
  }

  get serviceOrigins() {
    return this.window.appConfig ? this.window.appConfig.serviceOrigins : {};
  }

  redirect(href) {
    this.window.location.href = href;
  }

  open(link) {
    this.window.open(link);
  }

  listen(eventType, callback) {
    this.window.addEventListener(eventType, callback);
  }

  unlisten(eventType, callback) {
    this.window.removeEventListener(eventType, callback);
  }
}

export default new WindowService();
