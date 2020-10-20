// const numbers = [5, 7, 1, 4, 9];

// console.log(`Before Sorting ${numbers}`);

// numbers.sort();

// console.log(`After Sorting ${numbers}`);

// const arrayOfNames = ['tamim', 'saad', 'baraah'];

// const arrayOfNamesUpper = ['tamim', 'Saad', 'baraah'];

// console.log(`Before Sorting ${arrayOfNames}`);

// arrayOfNames.sort();

// console.log(`After Sorting ${arrayOfNames}`);


// console.log(`Before Sorting ${arrayOfNamesUpper}`);

// arrayOfNamesUpper.sort();

// console.log(`After Sorting ${arrayOfNamesUpper}`);

/*
If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
 */

// const numbers = [5,1,3,9,11,100,87,44,23,67];
// const numbers = [-5,1,3,9,11,100,87,44,23,67];
// numbers.sort((a,b)=>{
//   return a-b; 
// });

// numbers.sort((a,b)=>{
//   return (a%2);
// });
// console.log(`After Sorting ${numbers}`);

const people = [
    {name:'Fred', role:'Developer'},
    {name:'Suzy', role:'DevEloper'},
    {name:'Gina', role:'Manager'},
    {name:'Jim', role:'Support'},
  ];
  
  // people.sort((a, b)=>{
  //   if(a.name.toUpperCase() > b.name.toUpperCase()){
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  // ternary
  people.sort((a, b)=>{
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
  
  people.forEach((person)=>{
    console.log(person)
  });
  
  
  