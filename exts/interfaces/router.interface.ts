import { Guard, RouteControllerType } from "@exts";

export interface Route {
  prefix?: string;
  guards?: Guard[];
  method?: string | "use";
  endpoint: string | undefined;
  controller: RouteControllerType;
}
