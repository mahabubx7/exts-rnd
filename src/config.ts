import { config } from "dotenv";

config(); // invoking .env file parser

// register environment variable
const env_variables = {
  port: process.env.PORT, // application port
  debug: process.env.DEBUG || false,
};

// exporting all environment variables from the register
export const { port, debug } = env_variables;
