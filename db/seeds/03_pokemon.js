exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pokemons");
  // .del()
  // .then(function() {
  //   const csvFile = __dirname + "/data/pokemon.csv";
  //   return knex.raw(
  //     `COPY pokemons(id,name,species_id,height,weight,base_experience,sort_order,is_default) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
  //   );
  // });
};
