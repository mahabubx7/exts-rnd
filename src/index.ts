import { bootstrap, setupApps } from "@core/app";
import { Controller } from "@core/interfaces";
import routes from "~/src";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Bootstrap start the application
 *===========================================================*/

// sample welcome route for (root) /
const welcome: Controller = async (_, res) => {
  res.toJson({ message: "exTS 🐈! custom backend framework." });
};

setupApps([
  ...routes,
  {
    endpoint: "/",
    controller: welcome,
    method: "get",
  },
]);

bootstrap(); // spinning up the server
