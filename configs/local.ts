export default {
  http: {
    development: true,
    cors: true,
    validation: true,
    port: 8892
  },
  domains: {
    api: 'http://localhost:8892',
    cdn: '/',
    web: 'http://localhost:3005'
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
