import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
    test("returns api key", () => {
        const headers: Record<string, string> = {
            authorization: "ApiKey 12345",
        };

        expect(getAPIKey(headers)).toBe("12345");
    });
});