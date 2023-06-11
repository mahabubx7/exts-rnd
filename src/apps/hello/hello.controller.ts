import { Controller, Err } from "@exts";

export const getHello: Controller = async (req, res) => {
  res.toJson({
    message: "✔ HelloController/getHello",
    params: req.params,
    query: req.query,
  });
};

export const getError: Controller = async (req, res) => {
  throw new Err("");
};
