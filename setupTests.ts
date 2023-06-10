import { setupApps } from "@core/app";
import routes from "~/src";

setupApps([...routes]); // @exTS application pre-setup for tests
