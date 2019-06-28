exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("types")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("types").insert([
        { name: "Normal" },
        { name: "Fighting" },
        { name: "Flying" },
        { name: "Poison" },
        { name: "Ground" },
        { name: "Rock" },
        { name: "Bug" },
        { name: "Ghost" },
        { name: "Steel" },
        { name: "Fire" },
        { name: "Water" },
        { name: "Grass" },
        { name: "Electric" },
        { name: "Psychic" },
        { name: "Ice" },
        { name: "Dragon" },
        { name: "Dark" },
        { name: "Fairy" }
      ]);
    });
};
