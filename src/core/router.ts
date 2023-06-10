import { NextFunction, Request, Router } from "express";
import {
  ExtendedResponse,
  IRoute,
  RouteControllerWrapper,
} from "@core/interfaces";
import { Err } from "./errors";

// default route 404 handler
const routeNotFoundHandle: RouteControllerWrapper = (req, _) => {
  throw new Err(
    "⛔ Error! 404",
    {
      reason: "route couldn't be found.",
      req_url: req.baseUrl,
      method: req.method,
    },
    404
  );
};

// default route 404
const route404: IRoute = {
  endpoint: "*",
  method: "use",
  controller: routeNotFoundHandle,
};

/**==========================================================*
 * @exTS custom express.js modified framework by @mahabubx7
 * @Core exTS/Core/Route - Application route handler
 * @class RouteHandler
 *===========================================================*/

class RouteHandler {
  private router: Router = Router();
  private routeList: IRoute[] = [];

  constructor(routes: IRoute[] = []) {
    this.routeList = [...routes, ...this.routeList];
    this.mappingRoutes();
  }

  add(routeObj: IRoute): void {
    this.routeList.unshift(routeObj);
    this.mappingRoutes();
  }

  register(routeObj: IRoute[]): void {
    const carrier: IRoute[] = [];
    const list: IRoute[] = [];
    for (const r of routeObj) {
      if (["", "*", "/*"].includes(r.endpoint)) {
        carrier.push(r);
        console.log(r.endpoint);
      } else {
        list.push(r);
      }
    }
    carrier.map((r) => this.add(r));
    list.map((r) => this.add(r));
    this.routeList.push(route404); // default 404
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
      const method = routeObj.method?.toLowerCase()
        ? routeObj.method?.toLowerCase()
        : "get";
      this.router[method](
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
