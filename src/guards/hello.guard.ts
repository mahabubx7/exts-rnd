import { Guard } from "@core/interfaces";

export const helloGuard: Guard = (req, res, next) => {
  if (req.headers.host) {
    console.log(`\t> helloGuard Test => ${req.headers.host}`);
  }
  next();
};
