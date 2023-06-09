import { IRoute } from "@core/interfaces";
import { getError, getHello, hello } from "@app/hello";
import { helloGuard } from "@guard";

const routes: IRoute[] = [
  {
    endpoint: "/err",
    controller: getError,
  },
  {
    endpoint: "/:id",
    controller: getHello,
  },
  {
    endpoint: "/",
    controller: hello,
    method: "get",
    guards: [helloGuard],
  },
];

export default routes;
