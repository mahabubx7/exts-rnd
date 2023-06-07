import { Request, Response, Router } from "express";

const router = Router();

// greetings
router.get("/", (_: Request, res: Response) => {
  res.json({ message: "Welcome! to `ArionJS` 🐈 back-end nodejs framework." });
});

export { router };
