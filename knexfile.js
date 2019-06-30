require("dotenv").config();

module.exports = {
  client: "postgresql",
  connection: {
    database: process.env.DB_NAME,
    hostname: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS
  },
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};
