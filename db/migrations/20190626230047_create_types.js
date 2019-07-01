exports.up = function(knex) {
  return knex.schema.createTable("types", table => {
    table.increments("id");
    table.string("name");
    table.string("generation_id");
    table.string("damage_class_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("types");
};
