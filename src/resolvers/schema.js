import knex from "knex";
import config from "../../knexfile";
import Pokemon from "./pokemon.js";
import { merge } from "lodash";

const dbConn = knex(config);

const resolvers = merge({
    Query: {
        types: async (_, __, { dataSources }) => dataSources.pokemonTypesAPI.getTypes(),
        pokemon: async (_, args) => dbConn("pokemons").first().where('name', args.name.toLowerCase()),
        pokemonByTypes: async (_, args, { dataSources }) =>
            dataSources.pokemonAPI.getPokemonByTypes(args.firstTypeName, args.secondTypeName),
    },
}, Pokemon);

export default resolvers;