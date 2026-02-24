import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

const person = {
    isActive: true,
    age: 32,
};

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("is active", () => {
        expect(person.isActive).toBeTruthy();
    });
});