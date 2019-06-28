
exports.up = function(knex) {
  return knex.schema.createTable('pokemons', (table) => {
    table.increments('id');
    table.integer('pokedex_number');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemons');
};
