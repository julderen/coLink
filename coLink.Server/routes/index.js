const tryRoutes = require('./try');

module.exports = function(app, db) {
  tryRoutes(app, db);
};