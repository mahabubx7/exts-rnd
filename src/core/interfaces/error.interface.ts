import { NextFunction, Request, ErrorRequestHandler } from "express";
import { ExtendedResponse, RouteControllerWrapper } from "@core/interfaces";
import { Err } from "@core/errors";

export interface GlobalErrorHandler extends ErrorRequestHandler {
  (err: Err, req: Request, res: ExtendedResponse, next: NextFunction): void;
}

export interface ErrorGuard {
  (
    req: Request,
    res: ExtendedResponse,
    next: NextFunction
  ): void | RouteControllerWrapper;
}
