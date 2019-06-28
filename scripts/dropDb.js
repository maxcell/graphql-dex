'use strict';
require('dotenv').config();

async function dropDatabase() {
  const knex = require('knex')({ client: 'pg', connection: {} });
  await knex.raw(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
  await knex.destroy();
}

dropDatabase()
.then(() => {
  console.log(`Successfully dropped ${process.env.DB_NAME} database!`)
})
.catch(err => {
    console.error(err)
});