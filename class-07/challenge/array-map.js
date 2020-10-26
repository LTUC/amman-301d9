const numbers = [2, 3, 4, 6];
// const sqRtArr = [];

// numbers.forEach(number =>{
//   sqRtArr.push(number*number);
// });
// console.log(sqRtArr);


// -- MAP -- function
// Iterate through an array, or an array of objects, it will return a new array

const sqRtArr = numbers.map((value, index)=>{
  // console.log(`${index} : ${value}`);
  return value*value;
});

// another way of writing the function above
// const sqRtArr = numbers.map((value, index)=> value*value);

console.log(sqRtArr);


const people = [
    { name: "John", role: "Dad" },
    { name: "Cathy", role: "Mom" },
    { name: "Zach", role: "Kid" },
    { name: "Allie", role: "Kid" },
];

const arrayOfNames = people.map((value, index)=>{
  // console.log(value);
  return value.name;
});
console.log(arrayOfNames);

const arrayOfRoles = people.map((value)=>{
  return value.role;
});



console.log(arrayOfRoles);

// if you don't define a return statement it will return an undefined array
// const secondArrayOfNums = [1,2,3,4];

// const newArray = secondArrayOfNums.map((value,index)=>{

// });

// console.log(newArray);


// Cloning an array using map
const secondArrayOfNums = [1,2,3,4];

const newArray = secondArrayOfNums.map((value,index)=>{
  return value;
});

console.log(newArray);