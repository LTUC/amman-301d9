'use strict';

const helpers = require('../helper/helpers');
const helper = require('../helper/helpers');
const hours = ['7am', '8am', '9am'];

function Store (location, min, max, avg) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.projections = {};
  this.projectSales();
  
  Store.stores.push(this);
};

Store.stores = [];
let temp = 2;

Store.prototype.projectSales = function() {
  hours.forEach( (hour) => {
    this.projections[hour] = helper.randomNumberBetween(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerCustomer;
  });
};


module.exports = Store;