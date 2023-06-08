import { Request, Response, NextFunction } from "express";

export interface IGuard {
  (req: Request, res: Response, next: NextFunction): void;
}
