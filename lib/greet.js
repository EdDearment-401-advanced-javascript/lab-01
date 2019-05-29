'use strict';

let greet = module.exports = {};
var faker = require('faker');


greet.greet = function (name) {
  if (typeof name != 'string') {return null;}
  return `hello ${name}`;
};