const vehicle = {
  wheels: 4,
  engine: function (){
    return "Vrooom";
  }
};

console.log(vehicle.wheels);

const truck = Object.create(vehicle); //Inheritance
truck.doors = 9;
console.log(truck);
console.log(truck.engine());

const car = Object.create(vehicle);
car.engine = function() {
  return "dhoom machale"; //overriding
}

console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function(){
  return "Shhhhhhhhh...";
};

console.log(tesla.engine());

console.log("++++++++++++");

const band = {
  vocals: "Sanam Puri",
  guitar: "arijit",
  bass: "ranbir",
  drums: "nick jonas"
};
// destructuring object . 
// const {vocals, guitar, bass, drums} = band;
// console.log(vocals);
// console.log(bass);

// const {vocals : myVariable} = band;
// console.log(myVariable);

function sings({vocals}) { return `${vocals} sings`};

console.log(sings(band));