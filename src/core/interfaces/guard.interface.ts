import { Request, NextFunction } from "express";
import { ExtendedResponse } from "@core/interfaces";

export interface Guard {
  (req: Request, res: ExtendedResponse, next: NextFunction): void;
}
