import http from "supertest";
import { app } from "@core/app";

describe("Testing express app", () => {
  it("should spin the server with HTTP:200", async () => {
    const response = await http(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  // depends on response changes at /
  it("should return json with HTTP:200 at /", async () => {
    const response = await http(app).get("/");
    expect(response.body).toStrictEqual({
      statusCode: 200,
      data: {
        message: "exTS 🐈! custom backend framework.",
      },
      error: null,
    });
  });

  it("should return error/HTTP:404 for not found", async () => {
    const response = await http(app).get("/whatever-not-registered");
    expect(response.statusCode).toBe(404);
    expect(response.body).toStrictEqual({
      statusCode: 404,
      data: null,
      error: {
        message: "⛔ Error! 404",
        details: {
          reason: "route couldn't be found.",
          req_url: "/whatever-not-registered",
          method: "GET",
        },
      },
    });
  });

  // custom mock internal server error at /err [should be removed before starting any project]
  it("should return error/HTTP:500 for internal error", async () => {
    const response = await http(app).get("/err");
    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({
      statusCode: 500,
      data: null,
      error: {
        message: "Forced Error!",
        details: {
          reason: "Test purpose only!",
        },
      },
    });
  });
});
