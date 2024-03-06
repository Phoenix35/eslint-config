import nodePlugin from "eslint-plugin-n";
import base from "./base.js";

export default [
  base,
  ...nodePlugin.configs["flat/mixed-esm-and-cjs"],
  {
    rules: {
      "n/exports-style": ["error", "module.exports"],
      "n/handle-callback-err": "error",
      "n/no-callback-literal": "error",
      "n/no-path-concat": "error",
      "n/no-sync": [ "error", { allowAtRootLevel: true } ],
      "n/prefer-node-protocol": "error",
      "n/prefer-promises/dns": "error",
      "n/prefer-promises/fs": "error",
    }
  }
];
