exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pokemon_abilities");
  // .del()
  // .then(function() {
  //   const csvFile = __dirname + "/data/pokemon_abilities.csv";
  //   return knex.raw(
  //     `COPY pokemon_abilities(pokemon_id,ability_id,is_hidden,slot) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
  //   );
  // });
};
