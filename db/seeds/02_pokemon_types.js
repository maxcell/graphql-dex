exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pokemon_types")
    .del()
    .then(function() {
      const csvFile = __dirname + "/data/pokemon_types.csv";
      return knex.raw(
        `COPY pokemon_types(pokemon_id,type_id,slot) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
      );
    });
};
