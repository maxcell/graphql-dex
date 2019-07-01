exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("types")
    .del()
    .then(function() {
      const csvFile = __dirname + "/data/types.csv";
      return knex.raw(
        `COPY types(id,name,generation_id,damage_class_id) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
      );
    });
};
