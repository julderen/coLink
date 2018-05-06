const express = require(`express`);
const bodyParser = require(`body-parser`);
const corsMiddleware = require(`../middleware/cors-middleware`);
const users = require(`./routes/user`);

module.exports = {
  init(app) {
    app.use(`/api`, corsMiddleware, bodyParser.json());
    app.use(`/api`, users);
    app.use(express.static(`static`));
  }
};
