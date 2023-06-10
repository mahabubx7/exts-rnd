import { Controller, IRoute } from "@core/interfaces";
import { hello } from "@app/hello";

// sample welcome route for (root) /
const welcome: Controller = async (_, res) => {
  res.toJson({ message: "exTS 🐈! custom backend framework." });
};

/**==========================================================*
 * @exTS custom express.js modified framework
 * @routes Register applications & routes here
 *===========================================================*/

const routes: IRoute[] = [
  ...hello, // hello application hooked
  {
    endpoint: "/",
    controller: welcome,
    method: "get",
  },
];

export default routes;
