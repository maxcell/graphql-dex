exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("abilities");
  // .del()
  // .then(function() {
  //   const csvFile = __dirname + "/data/abilities.csv";
  //   return knex.raw(
  //     `COPY abilities(id,name,generation_id) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
  //   );
  // });
};
