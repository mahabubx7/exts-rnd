import { setupApps } from "@core/app";
import routes from "./src/routes";

setupApps([...routes]); // @exTS application pre-setup for tests
