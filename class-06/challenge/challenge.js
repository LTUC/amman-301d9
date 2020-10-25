// Iterating over properties within an object

// let person = {
//     firstName:'Ryan',
//     lastName:'Dahl',
//     role: 'programmer',
//     skills:['coding','fooding'],
// }

/*
 * For in: 
 * Definition: a looping method for objects that acts much like an old fashioned "for" loop.
*/

// for (let key  in person){
//     console.log(key);
//     console.log(person[key]);
// }

/*
 * Object.keys: 
 * Definition: Takes in an object as an argument and returns an array of keys 
 * return type: array
*/

// console.log(Object.keys(person));
// const properties = Object.keys(person);
// properties.forEach(property=>{
//     console.log(`${property}: ${person[property]}`)
// });

/**
* Object.values:
* Definition:  Takes in an object as an argument and returns an array of values
* return type: array
*/

// console.log(Object.values(person));
// const values = Object.values(person);
// values.forEach(value => console.log(value));

/**
* Object.entries:
* Definition:  Returns an array of each "Entry" as an an array with a key and value
* return type: array
*/

// console.log(Object.entries(person));
// const entries = Object.entries(person);
// entries.forEach(entry => console.log(entry));

