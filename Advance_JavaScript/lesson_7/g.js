const person = {
  alive: true
}

const musician = {
  plays: true
}

Object.setPrototypeOf(musician, person);

console.log(musician.plays);
console.log(musician.alive);
console.log("~~~~~~~~~~~~~~~~~~~~~");

// since "musician" does not have an "alive" property so JS looks it in next link in the chain [ walks up the chain ] to the "Person" [ or the parent it has inherited from ][or musician.__proto__]
// if not found there even then it goes to JS "Object" 
// JS have to walk up the proto chain to look for the target property .

const guitarist = {
  strings: 6,
  __proto__ : musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);

console.log(guitarist)

// No circular inheritance allowed
// single inheritance supported