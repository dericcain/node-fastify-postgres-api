import * as fastify from 'fastify';
import routes from './routes';
import { Options } from './config/swagger';
import { config } from './config';
import swagger from 'fastify-swagger';
import { createConnection } from 'typeorm';

const env = process.env.NODE_ENV;

// Configure HTTP server
const app = fastify.default({ logger: true });

// Register Swagger
app.register(swagger, Options);

routes.forEach(route => {
  app.route(route);
});

const start = async (): Promise<void> => {
  try {
    if (env !== 'test') {
      const c = await createConnection();
      await c.synchronize();
      // await connection.connect();
    }
    await app.listen(config.app.port);
    app.swagger();
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

export default app;
