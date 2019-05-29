'use strict';

var faker = require('faker');

const greet = require('../lib/greet.js');

describe('Greet Module', () => { 
  it ('it uses a string for the name value', () => {
    let name = faker.name.firstName();
    expect (greet.greet(name)).toEqual(`hello ${name}`);
  });

  it('it does not allow integers', () => {
    let message = greet.greet(1);
    expect(message).toBeNull();
  });

  it ('it does not allow arrays []', () => {
    let message = greet.greet([]);
    expect(message).toBeNull();
  });

  it ('it does not allow objects {}', () => {
    let message = greet.greet({});
    expect(message).toBeNull();
  });
});