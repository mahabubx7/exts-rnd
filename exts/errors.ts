import { GlobalErrorHandler, env } from "@exts";
import { ZodError } from "zod";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Error exTS/Error - Handling application errors
 *===========================================================*/

export class Err extends Error {
  public details: unknown;
  public statusCode: number;
  public stack?: string;

  constructor(message: string, details?: unknown, statusCode?: number) {
    super(message);
    this.statusCode = statusCode || 500;
    this.details = details || { reason: "something went wrong!" };
    Object.setPrototypeOf(this, Err.prototype);
  }
}

export const errorHandler: GlobalErrorHandler = (err, req, res, next) => {
  if (env.debug) console.info("DEBUG = " + env.debug + "\n", err.message);

  if (err instanceof ZodError || err.name === "ZodError") {
    return res.toJson(null, err.statusCode || 406, {
      message: err.message,
      details: err.details?.details,
    });
  }

  return res.toJson(null, err.statusCode || 500, {
    message: err.message || "🚫 Internal Server Error!",
    details: err.details || { reason: "something went wrong!" },
  });
};
