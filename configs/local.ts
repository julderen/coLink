export default {
  http: {
    development: true,
    cors: true,
    validation: true,
    port: 8892
  },
  domains: {
    api: process.env.PORT || 'http://localhost:8892'
  },
  dbConfig: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'coLink',
    username: 'postgres',
    password: 'root',
    logging: true,
    synchronize: true
  }
};
