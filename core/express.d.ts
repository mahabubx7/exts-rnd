import { ExtendedResponse } from "@core/interfaces";

/**==========================================================*
 * @exTS custom express.js modified framework
 * @types exTS/express - decorated types for modifications
 *===========================================================*/

declare namespace Express {
  interface Response {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJson<T>(data: T, statusCode?: number, error?: any): ExtendedResponse;
  }
}
