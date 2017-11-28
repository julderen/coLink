module.exports = function(app, db) {
  app.post('/try', (req, res) => {
    res.send('TRY')
  });
  app.get('/try', (req, res) => {
    res.send('TRY')
  });
};
