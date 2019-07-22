require("dotenv").config();

module.exports = {
  client: "postgresql",
  connection: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS
  },
  pool: {
    min: 0,
    max: 10,
    acquireConnectionTimeout: 30000,
    propagateCreateError: false
  },
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};
