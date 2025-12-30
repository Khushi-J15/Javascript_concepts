// The Revealing Pattern is a variation of the module pattern . 

// iife creates a private scope 

const Game = (() => {
  let privateVar = 0;
  const current = () => { return privateVar };
  const increment = () =>{ privateVar+= 2 };
  const reset = () => { privateVar = 0 };

  // uses pointers 
  return {
    current : current,
    increment : increment,
    reset: reset
  }
})();

Game.increment();
console.log(Game.current());

// Game  is an anonymous function that is immediately invoked ((function() {...})()) to create a private scope for the module. Within this private scope, we define private variables privateVar and a private functions.  These variables and functions are not accessible from outside the module.
// Then, we define public methods (increment , current , reset) that have access to the private variables and function due to the closure created by the immediately invoked function. These public methods are exposed by returning an object literal from the function, which explicitly defines the public methods that can be accessed from outside the module.