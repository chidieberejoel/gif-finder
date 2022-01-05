import { app, graphqlServer } from "./src";
import { env, logger } from "./src/config";

function startServer({ port = process.env.PORT } = {}) {
  return new Promise((resolve) => {
    const server = app.listen(port || 4000, (event) => {
      if (event) { logger.info(event); } else { logger.info(`Listening at ${server.address().port}${graphqlServer.graphqlPath}`); }
    });
    resolve(server);
  });
}

startServer({ port: env.port }).catch((error) => {
  logger.warn(`Error starting server: ${error.stack}`);
  process.exit(1);
});
