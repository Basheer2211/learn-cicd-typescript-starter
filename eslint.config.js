import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // Ignore generated folders ?
    {
        ignores: ["dist/**", "coverage/**", "node_modules/**"],
    },

    // JavaScript + TypeScript rules
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },

    ...tseslint.configs.recommended,
]);