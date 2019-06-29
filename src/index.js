import { server } from "./server";

server.listen().then(({ url }) => {
  console.log(`🚀 server ready at ${url}`);
});
