import globals from "globals";
import browser from "./browser.js";

export default [
  ...browser,
  {
    name: "@phoenix35/userscript",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.greasemonkey
      },
      sourceType: "script"
    }
  }
];
