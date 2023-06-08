import { Request, Response } from "express";

// export interface Controller {
//   (
//     req: Request,
//     res: Response,
//     guards?: [] // will be used with IGuard[]
//   ): void;
// }
export type Controller = (
  req: Request,
  res: Response,
  guards?: [] // will be used with IGuard[]
) => void;

export type RouteControllerType = (req: Request, res: Response) => void;
