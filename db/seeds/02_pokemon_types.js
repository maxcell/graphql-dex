// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex("pokemon_types")
//     .del()
//     .then(function() {
//       const csvFile = __dirname + "/data/pokemon_types.csv";
//       return knex.raw(
//         `COPY pokemon_types(pokemon_id,type_id,slot) FROM '${csvFile}' DELIMITER ',' CSV HEADER;`
//       );
//     });
// };

var fs = require("fs");
var csv = require("csv");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pokemon_types")
    .del()
    .then(function() {
      const csvFile = __dirname + "/data/pokemon_types.csv";
      const input = fs.createReadStream(csvFile);
      const parser = csv.parse({ delimiter: ",", columns: true });
      var transform = csv.transform(row => {
        const resultObj = {
          pokemon_id: row["pokemon_id"],
          type_id: row["type_id"],
          slot: row["slot"]
        };

        knex("pokemon_types")
          .insert(resultObj)
          .then(res => console.log("Recorded data"));
      });

      input.pipe(parser).pipe(transform);
    });
};
