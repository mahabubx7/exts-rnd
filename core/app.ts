import express, { Express } from "express";
import { port } from "@core/config";
import { IRoute } from "@core/interfaces";
import router from "@core/router";
import errorHandler from "@core/errors";
import responseWrapper from "@core/response";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @App exTS - Application instance
 *===========================================================*/

export const app: Express = express();

export const setupApps = (routes: IRoute[]) => {
  router.register(routes);
  app.use(express.json());
  app.use(responseWrapper()); // custom response modify
  app.use(express.urlencoded({ extended: true }));
  app.use(router.getRoutes());
  app.use(errorHandler); // global error handling
};

export const bootstrap = async () => {
  // ... upcoming invokes or callbacks
  app.listen(port, () =>
    console.log(`🚀 exTS server is online at http://localhost:${port}`)
  );
};
