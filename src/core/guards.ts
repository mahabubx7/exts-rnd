import { Guard, validatorOptions } from "@core/interfaces";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Guard exTS/Guard - Middleware for guarding
 *===========================================================*/

export const validationGuards = (options: validatorOptions) => {
  const validationMiddleware: Guard = (req, res, next) => {
    const { body, params, query } = options;

    if (body) {
      const bodyValidation = body.safeParse(req.body);
      if (bodyValidation.success !== true) {
        return res.toJson(null, 400, {
          message: "Invalid body input!",
          details: bodyValidation.error.issues,
        });
      }
      req.body = bodyValidation.data;
    }

    if (params) {
      const paramsValidation = params.safeParse(req.params);
      if (paramsValidation.success !== true) {
        return res.toJson(null, 400, {
          message: "Invalid params given!",
          details: paramsValidation.error.issues,
        });
      }
      req.body = paramsValidation.data;
    }

    if (query) {
      const queryValidation = query.safeParse(req.query);
      if (queryValidation.success !== true) {
        return res.toJson(null, 400, {
          message: "Invalid query given!",
          details: queryValidation.error.issues,
        });
      }
      req.body = queryValidation.data;
    }

    next();
  };

  return validationMiddleware;
};
