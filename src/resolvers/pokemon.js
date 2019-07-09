export default {
    Pokemon: {
        types: (pokemon, _, { dataSources }) => dataSources.pokemonAPI.getTypesForPokemon(pokemon.id)
    }
}