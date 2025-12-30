let globalVar = 1;

const parentFunction = function () {
  let localVar = 2;
  console.log(globalVar);
  console.log(localVar);
  console.log("++++++++++");

  const childFunction = function () {
    let childVar = 3;
    console.log(globalVar);
    console.log(localVar);
    console.log(childVar);
  }

  childFunction();
}

parentFunction();
parentFunction();
// notice the difference between upcoming examples .