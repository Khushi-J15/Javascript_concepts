// Functional Programming .

// often uses pipe and compose = higher order functions

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

const result = multiplyBy5(subtract1(add2(4)));
console.log(result)

// compose - right to left 
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compRes = compose(multiplyBy5, subtract1, add2)(4);
console.log(compRes);

// Pipe - left to right
const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val);

const pipeRes = pipe(add2, subtract1, multiplyBy5)(4);

console.log(pipeRes);

const pipeRes2 = pipe(multiplyBy5, add2, subtract1)(4);

console.log(pipeRes2);

// synatx of writing a pipeline 

const pipeline = pipe(
  add2,
  subtract1,
  multiplyBy5
)(7);

console.log(pipeline);

divideby = (divisor, num) => num / divisor;

// adding a function with multiple parameters 

const pipeline2 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  x => divideby(2, x)
)(5);

console.log(pipeline2);

// currying
const divBy = (divisor) => (num) => num / divisor;

const dividebyyyy = divBy(2);

const pipeline3 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  dividebyyyy
)(5);

console.log(pipeline3);