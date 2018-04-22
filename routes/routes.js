const tryRoutes = require('./try');

module.exports = {
  init(app, db) {
    tryRoutes(app, db);

  }
};
