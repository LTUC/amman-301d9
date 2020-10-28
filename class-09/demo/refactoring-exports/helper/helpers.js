'use strict';

const helperObject={};

helperObject.testvariable = '123';

helperObject.randomNumberBetween = function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

helperObject.welcomeMessage = function (){
    console.log('==============================');
    console.log('==============================');
    console.log('Welcome to the Pizza Store \u{1F355}');
    console.log('==============================');
    console.log('==============================');
}

module.exports = helperObject;

