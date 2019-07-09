import knex from "knex";
import config from "../../knexfile";
import Pokemon from "./pokemon.js";
import { merge } from "lodash";

const dbConn = knex(config);

const resolvers = merge({
    Query: {
        types: async (_, __, { dataSources }) => dataSources.pokemonTypesAPI.getTypes(),
        pokemon: async (_, args) => dbConn("pokemons").first().where('name', args.name.toLowerCase()),
        pokemonByTypes: async (_, args) => {
            let typeQuery = dbConn("pokemons")
                .select("pokemons.*")
                .join("pokemon_types", "pokemons.id", "=", "pokemon_types.pokemon_id")
                .join("types", "pokemon_types.type_id", "=", "types.id")
                .where("types.name", args.firstTypeName.toLowerCase())

            if (args.secondTypeName !== undefined) {
                typeQuery = typeQuery
                    .orWhere("types.name", args.secondTypeName.toLowerCase())
                    .groupBy("pokemons.id")
                    .havingRaw('count(*) = ?', [2])
            }

            return typeQuery
                .orderBy("pokemons.id");
        },
    },
}, Pokemon);

export default resolvers;