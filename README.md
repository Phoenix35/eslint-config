# @phoenix35/eslint-config

Complete ESLint shareable config for beginners.


# Preliminary thoughts

What do you prefer?
```js
/* indent */
{
  2; // 2 spaces
}
// or
{
    4; // 4 spaces
}
```
```js
/* quotes */
"Hello, world!"; // double quotes
// or
'Hello, world!'; // single quotes
```
```js
/* curly */
while (true) { // multi-or-nest, consistent
  if(condition)
    doSomething();
  else
    doSomethingElse();
}
// or
while (true) { // all
  if(condition) {
    doSomething();
  } else {
    doSomethingElse();
  }
}
```
```js
/* nonblock-statement-body-position */
if (condition)
  doStuff(); // below
// or
if (condition) doStuff(); // beside
```


# How to use

## First setup

1. Create a `.eslintrc.cjs` file.
    ```js
    module.exports = {
      "env": {
      },
      "extends": [
        "@phoenix35/eslint-config"
      ],
      "rules" : {
        // If you prefer 4 indentation spaces, add this rule
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": "first",
                "outerIIFEBody": 0
            }
        ],
        // If you prefer single quotes, add this rule
        "quotes": [
          "error",
          "single",
          { "avoidEscape": true }
        ],
        // If you prefer curlies for all, add this rule
        "curly": "error",
        // If you prefer non block statements to be beside, add this rule
        "nonblock-statement-body-position": "error"
      }
    };
    ```
1. **Save this file in the root folder of your web dev**.
For example if you follow [MDN's tutorial](<https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files>), they advised a `web-projects` folder.
You will not touch this file again. You will just copy paste it in your various projects.

1. **Copy this file** in your current project, e.g. `test-site`.

1. Modify the _per-project_ file according to your project.


## My project is

### Node.js
1. Make an [`"engines"` field](<https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines>) in the `package.json` of this project
    ```json
      "engines": {
        "node": ">= 16.3.0"
      }
    ```
   The version should be `>=` LTS or a later node.js version you use
1. Extend `/node` in the `.eslintrc.cjs` of this project
    ```js
      "extends": [
        "@phoenix35/eslint-config/node"
      ],
    ```


### Fullstack
1. Follow both steps of [Node.js](<#nodejs>) above
1. Additionally, make your `"env"` fullstack
    ```js
      "env": {
        "node": true,
        "browser": true
      },
      "extends": [
        "@phoenix35/eslint-config/node"
      ],
    ```


### Browser
Make your `"env"` browser
```js
  "env": {
    "browser": true
  },
```
Besides, if you are ready to use [ES modules](<https://exploringjs.com/impatient-js/ch_modules.html>), let ESLint know
```js
  "env": {
    "browser": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
```


### Userscript
Works for Greasemonkey and Violentmonkey
```js
  "env": {
    "browser": true,
    "greasemonkey": true
  },
```


### WebExtension
```js
  "env": {
    "webextensions": true
    /* 
      Depending on your needs,
      you may need to add
    "browser": true
    */
  },
```


### Polymorphic library
```js
  "env": {
    "shared-node-browser": true
  },
```


# Install

You should have a `.eslintrc.cjs` file ready now.  
Install these 3 packages in your project
```
$ npm i -D eslint
$ npm i -D eslint-plugin-jsdoc
$ npm i -D https://github.com/Phoenix35/eslint-config
```
If you extend from `/node`, add this devDependency as well
```
$ npm i -D eslint-plugin-node
```

---

Alternatively
```
npx install-peerdeps -D https://github.com/Phoenix35/eslint-config
```
(this will install the optional peer dependency `eslint-plugin-node` as well)


# Now what
Start coding. You're done here.
