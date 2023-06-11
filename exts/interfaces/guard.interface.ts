import { Request, NextFunction } from "express";
import { ExtendedResponse } from "@exts";

export interface Guard {
  (req: Request, res: ExtendedResponse, next: NextFunction): void;
}
