
exports.up = function(knex) {
  return knex.schema.createTable('pokemon_types', (table) => {
    table.increments('id');
    table.integer('pokemon_id');
    table.integer('type_id');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('pokemon_types');
};
