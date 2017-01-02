'use strict'
var assert = require('assert');
const binding = require(`./build/Release/binding`);
assert.strictEqual(binding.hello(), 'world');
console.log('binding.hello() =', binding.hello());