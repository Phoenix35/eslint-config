/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

"use strict";

module.exports = {
  "env": {
    "node": true
  },
  "plugins": [
    "node"
  ],
  "extends": [
    "@phoenix35/eslint-config",
    "plugin:node/recommended"
  ],
  "rules": {
    "node/handle-callback-err": "error",
    "node/no-path-concat": "error",
    "node/callback-return": "error",
    "node/no-mixed-requires": [
      "error",
      { "grouping": true }
    ],
    "node/no-sync": [
      "error",
      { "allowAtRootLevel": true }
    ],
    "node/prefer-global/buffer": "error",
    "node/prefer-global/console": "error",
    "node/prefer-global/process": "error",
    "node/prefer-global/text-encoder": "error",
    "node/prefer-global/text-decoder": "error",
    "node/prefer-global/url-search-params": "error",
    "node/prefer-global/url": "error",
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error"
  }
};
