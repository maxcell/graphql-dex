exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ability_prose")
    .del()
    .then(function() {
      const csvFile = __dirname + "/data/ability_prose.csv";
      return knex.raw(
        `COPY ability_prose(ability_id,local_language_id,short_effect,effect) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
      );
    });
};
