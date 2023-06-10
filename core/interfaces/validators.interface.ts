import { z } from "zod";

export interface validatorOptions {
  body?: z.Schema<any>;
  query?: z.Schema<any>;
  params?: z.Schema<any>;
}
