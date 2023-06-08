import { IRoute } from "@core/interfaces";
import { getHello, hello } from "@app/hello";
import { helloGuard } from "./guards";

const routes: IRoute[] = [
  {
    endpoint: "/:id",
    controller: getHello,
    method: "get",
  },
  {
    endpoint: "/",
    controller: hello,
    method: "get",
    guards: [helloGuard],
  },
];

export default routes;
