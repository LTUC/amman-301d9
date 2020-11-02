// -- Nested Arrays --
//  Also known as 2D Arrays or 2 Dimensional Array


// -- Normal case of an array:
// What we used to work with is known as 1 Dimensional Array

const oneDimensionalArr = [1,2,3,4,5,6,7];

console.log('--- One Diemnsional Array ---');
console.log(oneDimensionalArr);
console.log('--- --- --- ---');

// Accessing data from them was easy:

// Either by A: providing the index within a bracket notation

console.log('--- Bracket Notation ---');
console.log(oneDimensionalArr[0]);
console.log(oneDimensionalArr[1]);
console.log(oneDimensionalArr[2]);
console.log(oneDimensionalArr[3]);

// B: Looping through them!

console.log('--- Looping ---');
for (let index = 0; index < oneDimensionalArr.length; index++) {
    console.log(oneDimensionalArr[index]);
    
}
console.log('--- --- --- ---');

// --- Two Dimensional Array is an Array of Arrays:

const twoDimensionalArr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],

];

console.log('--- Two Diemnsional Array ---');
console.log(twoDimensionalArr);
console.log('--- --- --- ---');

// Accessing values from them needs from you to provide two indexs values
// main array index containing the nested arrays (row) 
// the nested arrays containing the values (column)

// Method A: Accessing by providing the index using bracket notation
console.log('--- Bracket Notation ---');

console.log(twoDimensionalArr[0][1]);
console.log(twoDimensionalArr[0][2]);
console.log(twoDimensionalArr[2][3]);
console.log(twoDimensionalArr[1][0]);

console.log('--- --- --- ---');


// Method B: Accessing by using a nested Loop
console.log('--- Looping ---');
for (let i = 0; i < twoDimensionalArr.length; i++) {
    for (let j = 0; j < twoDimensionalArr.length; j++) {
        console.log(twoDimensionalArr[i][j]);
    }    
}   
console.log('--- --- --- ---');

// using foreach
console.log('--- Using foreach ---');
twoDimensionalArr.forEach((value,index)=>{
    value.forEach(secondValue=>{
        console.log(secondValue);
    });
});