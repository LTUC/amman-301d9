'use strict';

let pizza = 'PIZZA \u{1F355}';

function bake(pizza) {
  let toppingsPizza = addTopings(pizza);
  console.log(toppingsPizza);
  console.log('baking \u{1F355} \u{1F476} ...');
  deliver(pizza);
}

function addTopings(pizza) {
  makeDough(pizza)
  return `Toppings added to the ${pizza}`;
}

function makeDough(pizza) {
  console.log(`Made the ${pizza} dough`);
}

function deliver(pizza) {
  console.log(`The ${pizza} is ready`);
}

bake(pizza);


// function recursive(count){
//   console.log(count);
//   let newCount = count -1;
//   if(newCount !== 0){
//     recursive(newCount);
//   }
// }

// recursive(5);


