import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";

const PokedexSchema = require('./schema.js');

const typeDefs = importSchema("./schemas/schema.graphql");
const resolvers = PokedexSchema.resolvers

export const server = new ApolloServer({
  typeDefs,
  resolvers
});
