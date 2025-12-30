  const add = (() => {
  let counter = 0; // private var.
  console.log("inside add() ");

    return () =>{
      counter++;
      console.log(counter);
    } // this function has closure over the private counter scope

  })();

  add();
  add();
  add();

  // "add" is just a variable holding a function 
  console.log(add); // add function returns an anonymous arrow function.

  let func = add();
 

// IIFE -> Immediately Invoked Function Expression OR Self Invoking Function , note that they run only once .