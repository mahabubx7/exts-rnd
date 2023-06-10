import { bootstrap, setupApps } from "@core/app";
import routes from "~/src";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Bootstrap start the application
 *===========================================================*/

setupApps([...routes]);

bootstrap(); // spinning up the server
