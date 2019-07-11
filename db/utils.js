module.exports = function(csvFileName, tableName) {
  const fs = require("fs");
  const csv = require("csv");

  function getCSVRows(filepath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, (err, fileData) => {
        csv.parse(fileData, { columns: true }, function(err, rows) {
          resolve(rows);
        });
      });
    });
  }

  return function(knex) {
    const csvFilePath = __dirname + `/seeds/data/${csvFileName}`;
    return knex(tableName)
      .del()
      .then(() => getCSVRows(csvFilePath))
      .then(rows => {
        return knex(tableName).insert(rows);
      });
  };
};
