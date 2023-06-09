import { debug } from "@core/config";
import { GlobalErrorHandler } from "@core/interfaces";

export class Err extends Error {
  public details: unknown;
  public statusCode: number;
  public stack?: string;

  constructor(message: string, details?: unknown, statusCode?: number) {
    super(message);
    this.statusCode = statusCode || 500;
    this.details = details || "Something went wrong";
    Object.setPrototypeOf(this, Err.prototype);
  }
}

const errorHandler: GlobalErrorHandler = (err, req, res, next) => {
  if (debug) console.info("DEBUG = " + debug + "\n", err.message);
  return res.toJson(null, err.statusCode, {
    message: err.message,
    details: err.details,
  });
};

export default errorHandler;
