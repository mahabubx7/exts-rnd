import { NextFunction, Request, Router } from "express";
import {
  ExtendedResponse,
  IRoute,
  RouteControllerWrapper,
} from "@core/interfaces";

class RouteHandler {
  private router: Router = Router();
  private routeList: IRoute[] = [];

  constructor(routes: IRoute[] = []) {
    this.routeList = [...routes];
    this.mappingRoutes();
  }

  add(routeObj: IRoute): void {
    this.routeList.push(routeObj);
    this.mappingRoutes();
  }

  register(routeObj: IRoute[]): void {
    this.routeList = [...this.routeList, ...routeObj];
    this.mappingRoutes();
  }

  promiseHandler(controller: RouteControllerWrapper) {
    return (req: Request, res: ExtendedResponse, next: NextFunction) => {
      Promise.resolve(controller(req, res, next)).catch(next);
    };
  }

  mappingRoutes(): void {
    for (const routeObj of this.routeList) {
      const guards = routeObj.guards || [];
      this.router[routeObj.method?.toLowerCase() || "get"](
        routeObj.endpoint,
        guards,
        this.promiseHandler(routeObj.controller)
      );
    }
  }

  getRoutes(): Router {
    return this.router;
  }
}

export default new RouteHandler(); // returns as its object
