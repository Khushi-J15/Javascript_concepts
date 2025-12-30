function Animal(species){
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `${this.species} is walking`;
};

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());
console.log(Bear.__proto__);

// The prototype property is where inheritable props and methods are 

class Vehicle {
  constructor(){
    this.wheels = 4;
  }
  ready() {
    return "Vehicle";
  }
}

class MotorCycle extends Vehicle {
  constructor(){
    super();
    this.wheels = 2;
  }

  wheelie(){
    return "MotorCycle";
  }
}

let bike = new MotorCycle();
console.log(bike.ready());