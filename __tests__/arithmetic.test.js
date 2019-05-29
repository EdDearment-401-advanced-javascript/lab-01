'use strict';

var faker = require('faker');
// let a = faker.random.number();
// let b = faker.random.number();
// console.log(a);
// console.log(b);

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmatic module', () => {
  //Adding Bad Case
  it ('it does not use strings for arithmatic.add', () => {
    let a = 'Green';
    let b = faker.random.number();
    expect (arithmetic.add(a,b)).toBeNull();
  });
  //Adding Good Case
  it ('it uses only numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect (arithmetic.add(a,b)).toEqual(a+b);
  });
  //Subtracting Bad Case
  it ('it does not use strings for arithmatic.subtract', () => {
    let a = 77 ;
    let b = 'horror';
    expect (arithmetic.subtract(a,b)).toBeNull();
  });
  //Subtracting Good Case
  it ('it uses only numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect (arithmetic.subtract(a,b)).toEqual(a-b);
  });
  //Multiplying Bad Case
  it ('it does not use strings for arithmatic.multiply', () => {
    let a = 'Stephen';
    let b = 'King';
    expect (arithmetic.multiply(a,b)).toBeNull();
  });
  //Multiplying Good Case
  it ('it uses only numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect (arithmetic.multiply(a,b)).toEqual(a*b);
  });
  //Division Bad Cases
  it ('it does not use strings for arithmatic.division', () => {
    let a = 'The';
    let b = 'Stand';
    expect (arithmetic.division(a,b)).toBeNull();
  });
  it ('it cannot divide by zero!', () => {
    let a = 3;
    let b = 0;
    expect (arithmetic.division(a,b)).toBeNull();
  });
  //Division Good Cases
  it ('it uses only numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    expect (arithmetic.division(a,b)).toEqual(a/b);
  });
});