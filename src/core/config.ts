import { config } from "dotenv";

config(); // invoking .env file parser

interface ENV_VARIABLES {
  port: number;
  debug: boolean;
}

// register environment variable
const env_variables: ENV_VARIABLES = {
  port: Number(process.env.PORT), // application port
  debug: process.env.DEBUG === "true", // application debugging mode
};

// exporting all environment variables from the register
export const { port, debug } = env_variables;
