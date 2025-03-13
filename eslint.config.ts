import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsp from "@typescript-eslint/parser";

export default [
  {
    ignores: ["eslint.config.ts"], // 🚀 ESLint ignoriert diese Datei
    files: ["**/*.ts?", "**/*.js?"],
    languageOptions: {
      parser: tsp,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      "no-trailing-spaces": "error",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
];

