exports.up = function(knex) {
  return knex.schema.createTable("pokemons", table => {
    table.increments("id");
    table.string("name");
    table.integer("species_id");
    table.integer("height");
    table.integer("weight");
    table.integer("base_experience");
    table.integer("sort_order");
    table.integer("is_default");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemons");
};
