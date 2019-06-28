exports.up = function(knex) {
  return knex.schema.createTable("pokemon_abilities", table => {
    table.increments("id");
    table.integer("pokemon_id");
    table.integer("ability_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemon_abilities");
};
