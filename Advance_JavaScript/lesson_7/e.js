const person = {
  alive: true
}

const musician = {
  plays: true
}

console.log(person.alive);
console.log(musician.alive);

//  means musician inherits from person
 musician.__proto__ = person;


console.log(person.alive);
console.log(musician.alive);

console.log(musician);
// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__ .


// The __proto__ property is a simple accessor property on Object.prototype consisting of a getter and setter function .