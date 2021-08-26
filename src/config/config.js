require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.PASSWORD_DB || 'password',
    database: process.env.DB_NAME || 'sequelize_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.PASSWORD_DB || 'password',
    database: process.env.DB_NAME || 'test_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.PASSWORD_DB || 'password',
    database: process.env.DB_NAME || 'production_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
