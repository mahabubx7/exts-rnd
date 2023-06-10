import { Guard, RouteControllerType } from "@core/interfaces";

export interface IRoute {
  prefix?: string;
  guards?: Guard[];
  method?: string | "use";
  endpoint: string | undefined;
  controller: RouteControllerType;
}
