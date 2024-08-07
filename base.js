import jsdoc from "eslint-plugin-jsdoc";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticPlus from "@stylistic/eslint-plugin-plus";

export default {
  languageOptions: {
    sourceType: "script",
  },
  plugins: {
    jsdoc,
    "@stylistic/js": stylisticJs,
    "@stylistic/plus": stylisticPlus,
  },
  rules: {
    ...jsdoc.configs["flat/recommended"].rules,
    "jsdoc/check-indentation": "error",
    "jsdoc/check-line-alignment": [ "error", "always" ],
    "jsdoc/check-template-names": "error",
    "jsdoc/informative-docs": "error",
    "jsdoc/lines-before-block": "error",
    "jsdoc/no-blank-blocks": "warn",
    "jsdoc/require-asterisk-prefix": "error",
    "jsdoc/require-description": "warn",
    "jsdoc/require-hyphen-before-param-description": "warn",
    "jsdoc/require-jsdoc": "off",
    "jsdoc/require-throws": "error",

    // Possible problems
    "array-callback-return": [ "error", { checkForEach: true } ],
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error", // disable inline
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": [ "error", { checkLoops: "all" } ],
    "no-constructor-return": "warn",
    "no-control-regex": "warn",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error", // disable inline
    "no-dupe-keys": "error",
    "no-duplicate-case": "error", // disable inline
    "no-duplicate-imports": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": [ "error", { reportUnusedFallthroughComment: true }],
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error", // for `var`
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [ "error", { skipStrings: false } ],
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": [ "error", { props: false } ], // allow for getter side effects
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "warn",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": [ "error", { enforceForOrderingRelations: true } ],
    "no-unsafe-optional-chaining": [ "error", { disallowArithmeticOperators: true } ],
    "no-unused-private-class-members": "warn",
    "no-unused-vars": [ "warn", { ignoreRestSiblings: true } ],
    "no-use-before-define": "error",
    "no-useless-assignment": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": [ "error", { allowProperties: true } ],
    "use-isnan": [ "error", { enforceForIndexOf: true } ],
    "valid-typeof": [ "error", { requireStringLiterals: true } ],

    // Suggestions
    "accessor-pairs": "error",
    "arrow-body-style": "error",
    "block-scoped-var": "error", // some geniuses can inline disable `no-var`
    "camelcase": "error",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "complexity": "error",
    "consistent-return": "error",
    "consistent-this": "off", // there is never a need for a `that` variable
    "curly": [ "error", "multi-or-nest", "consistent" ],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "warn",
    "dot-notation": "error",
    "eqeqeq": [ "error", "always", { null: "ignore" } ],
    "func-name-matching": [ "error", { considerPropertyDescriptor: true } ],
    "func-names": [ "error", "as-needed" ],
    "func-style": "off",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error", // but who uses for-in
    // "id-denylist": "off",
    // "id-length": "off",
    // "id-match": "off",
    "init-declarations": "off",
    "logical-assignment-operators": [ "error", "always", { enforceForIfStatements: true } ],
    // "max-classes-per-file": "off",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "new-cap": "error",
    "no-alert": "warn",
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-caller": "off",
    "no-case-declarations": "error",
    "no-console": "off",
    "no-continue": "off",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty": [ "error", { allowEmptyCatch: true }],
    "no-empty-function": [ "warn", { allow: [ "arrowFunctions" ] } ],
    "no-empty-static-block": "warn",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": [ "error", { enforceForInnerExpressions: true} ],
    "no-extra-label": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": [ "error", { disallowTemplateShorthand: true, allow: [ "!!" ] } ],
    "no-implicit-globals": [ "error", { lexicalBindings: true} ],
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": [ "error", { allowLoop: true, allowSwitch: true } ],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [ 0, 1 ],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
      }
    ],
    "no-multi-assign": [ "error", { ignoreNonDeclaration: true } ],
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-object-constructor": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-plusplus": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": "off",
    "no-restricted-globals": [ "error", "event" ],
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": [
      "error",
      "BinaryExpression[operator=\"in\"]",
      "CallExpression[callee.name=\"setTimeout\"][arguments.length<2]",
      {
        selector: "CallExpression[callee.property.name=\"forEach\"]",
        message: "No `.forEach` <https://phoenix35.js.org/good-practices.html#no-more-foreach>.",
      },
      { selector: "CallExpression[callee.property.name=\"then\"]", message: "Use `async`/`await`." },
      { selector: "CallExpression[callee.property.name=\"substr\"]", message: "Use `.slice`." },
      { selector: "CallExpression[callee.property.name=\"getYear\"]", message: "Use `.getFullYear`." },
      { selector: "CallExpression[callee.property.name=\"setYear\"]", message: "Use `.setFullYear`." },
      { selector: "CallExpression[callee.property.name=\"toGMTString\"]", message: "Use `.toUTCString`." },
      { selector: "CallExpression[callee.property.name=\"trimLeft\"]", message: "Use `.trimStart`." },
      { selector: "CallExpression[callee.property.name=\"trimRight\"]", message: "Use `.trimEnd`." },
      { selector: "CallExpression[callee.name=\"escape\"]", message: "`escape` is deprecated." },
      { selector: "CallExpression[callee.name=\"unescape\"]", message: "`unescape` is deprecated." },
    ],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": [ "error", { builtinGlobals: true, allow: ["name"] /* `window.name` */ } ],
    "no-shadow-restricted-names": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": [ "error", { allowTaggedTemplates: true } ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "warn",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "object-shorthand": "error",
    "one-var": "off",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": [ "error", { disallowRedundantWrapping: true } ],
    "prefer-rest-params": "warn",
    "prefer-spread": "error",
    "prefer-template": "error",
    "radix": [ "error", "as-needed" ],
    "require-await": "warn",
    "require-unicode-regexp": "error",
    "require-yield": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "strict": [ "error", "global" ],
    "symbol-description": "error",
    "vars-on-top": "error",
    "yoda": [ "error", "never", { exceptRange: true } ],

    // Layout & Formatting
    "unicode-bom": "error",

    "@stylistic/js/array-bracket-newline": [ "error", "consistent" ],
    "@stylistic/js/array-bracket-spacing": [ "error", "always" ],
    "@stylistic/js/array-element-newline": [ "error", "consistent" ],
    "@stylistic/js/arrow-parens": "error",
    "@stylistic/js/arrow-spacing": "error",
    "@stylistic/js/block-spacing": "error",
    "@stylistic/js/brace-style": "error",
    "@stylistic/js/comma-dangle": [ "error", "always-multiline" ],
    "@stylistic/js/comma-spacing": "error",
    "@stylistic/js/comma-style": "error",
    "@stylistic/js/computed-property-spacing": "error",
    "@stylistic/js/dot-location": "error",
    "@stylistic/js/eol-last": "error",
    "@stylistic/js/function-call-argument-newline": [ "error", "consistent" ],
    "@stylistic/js/function-call-spacing": "error",
    "@stylistic/js/function-paren-newline": [ "error", "multiline-arguments" ],
    "@stylistic/js/generator-star-spacing": "error",
    "@stylistic/js/implicit-arrow-linebreak": "error",
    "@stylistic/js/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: "first",
        outerIIFEBody: 0,
        ImportDeclaration: "first",
        offsetTernaryExpressions: true,
      }
    ],
    // "@stylistic/js/jsx-quotes": "off",
    "@stylistic/js/key-spacing": "error",
    "@stylistic/js/keyword-spacing": "error",
    "@stylistic/js/line-comment-position": "off",
    "@stylistic/js/linebreak-style": "off",
    "@stylistic/js/lines-around-comment": "off",
    "@stylistic/js/lines-between-class-members": "off",
    "@stylistic/js/max-len": "off",
    "@stylistic/js/max-statements-per-line": "error",
    "@stylistic/js/multiline-comment-style": "off",
    "@stylistic/js/multiline-ternary": [ "error", "always-multiline" ],
    "@stylistic/js/new-parens": "error",
    "@stylistic/js/newline-per-chained-call": "error",
    "@stylistic/js/no-confusing-arrow": ["error", { onlyOneSimpleParam: true } ],
    "@stylistic/js/no-extra-parens": [
      "error",
      "all",
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ternaryOperandBinaryExpressions: false,
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
      }
    ],
    "@stylistic/js/no-extra-semi": "error",
    "@stylistic/js/no-floating-decimal": "off",
    "@stylistic/js/no-mixed-operators": "error",
    "@stylistic/js/no-mixed-spaces-and-tabs": "error",
    "@stylistic/js/no-multi-spaces": "error",
    "@stylistic/js/no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 1,
      }
    ],
    "@stylistic/js/no-tabs": "off",
    "@stylistic/js/no-trailing-spaces": "error",
    "@stylistic/js/no-whitespace-before-property": "error",
    "@stylistic/js/nonblock-statement-body-position": [ "error", "below" ],
    "@stylistic/js/object-curly-newline": [ "error", { multiline: true } ],
    "@stylistic/js/object-curly-spacing": [ "error", "always" ],
    "@stylistic/js/object-property-newline": [ "error", { allowAllPropertiesOnSameLine: true } ],
    "@stylistic/js/one-var-declaration-per-line": "error",
    "@stylistic/js/operator-linebreak": [ "error", "after" ],
    "@stylistic/js/padded-blocks": [ "error", "never" ],
    "@stylistic/js/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any",    prev: "directive", next: "directive" },
      { blankLine: "always", prev: "import", next: "*"},
      { blankLine: "any",    prev: "import", next: "import"},
      { blankLine: "always", prev: ["const", "let"], next: "*"},
      { blankLine: "any",    prev: ["const", "let"], next: ["const", "let"]},
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "@stylistic/js/quote-props": [ "error", "as-needed", { keywords: true } ],
    "@stylistic/js/quotes": [ "error", "double", { avoidEscape: true } ],
    "@stylistic/js/rest-spread-spacing": "error",
    "@stylistic/js/semi": "error",
    "@stylistic/js/semi-spacing": "error",
    "@stylistic/js/semi-style": "error",
    "@stylistic/js/space-before-blocks": "error",
    "@stylistic/js/space-before-function-paren": "error",
    "@stylistic/js/space-in-parens": "error",
    "@stylistic/js/space-infix-ops": "error",
    "@stylistic/js/space-unary-ops": "error",
    "@stylistic/js/spaced-comment": [
      "error",
      "always",
      {
        line: { markers: [ "/" ] },
        block: { exceptions: ["*"], balanced: true },
      }
    ],
    "@stylistic/js/switch-colon-spacing": "error",
    "@stylistic/js/template-curly-spacing": "error",
    "@stylistic/js/template-tag-spacing": "error",
    "@stylistic/js/wrap-iife": [ "error", "inside" ],
    "@stylistic/js/wrap-regex": "off",
    "@stylistic/js/yield-star-spacing": "error",

    "@stylistic/plus/indent-binary-ops": ["error", 2],
  }
};
