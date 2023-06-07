import http from "supertest";
import { arion } from "@core/arion";

describe("Testing express app", () => {
  it("should spin the server with HTTP:200", async () => {
    const response = await http(arion).get("/");
    expect(response.statusCode).toBe(200);
  });

  // depends on response changes at /
  it("should return json with HTTP:200 at /", async () => {
    const response = await http(arion).get("/");
    expect(response.body).toStrictEqual({
      message: "Welcome! to `ArionJS` 🐈 back-end nodejs framework.",
    });
  });
});
