'use strict';

const store = require('./controler/store');
const helpers = require('./helper/helpers');

helpers.welcomeMessage();

console.log(helpers.testvariable);

const pizza = new store('Pizza Place', 5, 10, 2.5);
console.log(pizza);


