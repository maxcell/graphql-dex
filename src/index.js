import { server } from "./server";

server
  .listen({
    host: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT
  })
  .then(({ url }) => {
    console.log(`🚀 server ready at ${url}`);
  });
