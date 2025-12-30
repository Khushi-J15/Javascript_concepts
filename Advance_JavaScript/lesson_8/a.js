// value vs refrences 
// Primitive data types pass values

let x = 1;
let y = x;
y += 3;
console.log(y);
console.log(x);

// structural types use refrences

let xArray = [2, 3, 4];
let yArray = xArray;
yArray.push(5);
console.log(yArray);
console.log(xArray);

console.log("Mutuable vs Immutable");

// primitives are immutable
let myName = "Khushi";
myName[0] = "V";
console.log(myName);

// reassignment is not same as mutuable
myName = "Dora";
console.log(myName);

// Structures contains mutuable data 
yArray[0] = 100;
console.log(yArray);
console.log(xArray); // since both shares the same refrence 