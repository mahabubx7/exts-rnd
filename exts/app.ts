import express, { Express } from "express";
import { Route, env, errorHandler, responseWrapper, router } from "@exts";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @App exTS - Application instance
 *===========================================================*/

export const app: Express = express();

export const setupApps = (routes: Route[]) => {
  router.register(routes); // register root level routes
  app.use(express.json());
  app.use(responseWrapper()); // custom response modify
  app.use(express.urlencoded({ extended: true }));
  app.use(router.getRoutes());
  app.use(errorHandler); // global error handling
};

export const bootstrap = async () => {
  // ... integrations before starting the server
  // i.e. database connection
  app.listen(env.port, () =>
    console.log(`🚀 exTS server is online at http://localhost:${env.port}`)
  );
};
