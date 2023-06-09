import { Err } from "@core/errors";
import { Controller } from "@core/interfaces";

export const hello: Controller = async (_, res) => {
  res.toJson({ message: "exTS 🐈! custom backend framework." });
};

export const getHello: Controller = async (req, res) => {
  res.toJson({
    message: "✔ HelloController/getHello",
    params: req.params,
    query: req.query,
  });
};

export const getError: Controller = async (req, res) => {
  throw new Err("Forced Error!", { reason: "Test purpose only!" }, 400);
};
