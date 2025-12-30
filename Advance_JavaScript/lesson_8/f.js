
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

console.log("pizza" ,myPizza);

const mySalad = createSalad("large", "olives");

console.log("salad" ,mySalad);

const addTopings = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
}

const shallowPizzaClone = (fn) => {
  return (obj, array) => {
    const newObj = {...obj};
    return fn(newObj, array);
  }
}

let addToppings2 = (pizza, toppings) => {
  pizza.toppings = [...pizza.toppings, ...toppings];
  return pizza;
}

addToppings2 = shallowPizzaClone(addToppings2);

const myPizza2 = createPizza("medium", "thin", "original");

const pizzaWithToppings = addToppings2(myPizza2, ["pepperoni", "olives", "cheese"])

console.log(pizzaWithToppings);
console.log(myPizza2 === pizzaWithToppings);