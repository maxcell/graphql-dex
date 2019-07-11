import knex from "knex";
import config from "../knexfile";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";
import PokedexSchema from "./resolvers/schema";
import PokemonTypesAPI from "./datasources/pokemontypes";
import AbilitiesAPI from "./datasources/abilities";
import PokemonAPI from "./datasources/pokemon";

const dbConn = knex(config);

const typeDefs = importSchema("./schemas/schema.graphql");

export const server = new ApolloServer({
  typeDefs,
  resolvers: PokedexSchema,
  dataSources: () => ({
    pokemonTypesAPI: new PokemonTypesAPI(dbConn),
    pokemonAPI: new PokemonAPI(dbConn),
    abilitiesAPI: new AbilitiesAPI(dbConn)
  })
});
