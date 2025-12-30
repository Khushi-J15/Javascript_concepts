
const add = (a, b) => a + b;
console.log(add(5,6));

const fullName = (first , last) => `${first} ${last}`;

console.log(fullName("Khushi", "Jain"));

// We can replace the function with the output this is called "refrential transparency" .

//  A PURE FUNCTION SHOULD HAVE ATLEAST ONE PARAMETER .

// accessing the scope outside the fucntion makes the function impure 
// impure funct. ->
const z = 8;

function add2 (x, y) {
  return x + y + z;
}

console.log(add2(5, 2));

// means Pure functions cannot : access a database, API, file system, storage etc .
// also cannot modify the DOM , and can't log to the console

// means impure funct. are necessary , but they are harder to test .

console.log("+++++++++++++++++++++++++++++++++++");

// Refactored example 1 :
let x = 1;

const pureIncrement = (num) => {
  return num += 2;
}

console.log(pureIncrement(x));
console.log(x);

// Refactored example 2 :

const myArray = [45, 20, 97];

const pureAddArray = (array, data) => {
  return [...array, data];
}
console.log(pureAddArray(myArray, 90));
console.log(myArray);

// A PURE FUNCT. ALWAYS RETURNS SOMETHING .
//  no return means not a pure function .

const oneToFive = [1, 2, 3, 4, 5];

const oddToFive = oneToFive.filter(elem => elem%2 !== 0)
console.log(oddToFive);
console.log(oneToFive);

const doubled = oneToFive.map(elem => elem * 2).reduce((acc, elem) => acc + elem);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);
console.log(oneToFive);
