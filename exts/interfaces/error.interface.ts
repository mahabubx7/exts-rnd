import { NextFunction, Request, ErrorRequestHandler } from "express";
import { ExtendedResponse, Err } from "@exts";

export interface GlobalErrorHandler extends ErrorRequestHandler {
  (err: Err, req: Request, res: ExtendedResponse, next: NextFunction): void;
}
