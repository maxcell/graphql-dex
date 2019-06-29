import dotenv from "dotenv";
import knex from "knex";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";

dotenv.config();

const dbConn = knex({
  client: "postgresql",
  connection: {
    database: process.env.DB_NAME
  }
});

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
