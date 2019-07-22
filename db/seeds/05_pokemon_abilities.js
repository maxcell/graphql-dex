const seedFromCSV = require("../utils.js");
exports.seed = seedFromCSV("pokemon_abilities.csv", "pokemon_abilities");
