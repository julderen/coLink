export default {
  http: {
    development: false,
    cors: true,
    validation: true,
    port: process.env.PORT
  },
  domains: {
    api: process.env.PORT,
  },
  dbConfig: {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB || 'coLink',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    URI: process.env.DB_URL || null,
    logging: true,
    synchronize: true
  }
};
