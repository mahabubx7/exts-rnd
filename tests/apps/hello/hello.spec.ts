import http from "supertest";
import { app } from "@core/app";

describe("Testing app/hello", () => {
  it("should spin the server with HTTP:200", async () => {
    const response = await http(app).get("/getHello");
    expect(response.statusCode).toBe(200);
  });

  // depends on response changes at /
  it("should return json with HTTP:200 at /", async () => {
    const response = await http(app).get("/getHello?q=test");
    expect(response.body).toStrictEqual({
      message: "✔ HelloController/getHello",
      params: {
        id: "getHello",
      },
      query: {
        q: "test",
      },
    });
  });
});
