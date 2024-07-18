const dotenv = require('dotenv')
dotenv.config();

const config = {
  "development": {
    'dialect': process.env.DB_DRIVER,
    'host': process.env.DB_HOST,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database':process.env.DB_NAME,
    'port': process.env.DB_PORT,
    'define': {
        "timestamps": false
    },
    // 'dialectOptions': {
    //   'useUTC': false, // for reading from database
    // },
    // 'timezone': '+07:00', // for writing to database
  },
  "production": {
    'dialect': process.env.DB_DRIVER,
    'host': process.env.DB_HOST,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database':process.env.DB_NAME,
    'port': process.env.DB_PORT,
    'define': {
        "timestamps": false
    },
    // 'dialectOptions': {
    //   'useUTC': false, // for reading from database
    // },
    // 'timezone': '+07:00', // for writing to database
  }
}

module.exports = config;
