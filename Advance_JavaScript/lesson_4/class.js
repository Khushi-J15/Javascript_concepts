class Pizza{
  constructor(pizzaSize){
    this.size = pizzaSize,
    this.crust = "original";
  }

  bake() {
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
  }
}

const p = new Pizza();
p.bake();

const p2 = new Pizza("cheese");
p2.bake();

class SpecialPizza extends Pizza{
  constructor(pizzaSize){
    super(pizzaSize);
    this.type = "the Works";
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
  }
}

const special = new SpecialPizza("medium");
special.slice();
