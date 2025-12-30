// Shallow Copy 

let xArray = [2, 3, 4];
let yArray = xArray;
yArray.push(5);
console.log(yArray);
console.log(xArray);

// spread operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray);
console.log(yArray === zArray);

const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(800);
console.log(tArray);
console.log(zArray);

console.log("--------------------");

// nested structural data types still share refrences , no matter whether u use ... or object.assign .

yArray.push([8,9,10]);
const vArray = [...yArray];
console.log(vArray);

vArray[4].push(44);

console.log(vArray);
console.log(yArray);

// note: Array.from() and slice() create shallow copies too .