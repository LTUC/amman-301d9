
// Destructuring is a feature introduced in ES6
/**
 *  Allows to unpack values from arrays, or properties from objects, into distinct variables.
 *  That is, we can extract data from arrays and objects and assign them to variables.
*/

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// The old way

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// console.log(today);
// console.log(tomorrow);

// Destructuring assignment 

// const {today, tomorrow } = HIGH_TEMPERATURES;

// console.log(today);
// console.log(tomorrow);

// Wont work
// const {todayDe, tomorrowDe } = HIGH_TEMPERATURES;

// console.log(todayDe);
// console.log(tomorrowDe);