import { Request } from "express";
import { ExtendedResponse } from "@core/interfaces";

// export interface Controller {
//   (
//     req: Request,
//     res: Response,
//     guards?: [] // will be used with IGuard[]
//   ): void;
// }
export type Controller = (
  req: Request,
  res: ExtendedResponse,
  guards?: [] // will be used with IGuard[]
) => void;

export type RouteControllerType = (req: Request, res: ExtendedResponse) => void;
