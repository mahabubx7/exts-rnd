import { validationGuards } from "@core/guards";
import { IRoute } from "@core/interfaces";
import { helloPSchema, helloQSchema } from "./hello.schema";
import { getError, getHello } from "./hello.controller";

// hello app routes
export const hello: IRoute[] = [
  {
    endpoint: "/err",
    controller: getError,
    method: "get",
  },
  {
    endpoint: "/hello/:id",
    controller: getHello,
    method: "get",
    guards: [
      validationGuards({
        query: helloQSchema,
        params: helloPSchema,
      }),
    ],
  },
];
