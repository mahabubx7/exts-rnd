import { ExtendedResponse } from "@core/interfaces";

declare namespace Express {
  interface Response {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJson<T>(data: T, statusCode?: number, error?: any): ExtendedResponse;
  }
}
