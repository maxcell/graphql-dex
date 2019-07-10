import express from "express";
import { server } from "./server";

// const app = express();
// server.applyMiddleware({ app });

server.listen({ port: process.env.SERVER_PORT }).then(({ url }) => {
  console.log(`🚀 server ready at http://localhost:4000/${url}`);
});
