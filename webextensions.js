import globals from "globals";
import browser from "./browser.js";

export default [
  ...browser,
  {
    name: "@phoenix35/webextensions",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions
      },
      sourceType: "script"
    }
  }
];
