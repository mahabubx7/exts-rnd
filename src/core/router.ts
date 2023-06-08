import { Router } from "express";
import { IRoute } from "@core/interfaces";

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

  mappingRoutes(): void {
    for (const routeObj of this.routeList) {
      const guards = routeObj.guards || [];
      this.router[routeObj.method.toLowerCase()](
        routeObj.endpoint,
        guards,
        routeObj.controller
      );
    }
    // console.log(this.routeList);
  }

  getRoutes(): Router {
    return this.router;
  }
}

export default new RouteHandler(); // returns as its object
