import { config } from "dotenv";

config(); // invoking .env file parser

/**==========================================================*
 * @exTS custom express.js modified framework
 * @Configurations exTS/config - Application config setup
 *===========================================================*/

// register environment variable
const env_variables = {
  port: Number(process.env.PORT), // application port
  debug: process.env.DEBUG === "true", // application debugging mode
};

// exporting all environment variables from the register
export const { port, debug } = env_variables;
