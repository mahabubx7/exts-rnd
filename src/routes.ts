import { IRoute } from "@core/interfaces";
import { getHello, hello } from "@app/hello";
import { helloGuard } from "@guard";

const routes: IRoute[] = [
  {
    endpoint: "/:id",
    controller: getHello,
    // method: "get",
  },
  {
    endpoint: "/",
    controller: hello,
    method: "get",
    guards: [helloGuard],
  },
];

export default routes;
