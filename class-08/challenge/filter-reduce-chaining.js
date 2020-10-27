const numbers = [2,3,4,5,6];
  
const evensMap = numbers.map((value, index)=>{
    return !(value % 2);
});

// so filter will loop/ iterate over an array, 
// and will check whatever condition you are providing if it matches the item or element you are working at the current iteration
// if its true it will add it to the array else it will skip it

const evens = numbers.filter( function(n,i) {
    return !(n % 2);
});

let empty = numbers.filter( function(n,i) {
});

console.log(empty); // []
console.log(evens); // [ 2, 4, 6 ]
console.log(evensMap); // [ true, false, true, false, true ]

const people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
  ];

const parents = people.filter(person => person.role !== "Kid");
console.log(parents);

// reduce

// using map

let total =0
let sumMap = numbers.map( function(value,idx) {
  return total+=value;
});

let sum = numbers.reduce( function(accumulator,value,idx) {
  accumulator = accumulator + value;
  return accumulator;
}, 0);

console.log(sumMap); // [ 4, 6, 8, 10, 12 ]
console.log(total); // 20
console.log(sum); // 20


const pizzas = [
    {name:'Napoletana', type:'italian'},
    {name:'Fritta', type:'italian'},
    {name:'Siciliana', type:'italian'},
    {name:'New York', type:'American'}
];
  
const menu = pizzas.reduce( (accumulator, pizza, idx) => {
accumulator[pizza.name] = pizza.type;
return accumulator;
}, {} );


const people = [
  {name:'Ahmad', role:'student'},
  {name:'Sondos', role:'student'},
  {name:'Sally', role:'student'},
  {name:'Momayz', role:'student'},
  {name:'Saad', role:'TA'},
  {name:'Baraah', role:'TA'},
];

const tas= people.filter((value, index)=>{
  if(value.role == 'TA'){
    console.log(value.name);
    return 'test';
  }
});

const students = people.filter(value=>value.role ==='student');
console.log(tas);
console.log(students);

const arrMenu = pizzas.reduce( (accumulator, pizza, idx) => {
    accumulator.push( pizza.name );
    return accumulator;
  }, [] );
  
const arrayOfNames = ['Ahmad','Sondos','Sally','Momayz','Saad','Baraah'];

const evenIndex = arrayOfNames.reduce((accumulator, value, index)=>{
  if(index % 2===0){
    accumulator.push(`${value} is even`);
  }
  return accumulator;
}, []);
  
console.log(evenIndex);
console.log(menu);
console.log(arrMenu);


// chainging

const sqRtChain = arrayOfNums.filter((value, index)=>{
  return value%2===0;
}).map((value, index)=>{
  return value*=value;
});
console.log(sqRtChain);