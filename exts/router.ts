import { NextFunction, Request, Router } from "express";
import { ExtendedResponse, Route, RouteControllerWrapper, Err } from "@exts";

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
const route404: Route = {
  endpoint: "*",
  method: "use",
  controller: routeNotFoundHandle,
};

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Core exTS/route - Application route handler
 * @class RouteHandler
 *===========================================================*/

class RouteHandler {
  private router: Router = Router();
  private routeList: Route[] = [];

  constructor(routes: Route[] = []) {
    this.routeList = [...routes, ...this.routeList];
    this.mappingRoutes();
  }

  add(routeObj: Route): void {
    this.routeList.unshift(routeObj);
    this.mappingRoutes();
  }

  register(routeObj: Route[]): void {
    const carrier: Route[] = [];
    const list: Route[] = [];
    for (const r of routeObj) {
      if (["", "*", "/*"].includes(r.endpoint)) {
        carrier.push(r);
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

export const router = new RouteHandler(); // returns as its object
