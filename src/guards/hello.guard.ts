import { IGuard } from "@core/interfaces";

export const helloGuard: IGuard = (req, res, next) => {
  if (req.headers.host) {
    console.log(`\t> helloGuard Test => ${req.headers.host}`);
  }
  next();
};
