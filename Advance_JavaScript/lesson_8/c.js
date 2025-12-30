// nested structural data types still share refrences , no matter whether u use ... or object.assign .

const scoreObj = {
  "first" : 22,
  "second" : 192,
  "third" : { "a" : 3, "b" : 9}
}

// It is a shallow freeze , since it still mutates .
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);

// How do we stop these mutations ???
// Deep copy is needed to avoid these

// 1] using JSON.parse and JSON.stringify
let student1 = {
  name : "Manish",
  company : "Google"
}

let student2 = JSON.parse(JSON.stringify(student1));
student1.name = "Khushi";

console.log(student1);
console.log(student2);
console.log(student1 === student2);

// 2] using Object.assign()

let student3 = Object.assign({}, student1);
student1.name = "Charlie";

console.log(student1.name);
console.log(student3.name);
console.log(student1 === student3);
