function add(a, b){
  return a+b;
}

function square(a){
  return a*a;
}

function modulo10(a){
  return a%10;
}

const addRes = add(2,3);
console.log(square(addRes));


function addSquare(a,b){
  return modulo10(square(add(a,b))); // pehle add fir square fir modulo .
} 

console.log(addSquare(4,5));
// 4+5 = 9 => 81 => 1
// but what if we have a lot of small functions that needs to be excuted order wise

function multiply(a,b){
  return a*b;
}

function composeTwoFunction(fn1, fn2){
  // console.log(fn1, fn2);
  return function (a, b){
    // console.log(a, b);
    return fn2(fn1(a,b));
  }
}

const task = composeTwoFunction(multiply, square);
console.log(task(2,3));

// ES6 syntax

const compose = (fn1, fn2) => (a, b) => fn2(fn1(a,b));

const task2 = compose(multiply, square);
console.log(task2(2,3));

// unlimited functions composition , where we can pass unlimited functions and arguments


function multiply2(args){
  return args[0] * args[1];
}

function compose2(...fns){
  return function (...args){
    return fns.reduce((a,b) => b(a), args);
  }
}
// ES6 syntax

const composeAll = 
  (...fns) => 
  (...args) => 
    fns.reduce((a,b) => b(a), args); 


const task3 = composeAll(multiply2, square);
console.log(task3(2,3));
