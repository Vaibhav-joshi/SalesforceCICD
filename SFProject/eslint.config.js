import { Linter } from '@eslint/eslintrc';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      import: require("eslint-plugin-import"),
      jest: require("eslint-plugin-jest"),
      lwc: require("@lwc/eslint-plugin-lwc"),
    },
    rules: {
      "import/no-unresolved": "error",
      "jest/no-disabled-tests": "warn",
      "semi": ["error", "always"],
    },
  },
];
