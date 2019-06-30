import knex from "knex";
import config from "../knexfile";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";

const dbConn = knex(config);

const resolvers = {
  Query: {
    types: async () => dbConn("types")
  }
};

const typeDefs = importSchema("./schemas/schema.graphql");

export const server = new ApolloServer({
  typeDefs,
  resolvers
});
