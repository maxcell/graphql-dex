var fs = require("fs");
var csv = require("csv");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("types")
    .del()
    .then(function() {
      const csvFile = __dirname + "/data/types.csv";
      const input = fs.createReadStream(csvFile);
      const parser = csv.parse({ delimiter: ",", columns: true });
      var transform = csv.transform(row => {
        const resultObj = {
          id: row["id"],
          name: row["name"],
          generation_id: row["generation_id"],
          damage_class_id: row["damage_class_id"]
        };

        knex("types")
          .insert(resultObj)
          .then(res => console.log("Recorded data"));
      });

      input.pipe(parser).pipe(transform);
    });
};
