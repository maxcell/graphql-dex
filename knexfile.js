require('dotenv').config()

// Database confiurations go here!
// Find documentation here: https://knexjs.org/#knexfile

module.exports = {
  client: 'postgresql',
  connection: {
    database: process.env.DB_NAME
  },
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};
