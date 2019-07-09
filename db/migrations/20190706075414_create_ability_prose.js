exports.up = function(knex) {
  return knex.schema.createTable("ability_prose", table => {
    table.increments("id");
    table.integer("ability_id");
    table.integer("local_language_id");
    table.text("short_effect");
    table.text("effect");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ability_prose");
};
