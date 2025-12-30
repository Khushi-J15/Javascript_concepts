// Pure functions avoids mutating of data

// Impure function That mutates the data 
const add = (array, score) => {
  array.push(score);
  return array;
}

const scoreArray = [10,90,45];
let arr =  add(scoreArray, 100);
console.log(arr);
// notice : 'const' doesn't makes the array immutable . 
// it means that you can't reassign an array but can change it's values .
