import express, { Express } from "express";
import { router } from "@router/index";
import { port } from "@core/config";

export const arion: Express = express();

arion.use(express.json());
arion.use(express.urlencoded({ extended: true }));
arion.use(router); // application router

// bootstrap
export const bootstrap = async () => {
  // ... upcoming invokes or callbacks
  arion.listen(port, () =>
    console.log(`🚀 Arion Server is online at http://localhost:${port}`)
  );
};
