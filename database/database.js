const {MongoClient} = require(`mongodb`);

const url = `mongodb://${process.env.DB_HOST || `localhost:27017`}`;

module.exports = MongoClient.connect(url).then((client) => client.db(`coLink`)).catch((err) => {
  console.error(err);
  process.exit(1);
});
