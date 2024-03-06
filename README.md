# @phoenix35/eslint-config

:warning: Beta version

Complete ESLint shareable config for beginners.


## Preliminary thoughts

What do you prefer?
```js
/* curly */
while (true) { // mandatory curly braces for multi-line
  if (condition) // optional curly braces for single-line
    doSomething();
  else
    doSomethingElse();
}
// or
while (true) { // mandatory curly braces for all blocks
  if (condition) {
    doSomething();
  } else {
    doSomethingElse();
  }
}
```
```js
/* @stylistic/js/quotes */
"Hello, world!"; // double quotes
// or
'Hello, world!'; // single quotes
```
```js
/* @stylistic/js/nonblock-statement-body-position */
if (condition)
  doStuff(); // statement below the control
// or
if (condition) doStuff(); // statement beside the control
```


## How to use

Make sure your node version is up-to-date.  
LTS version is `20.11.1` right now, this config will not work with anything below.

Make an [`"engines"` field](<https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines>) in the `package.json` of your project
```json
  "engines": {
    "node": ">= 20.11.1"
  }
```
The version should be `>=` LTS or a later node.js version you use.

Create a **`eslint.config.js`** file in the same directory as your `package.json`.  

```js
// eslint.config.js
// import line

export default [
  ...importedDefault,
  {
    rules: {
      // curly braces for all blocks
      /* "curly": [ "error", "all" ], /**/
      // single quotes
      /* "@stylistic/js/quotes": [ "error", "single", { avoidEscape: true } ], /**/
      // statement beside the control
      /* "@stylistic/js/nonblock-statement-body-position": [ "error", "beside" ], /**/
    }
  }
];
```

Uncomment the line for each rule you want to follow, by removing the `/*` at the beginning of said line.  
The exact content needs to be adapted to the type of project


### - Browser project
You need to install the regular package
```shell
npm install -D @phoenix35/eslint-config@next
```
```js
// eslint.config.js
import browserDefault from "@phoenix35/eslint-config/browser";

export default [
  ...browserDefault,
  {
    rules: {
      // your rules
    }
  }
];
```

### - Node.js project
You need to install the full package with optional dependencies
```shell
npm install -D --include=optional @phoenix35/eslint-config@next
```
```js
// eslint.config.js
import nodeDefault from "@phoenix35/eslint-config/node";

export default [
  ...nodeDefault,
  {
    rules: {
      // your rules
    }
  }
];
```

### - Fullstack project
You need to install the package with optional dependencies (see [Node.js project](<#--nodejs-project>))

Have a `eslint.config.js` file following "browser project" in the parent directory containing browser-specific code and another following "node project" next to your top-level `package.json`.

### - Userscript
Works for Greasemonkey and Violentmonkey
```shell
npm install -D @phoenix35/eslint-config@next
```
```js
// eslint.config.js
import monkeyDefault from "@phoenix35/eslint-config/userscript";

export default [
  ...monkeyDefault,
  {
    rules: {
      // your rules
    }
  }
];
```

### - WebExtension project
```shell
npm install -D @phoenix35/eslint-config@next
```
```js
// eslint.config.js
import extensionDefault from "@phoenix35/eslint-config/webextensions";

export default [
  ...extensionDefault,
  {
    rules: {
      // your rules
    }
  }
];
```

### - A Polymorphic library
```shell
npm install -D @phoenix35/eslint-config@next
```
```js
// eslint.config.js
import baseDefault from "@phoenix35/eslint-config";

export default [
  ...baseDefault,
  {
    rules: {
      // your rules
    }
  }
];
```

# Now what
Start coding. You're done here.
