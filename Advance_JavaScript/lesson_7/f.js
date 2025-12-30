const person = {
  alive: true
}

const musician = {
  plays: true
}

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) == musician.__proto__);

console.log(musician.alive);