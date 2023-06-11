import { Err, Guard, validatorOptions } from "@exts";

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
        const err = new Err(
          "Invalid body given!",
          {
            details: bodyValidation.error.issues,
          },
          406
        );
        err.name = "ZodError";
        throw err;
      }
      req.body = bodyValidation.data;
    }

    if (params) {
      const paramsValidation = params.safeParse(req.params);
      if (paramsValidation.success !== true) {
        const err = new Err(
          "Invalid params given!",
          {
            details: paramsValidation.error.issues,
          },
          406
        );
        err.name = "ZodError";
        throw err;
      }
      req.body = paramsValidation.data;
    }

    if (query) {
      const queryValidation = query.safeParse(req.query);
      if (queryValidation.success !== true) {
        const err = new Err(
          "Invalid query given!",
          {
            details: queryValidation.error.issues,
          },
          406
        );
        err.name = "ZodError";
        throw err;
      }
      req.body = queryValidation.data;
    }

    next();
  };

  return validationMiddleware;
};
