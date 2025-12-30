// Currying takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions.

// Therefore, a curried function only takes one parameter at a time .

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// suppose you have a function that should be executed iff. when you have all 3 parameters with u, where 3 params comes from 3 diff. sources . [now suppose you have 1000 of parameters ]

const sandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} + ${ingredient2} + ${ingredient3}`;
    }
  }
}

const mySandwich = sandwich("bacon")("cheese")("tomato");
console.log("My sandwich : " , mySandwich);

const buildRamen = ingred1 => ingred2 => ingred3 => `${ingred1} , ${ingred2}, ${ingred3}`;

const myRamen = buildRamen("noodles")("Sauce")("Veggies");

console.log(myRamen);

// ES6 syntax
const curriedMultiply = x => y => x*y;

console.log(curriedMultiply(2)(4));

function sendAutoEmail(to){
  return function (subject) {
    return function (body){
      console.log(`Sending email to ${to} with subject ${subject}: ${body}`);
    };
  };
};

let dev1 = sendAutoEmail("khushijain15@gmail.com");
let dev2 = dev1("order confirmation");
dev2("hey khushi , here is your order details");