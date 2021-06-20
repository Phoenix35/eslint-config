/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

"use strict";

module.exports = {
  "root": true,
  "env": {
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "plugins": [
    "jsdoc"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:jsdoc/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    // Changes to eslint:recommended
    "no-inner-declarations": "off",
    "no-empty": [
      "error",
      { "allowEmptyCatch": true } // Optional catch
    ],
    "no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true,
        "caughtErrors": "all" // Use optional catch instead
      }
    ],
    "no-unsafe-negation": [
      "error",
      { "enforceForOrderingRelations": true }
    ],
    "no-extra-boolean-cast": [
      "error",
      { "enforceForLogicalOperands": true }
    ],
    "no-irregular-whitespace": [
      "error",
      { "skipStrings": false }
    ],
    "use-isnan": [
      "error",
      { "enforceForIndexOf": true }
    ],
    "valid-typeof": [
      "error",
      { "requireStringLiterals": true }
    ],

    // Changes to jsdoc/recommended
    "jsdoc/require-jsdoc": [ "off" ],
    "jsdoc/require-example": [ "off" ],

    "no-await-in-loop": "warn",
    "no-lonely-if": "error",

    // Parens styling
    "no-extra-parens": [
      "error",
      "all",
      {
        "conditionalAssign": false,
        "returnAssign": false,
      }
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "no-return-assign": "error",

    "no-loss-of-precision": "error",
    "no-template-curly-in-string": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",

    // get/set
    "accessor-pairs": "error",
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet"
    ],

    "array-callback-return": "error",
    "class-methods-use-this": "error",

    // Code complexity
    "complexity": "error",
    "max-nested-callbacks": [
      "error",
      { "max": 4 }
    ],
    "max-statements-per-line": "error",

    "consistent-return": "error",

    "curly": [
      "error",
      "multi-or-nest",
      "consistent"
    ],

    // Switch styling
    "default-case-last": "error",
    "default-param-last": "warn",

    // Object property access styling
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": "error",

    "eqeqeq": [
      "error",
      "always",
      { "null": "ignore" }
    ],
    "guard-for-in": "error",
    "no-caller": "error", // But you're in strict mode anyway, right?
    "no-constructor-return": "error",
    "no-div-regex": "error",

    // return
    "no-else-return": "error",
    "no-useless-return": "error",
    "no-promise-executor-return": "error",

    "no-empty-function": "error",
    "no-eq-null": "off", // See eqeqeq
    // eval
    "no-eval": "error",
    "no-implied-eval": "error",

    "no-extend-native": "error",

    // .bind/.call
    "no-extra-bind": "error",
    "no-useless-call": "error",
    "prefer-spread": "error",

    // Labels
    "no-extra-label": "error",
    "no-label-var": "error",

    "no-implicit-coercion": [
      "error",
      {
        "disallowTemplateShorthand": true,
        "allow": [ "!!" ]
      }
    ],
    "no-implicit-globals": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "warn",
      {
        "ignore": [
          0,
          "0n",
          1,
          "1n"
        ],
        "ignoreArrayIndexes": true,
        "enforceConst": true
      }
    ],

    // Spaces styling
    "key-spacing": "error",
    "keyword-spacing": "error",
    "space-infix-ops": "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "space-before-function-paren": "error",
    "space-unary-ops": "error",
    "operator-linebreak": "error",
    "multiline-ternary": "error",

    "no-multi-str": "error",

    // new
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new-object": "error",
    "no-array-constructor": "error",

    "no-octal-escape": "error",
    "no-param-reassign": "off", // You're in strict mode and don't touch arguments anyway
    "no-proto": "error",
    "no-return-await": "warn", // warn because it's a valid concern in a try block
    "no-self-compare": "error",
    "no-sequences": "error",

    // Some error handling
    "no-throw-literal": "error",
    "prefer-promise-reject-errors": "error",

    "no-unreachable-loop": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": [
      "error",
      { "allowTaggedTemplates": true }
    ],
    "no-useless-concat": "error",
    "prefer-regex-literals": "error",
    "radix": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "wrap-iife": [
      "error",
      "inside"
    ],
    "yoda": [
      "error",
      "never",
      { "exceptRange": true }
    ],
    "strict": [ "error" ],
    "no-shadow": [
      "error",
      {
        "builtinGlobals": true,
        "allow": ["name"] // because of `window.name`
      }
    ],
    "no-undef-init": "error",
    "no-use-before-define": [
      "error",
      "nofunc"
    ],

    // Array styling
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "object-curly-newline": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": [
      "error",
      { "allowAllPropertiesOnSameLine": true }
    ],
    "computed-property-spacing": "error",

    "block-spacing": "error",
    "brace-style": "error",
    "space-before-blocks": "error",
    "camelcase": "error",

    // Comma styling
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-style": "error",
    "comma-spacing": "error",

    "consistent-this": "error",
    "eol-last": "error",

    // Function styling
    "func-call-spacing": "error",
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "func-name-matching": [
      "warn",
      { "considerPropertyDescriptor": true }
    ],
    "func-names": [
      "error",
      "as-needed"
    ],
    // Arrow function styling
    "arrow-body-style": "error",
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    // Generator function styling
    "generator-star-spacing": [
      "error",
      "after" // Align with yield*
    ],
    "yield-star-spacing": "error",

    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": "first",
        "outerIIFEBody": 0
      }
    ],
    "lines-around-comment": [
      "error",
      {
        "afterBlockComment": false,
        "afterLineComment": false
      }
    ],

    // Newlines styling
    "padded-blocks": [
      "error",
      "never"
    ],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "directive", "next": "*" },
      { "blankLine": "any",    "prev": "directive", "next": "directive" },
      { "blankLine": "always", "prev": "import", "next": "*"},
      { "blankLine": "any",    "prev": "import", "next": "import"},
      { "blankLine": "always", "prev": ["const", "let"], "next": "*"},
      { "blankLine": "any",    "prev": ["const", "let"], "next": ["const", "let"]},
      { "blankLine": "always", "prev": "function", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "function" },
      { "blankLine": "always", "prev": "*", "next": "return" },
    ],
    "lines-between-class-members": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ],

    "new-cap": "error",
    "newline-per-chained-call": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-unneeded-ternary": "error",

    // Bad syntax
    "no-restricted-syntax": [
      "error",
      "BinaryExpression[operator=\"in\"]",
      "CallExpression[callee.name=\"setTimeout\"][arguments.length<2]",
      { "selector": "CallExpression[callee.property.name=\"forEach\"]", "message": "No `.forEach` <https://phoenix35.js.org/good-practices.html#no-more-foreach>." },
      { "selector": "CallExpression[callee.property.name=\"then\"]", "message": "Use `async`/`await`." },
      { "selector": "CallExpression[callee.property.name=\"substr\"]", "message": "Use `.slice`." },
      { "selector": "CallExpression[callee.property.name=\"getYear\"]", "message": "Use `.getFullYear`." },
      { "selector": "CallExpression[callee.property.name=\"setYear\"]", "message": "Use `.setFullYear`." },
      { "selector": "CallExpression[callee.property.name=\"toGMTString\"]", "message": "Use `.toUTCString`." },
      { "selector": "CallExpression[callee.property.name=\"trimLeft\"]", "message": "Use `.trimStart`." },
      { "selector": "CallExpression[callee.property.name=\"trimRight\"]", "message": "Use `.trimEnd`." },
      { "selector": "CallExpression[callee.name=\"escape\"]", "message": "`escape` is deprecated." },
      { "selector": "CallExpression[callee.name=\"unescape\"]", "message": "`unescape` is deprecated." }
    ],

    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": [
      "error",
      "below"
    ],
    "operator-assignment": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": [
      "error",
      "double",
      { "avoidEscape": true }
    ],

    // Semi-colon styling
    "semi": "error",
    "semi-spacing": "error",
    "semi-style": "error",

    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "unicode-bom": "error",

    // Import styling
    "no-duplicate-imports": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",

    "no-useless-computed-key": [
      "error",
      { "enforceForClassMembers": true }
    ],
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "object-shorthand": "error",

    // Variable styling
    "no-var": "error",
    "prefer-const": "error",
    /*
    // var
    // You should not use var anyway
    "block-scoped-var": "off",
    "vars-on-top": "off",
    */

    "prefer-arrow-callback": [
      "error",
      { "allowNamedFunctions": true }
    ],
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",

    // Rest/spread styling
    "prefer-rest-params": "error",
    "rest-spread-spacing": "error",

    // Template styling
    "prefer-template": "error",
    "template-tag-spacing": "error",
    "template-curly-spacing": "error",

    "symbol-description": "error"
  }
};
