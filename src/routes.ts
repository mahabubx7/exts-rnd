import { Controller, Route } from "@exts";
import { hello } from "@app/hello";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @routes Register applications & routes here
 *===========================================================*/

// sample welcome route for (root) /
const welcome: Controller = async (_, res) => {
  res.toJson({ message: "exTS 🐈! custom backend framework." });
};

const routes: Route[] = [
  ...hello, // integrated => apps/hello
  {
    endpoint: "/",
    controller: welcome,
    method: "get",
  },
]; // root level <routes> registerer

export default routes;
