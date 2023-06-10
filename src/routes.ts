import { Controller, IRoute } from "@core/interfaces";
import { hello } from "@app/hello";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @routes Register applications & routes here
 *===========================================================*/

// sample welcome route for (root) /
const welcome: Controller = async (_, res) => {
  res.toJson({ message: "exTS 🐈! custom backend framework." });
};

const routes: IRoute[] = [
  ...hello, // hello application added
  {
    endpoint: "/",
    controller: welcome,
    method: "get",
  },
];

export default routes;
