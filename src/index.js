import express from "express";
import { server } from "./server";

const app = express();
server.applyMiddleware({ app });

app.listen({ port: process.env.SERVER_PORT }, () => {
  console.log(`🚀 server ready at http://localhost:4000/${server.graphqlPath}`);
});
