import { NextFunction, Request } from "express";
import { CustomResponse, ExtendedResponse } from "@exts";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Response exTS/Response - Application response handler
 * @module ResponseWrapper
 *===========================================================*/

export const responseWrapper = () => {
  return (_: Request, res: ExtendedResponse, next: NextFunction) => {
    res.toJson = <T>(data: T, statusCode = 200, error = null) => {
      const customResponse: CustomResponse<T> = {
        statusCode,
        data,
        error,
      };
      res.charset = "utf-8";
      return res.status(statusCode).json(customResponse);
    };

    next();
  };
};

export default responseWrapper;
