'use strict';

var faker = require('faker');

const greet = require('../lib/greet.js');

describe('Greet Module', () => { 
    it ('it uses a string for the name value', () => {
        let name = faker.name.firstName();
        expect (greet.greet(name)).toEqual(`hello ${name}`);
    });
});