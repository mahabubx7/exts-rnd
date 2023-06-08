import { IGuard, RouteControllerType } from "@core/interfaces";
// import { Request, Response } from "express";

export interface IRoute {
  prefix?: string;
  guards?: IGuard[];
  method?: string | "use";
  endpoint: string;
  controller: RouteControllerType;
}
