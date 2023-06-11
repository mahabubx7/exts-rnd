import { config } from "dotenv";

config(); // invoking .env file parser

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Configurations exTS/config - Application config setup
 *===========================================================*/

const parseVariables = {
  PORT: (str: string) => Number(str),
  DEBUG: (str: string) =>
    ["true", "True", "TRUE", "1"].includes(str) ? true : false,
  // to be added more
};

const env_vars = process.env;

// register environment variable
export const env = {
  port: parseVariables.PORT(env_vars.PORT),
  debug: parseVariables.DEBUG(env_vars.DEBUG),
  // to be added more
};
