import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: 2023, sourceType: "module" },
    settings: { react: { version: "detect" } },
    plugins: ["@typescript-eslint", "react-refresh", "react-hooks", "import"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier",
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    rules: {
      "react-refresh/only-export-components": "warn",
      "import/order": [
        "warn",
        { "newlines-between": "always", alphabetize: { order: "asc" } },
      ],
    },
    ignorePatterns: ["dist", "node_modules"],
    // files: ["**/*.{ts,tsx}"],
    // extends: [
    //   js.configs.recommended,
    //   tseslint.configs.recommended,
    //   reactHooks.configs["recommended-latest"],
    //   reactRefresh.configs.vite,
    // ],
    // languageOptions: {
    //   ecmaVersion: 2020,
    //   globals: globals.browser,
    // },
  },
]);
