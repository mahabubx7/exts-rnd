import http from "supertest";
import { app } from "@core/app";

describe("Testing app/hello", () => {
  it("should spin the server with HTTP:200", async () => {
    const response = await http(app).get("/hello/p?q=test");
    expect(response.statusCode).toBe(200);
  });

  // depends on response changes at /
  it("should return json with HTTP:200 at /", async () => {
    const response = await http(app).get("/hello/p?q=test");
    expect(response.body).toStrictEqual({
      statusCode: 200,
      data: {
        message: "✔ HelloController/getHello",
        params: {
          id: "p",
        },
        query: {
          q: "test",
        },
      },
      error: null,
    });
  });
});
