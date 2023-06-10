import { IRoute } from "@core/interfaces";
import { hello } from "@app/hello";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @routes Register applications & routes here
 *===========================================================*/

const routes: IRoute[] = [
  ...hello, // hello application added
];

export default routes;
