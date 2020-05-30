const spriteBase = "https://raw.githubusercontent.com/maxcell/graphql-dex/master/db/seeds/sprites/";
const spriteExtension = ".png"

export default {
  Pokemon: {
    types: (pokemon, _, { dataSources }) =>
      dataSources.pokemonAPI.getTypesForPokemon(pokemon.id),
    abilities: (pokemon, _, { dataSources }) =>
      dataSources.pokemonAPI.getAbilitiesForPokemon(pokemon.id),
    sprite: (pokemon, _, __, ) => spriteBase.concat(pokemon.id).concat(spriteExtension)
  }
};