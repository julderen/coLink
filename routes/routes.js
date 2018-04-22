const express = require(`express`);

module.exports = {
  init(app) {
    app.use(express.static(`static`));
  }
};
