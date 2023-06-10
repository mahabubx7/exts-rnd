import { NextFunction, Request } from "express";
import { ExtendedResponse } from "@core/interfaces";

export interface Controller {
  (req: Request, res: ExtendedResponse, next?: NextFunction): void;
}

export interface RouteControllerType {
  (req: Request, res: ExtendedResponse, next?: NextFunction): void;
}

export interface RouteControllerWrapper {
  (req: Request, res: ExtendedResponse, next: NextFunction): void;
}
