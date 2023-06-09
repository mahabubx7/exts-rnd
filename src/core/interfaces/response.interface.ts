import { Response } from "express";

export interface CustomResponse<T> {
  data: T;
  error: any;
  statusCode: number;
}

export type ExtendedResponse<T = any> = Response<T> & {
  toJson(data: T, statusCode?: number, error?: any): Response<T>;
};
