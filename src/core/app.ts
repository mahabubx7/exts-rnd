import express, { Express } from "express";
import { port } from "@core/config";
import router from "@core/router";
import responseWrapper from "@core/response";
import routes from "../routes";

export const app: Express = express();
router.register(routes);

app.use(express.json());
app.use(responseWrapper()); // custom response modify
app.use(express.urlencoded({ extended: true }));
app.use(router.getRoutes());

// bootstrap
export const bootstrap = async () => {
  // ... upcoming invokes or callbacks
  app.listen(port, () =>
    console.log(`🚀 exTS server is online at http://localhost:${port}`)
  );
};
