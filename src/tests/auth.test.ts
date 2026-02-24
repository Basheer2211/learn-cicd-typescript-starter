import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key when header is valid", () => {
    const headers = {
      authorization: "ApiKey 12345",
    } as any;

    expect(getAPIKey(headers)).toBe("12345");
  });

  test("returns null when authorization header is missing", () => {
    const headers = {} as any;

    expect(getAPIKey(headers)).toBeNull();
  });
});
