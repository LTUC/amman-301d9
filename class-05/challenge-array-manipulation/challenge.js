const arrayOfNums = [1,2,3,4,5,6,7,8,9];

// --- PUSH --- Adds a number of elements to the end of the array
// Alters our array 
// arrayOfNums.push(10); // [1,2,3,4,5,6,7,8,9,10]
// arrayOfNums.push(10, 11, 12, 13,14,15); [1,2,3,4,5,6,7,8,9,10,11, 12, 13,14,15]
// console.log(arrayOfNums); 

// --- POP ---  Removes an element from the end of the array
// arrayOfNums.pop(); // [1,2,3,4,5,6,7,8,9]
// console.log(arrayOfNums);


// ---UNSHIFT --- Add a number of elements to the beging of the array
// arrayOfNums.unshift(0); // [0,1,2,3,4,5,6,7,8,9]
// arrayOfNums.unshift(-5,-4,-3,-2,-1,0);
// console.log(arrayOfNums);


// ---  SHIFT --- Remove an element from the beging of the array
// arrayOfNums.shift();
// console.log(arrayOfNums);

// --- TOSTRING ---
// console.log(typeof(arrayOfNums)); //1,2,3,4,5,6,7,8,9
// console.log(arrayOfNums.toString()); //1,2,3,4,5,6,7,8,9
// console.log(typeof(arrayOfNums.toString())); //1,2,3,4,5,6,7,8,9

// --- JOIN ---
// console.log(arrayOfNums.join()); //1,2,3,4,5,6,7,8,9
// console.log(arrayOfNums.join('-')); //1-2-3-4-5-6-7-8-9
// console.log(arrayOfNums.join(' ')); //1 2 3 4 5 6 7 8 9

// --- SPLIT --- Split turns a string into an array of substrings using a sperator 
// Makes a copy 
// const str = 'Cats are furnitures worst nightmare';
// const strToArray = str.split(); // Wil create an array with a single index that is the string we are trying to split.
// console.log(strToArray);
// const strToArraySep = str.split(' ', 3);
// console.log(strToArraySep);
// const strToArraySep = str.split('w');
// console.log(strToArraySep);

// --- SLICE --- selecting an element from an array 
// Does not alter the array
// slice args (start index, end index)
// const classicMediumPizza = ['slice 1','slice 2','slice 3','slice 4','slice 5','slice 6','slice 7','slice 8'];

// console.log(classicMediumPizza.slice(0,1));
// console.log(classicMediumPizza.slice(3,5));
// const cloned = classicMediumPizza.slice();
// console.log(cloned);
// console.log(classicMediumPizza.slice(7));
// console.log(classicMediumPizza.slice(-1));
// console.log(classicMediumPizza.slice(0,-2));


// --- SPLICE ---
// You can remove/ add items to array 
// Alters the array
// splice args (start index, delete count, "optional"items to add)
// console.log(arrayOfNums);
// Removing elements from the array
// console.log(arrayOfNums.splice(0,1));
// console.log(arrayOfNums.splice(3,2));
// Adding elements
// console.log(arrayOfNums.splice(0,1,0)); // replacing elements in the array
// console.log(arrayOfNums.splice(0,0,0));
// console.log(arrayOfNums.splice(-1,0,10));
// console.log(arrayOfNums);


// CONCAT --- concatenate 
// console.log(`${}`)
// const araryOne = [1,2,3];
// const arrayTwo = [4,5,6];
// const arrayThree = ['7','8','9'];
// const arrayFour = [10,11,12];
// const concatenated = araryOne.concat(arrayTwo, arrayThree,arrayFour, araryOne);
// console.log(concatenated);