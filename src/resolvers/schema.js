import Pokemon from "./pokemon";
import { merge } from "lodash";

const resolvers = merge(
  {
    Query: {
      types: async (_, __, { dataSources }) =>
        dataSources.pokemonTypesAPI.getTypes(),
      abilities: async (_, __, { dataSources }) =>
        dataSources.abilitiesAPI.getAbilities(),
      pokemon: async (_, args, { dataSources }) =>
        dataSources.pokemonAPI.getPokemonByName(args.name),
      pokemonByTypes: async (_, args, { dataSources }) =>
        dataSources.pokemonAPI.getPokemonByTypes(
          args.firstTypeName,
          args.secondTypeName
        ),
      pokemonByAbility: async (_, args, { dataSources }) =>
        dataSources.pokemonAPI.getPokemonByAbility(args.abilityName),
      pokemons: async (_, args, { dataSources }) =>
        dataSources.pokemonAPI.getPokemons(args.limit)
    }
  },
  Pokemon
);

export default resolvers;
