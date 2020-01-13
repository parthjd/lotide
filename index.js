const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArrayEqual = require("./assertArraysEqual");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArray: eqArray,
  findKey: findKey,
  findKeyByValue: findKeyByValue
};
