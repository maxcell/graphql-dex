exports.up = function(knex) {
  return knex.schema.createTable("pokemons", table => {
    table.increments("id");
    table.integer("pokedex_number");
    table.integer("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemons");
};
