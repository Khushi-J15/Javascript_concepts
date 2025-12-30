class Pizza{
  crust = "original";
  #sauce = "traditional"; //private
  #size;
  constructor(pizzaSize){
    this.#size = pizzaSize;
  }
  hereYouGo(){
    console.log(`here's your ${this.crust} ${this.#sauce} ${this.#size} pizza.`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
// console.log(myPizza.#sauce);