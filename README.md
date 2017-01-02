# test-node-gyp

A dummy node-gyp application. This project is based on https://github.com/nodejs/node/tree/master/test/addons/hello-world

## How it works

The binding is called "my-special-binding". First run;

```
node-gyp configure
```

and then;

```
node-gyp build
```
.

Now you can use `require(my-special-binding)` in node, as demonstrated in test.js

## Prerequisites

Follow the guide at https://www.npmjs.com/package/node-gyp or https://github.com/nodejs/node-gyp