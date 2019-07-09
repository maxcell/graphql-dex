export default {
  Pokemon: {
    types: (pokemon, _, { dataSources }) =>
      dataSources.pokemonAPI.getTypesForPokemon(pokemon.id),
    abilities: (pokemon, _, { dataSources }) =>
      dataSources.pokemonAPI.getAbilitiesForPokemon(pokemon.id)
  }
};
