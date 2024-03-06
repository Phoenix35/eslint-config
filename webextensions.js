import globals from "globals";
import browser from "./browser.js";

export default [
  ...browser,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions
      },
      sourceType: "script"
    }
  }
];
