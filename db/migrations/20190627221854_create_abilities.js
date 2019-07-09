exports.up = function(knex) {
  return knex.schema.createTable("abilities", table => {
    table.increments("id");
    table.string("name");
    table.string("generation_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("abilities");
};
