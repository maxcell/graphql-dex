exports.up = function(knex) {
  return knex.schema.createTable("types", table => {
    table.increments("id");
    table.string("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("types");
};
