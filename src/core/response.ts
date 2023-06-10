import { NextFunction, Request } from "express";
import { CustomResponse, ExtendedResponse } from "@core/interfaces";

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
      return res.status(statusCode).json(customResponse);
    };

    next();
  };
};

export default responseWrapper;
