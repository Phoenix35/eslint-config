import globals from "globals";
import base from "./base.js";

export default [
  base,
  {
    name: "@phoenix35/browser",
    languageOptions: {
      globals: globals.browser,
      sourceType: "module"
    }
  }
];
