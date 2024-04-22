import globals from "globals";
import base from "./base.js";

export default [
  base,
  {
    name: "@phoenix35/base",
    languageOptions: {
      globals: globals["shared-node-browser"]
    }
  }
];
