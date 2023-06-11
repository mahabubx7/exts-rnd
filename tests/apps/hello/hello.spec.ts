import http from "supertest";
import { app } from "@exts";

describe("Testing app/hello", () => {
  // depends on response changes at /hello/p?q=test
  it("should return error with HTTP:406 at /", async () => {
    const response = await http(app).get("/hello/p?q=test");
    expect(response.statusCode).toBe(406);
    expect(response.body).toStrictEqual({
      statusCode: 406,
      data: null,
      error: {
        message: "Invalid params given!",
        details: [
          {
            code: "too_small",
            minimum: 2,
            type: "string",
            inclusive: true,
            exact: false,
            message: "String must contain at least 2 character(s)",
            path: ["id"],
          },
        ],
      },
    });
  });
});
