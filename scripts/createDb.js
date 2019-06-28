"use strict";
require("dotenv").config();

async function createDatabase() {
  const knex = require("knex")({ client: "pg", connection: {} });
  await knex.raw(`CREATE DATABASE ${process.env.DB_NAME}`);
  await knex.destroy();
}

createDatabase()
  .then(() => {
    console.log(`Successfully created ${process.env.DB_NAME} database!`);
  })
  .catch(err => {
    console.error(err);
  });
