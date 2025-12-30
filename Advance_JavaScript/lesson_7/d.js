// How object constructor is diff. from prototype
function Person(first, last){
  this.first = first;
  this.last = last;
}

const father = new Person("Sandeep", "jain");
const mother = new Person("Moni", "jain");

// Hence We can not add a new property to an existing object constructor . 
Person.nationality = "Indian";

console.log(father);
console.log(mother);

console.log("~~~~~~~~~~~~~~~~~~~~");


// Prototypes
function Person2(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const father2 = new Person2("Sandeep", "jain");
const mother2 = new Person2("Moni", "jain");


Person2.prototype.nationality = "English";
console.log(father2.nationality);
console.log(mother2);
