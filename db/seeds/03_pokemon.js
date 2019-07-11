const seedFromCSV = require("../utils.js");
exports.seed = seedFromCSV("pokemon.csv", "pokemons");
