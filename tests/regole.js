var REGOLE = require('regole');
var assert = require('assert');

assert(REGOLE.maxOggetti, 'max oggetti');
assert.equal(REGOLE.maxOggetti(), 4, 'max 4 oggetti');
