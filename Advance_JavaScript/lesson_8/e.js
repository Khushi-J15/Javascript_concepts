// Composition uses has-a reln

// Reusability: Individual behaviors can be reused across different objects.

const prepare = () => {
  return {
    prepare : () => console.log('Preparing...')
  }
}

const bake = () => {
  return {
    bake : () => console.log('Baking...')
  }
}

const toss = () => {
  return {
    toss : () => console.log("Tossing...")
  }
}

const ready = () => {
  return {
    ready : () => console.log("Ready :)")
  }
}

const stuff = () => {
  return {
    stuff() { console.log("Stuffing the crust...") }
  }
}

const butter = () => {
  return {
    butter() { console.log("Buttering the crust...") }
  }
}

const createPizza = (size, crust, sauce) => {
  const pizza = {
    size : size,
    crust : crust,
    sauce : sauce,
    toppings : []
  }

  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready()
  }
}

const createSalad = (size, dressing) => {
  return {
    size : size,
    dressing: dressing,
    ...prepare(),
    ...toss(),
    ...ready()
  }
}

const createStuffedButterPizza = (pizza) => {
  return {
    ...pizza,
    ...stuff(),
    ...butter()
  }
}

const myPizza = createStuffedButterPizza(createPizza("medium", "thin", "original"));

console.log(myPizza);

const mySalad = createSalad("large", "olives");

console.log(mySalad);

myPizza.prepare()
myPizza.bake()
myPizza.ready()

mySalad.prepare();
mySalad.toss();
mySalad.ready();

const addTopings = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
}

const toppingPizza = createPizza("medium", "thin", "original");
console.log(toppingPizza);
console.log(addTopings(toppingPizza, "pepperoni"));
console.log(addTopings(toppingPizza, "cheese"));
console.log(toppingPizza);