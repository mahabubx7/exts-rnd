import { Route, validationGuards } from "@exts";
import { helloPSchema, helloQSchema } from "./hello.schema";
import { getError, getHello } from "./hello.controller";

// hello app routes
export const hello: Route[] = [
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
