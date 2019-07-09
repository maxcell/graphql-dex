import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";
import PokedexSchema from "./resolvers/schema";

const typeDefs = importSchema("./schemas/schema.graphql");

export const server = new ApolloServer({
  typeDefs,
  resolvers: PokedexSchema
});
