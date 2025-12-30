const car = {

  doors: 2,
  seats: "vinyl",

  get seatMaterial(){
    return this.seats;
  },

  set seatMaterial(material){
    this.seats = material;
  }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar); // this refers to luxury car here

console.log(Object.keys(luxuryCar));