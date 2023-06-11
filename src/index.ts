import { bootstrap, setupApps } from "@exts";
import routes from "~/src";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Bootstrap start the application
 *===========================================================*/

setupApps([...routes]); // setting the apps into exts

bootstrap(); // spinning up the server
