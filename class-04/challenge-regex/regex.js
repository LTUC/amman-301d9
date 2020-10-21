const str = 'It was a dark and a stormy night';
const strTwo =  'The rain in Spain gain falls mainly in the plain';

// Validator 
// const pattern = /dark/g; // returns true
// const pattern = /day/g; // returns false
// console.log(`Validator Result = ${pattern.test(str)}`);

// Match
// const pattern = /rain/g;
// const pattern = /in/g; // output array of 'in' 6 times
// const pattern = /\bin/g; // output array of 'in' 2 times
// const pattern = /in\b/g; // output array of 'in' 5 times
// const pattern = /g/g;
// console.log(str.match(pattern));
// console.log(strTwo.match(pattern));

// Match and replace 

// const pattern = /\s/g;
// console.log(str.match(pattern));
// str.replace(pattern, '_');


// Find the pattern of all the names that has uppercase in it
// const arrayNames = ['Batool','Ahmad', 'farah', 'Mohammad', 'Danaa', 'Hamaz'];
// const pattern=/[A-Z]/;
// const arrayOfSelectedNames = [];

// arrayNames.forEach(name=>{
//   if(pattern.test(name)){
//     arrayOfSelectedNames.push(name);
//   }
  // if(name.match(pattern)){
  //   arrayOfSelectedNames.push(name);
  // }
// });
// console.log(arrayOfSelectedNames);