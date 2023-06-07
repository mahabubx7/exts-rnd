import express, { Express } from "express";
import { router } from "@router/index";
import { port } from "@core/config";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router); // application router

// bootstrap
export const bootstrap = async () => {
  // ... upcoming invokes or callbacks
  app.listen(port, () =>
    console.log(`🚀 exTS server is online at http://localhost:${port}`)
  );
};
