'use strict';

let greet = module.exports = {};

greet.greet = function (name) {
  return `hello ${name}`;
}