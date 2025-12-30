// Types of ways to define an IIFE 

(() => {
  // stuff
})();

(function () {
  // stuff 
})();

(function myIIFE() { // by giving an IIFE name we can call it recursively 
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log("finish");
})(num = 0);

// Perks of using an IIFE
// 1] Isolated Declarations within the function , i.e doesn't pollute global properties and methods .

console.log("`````````````Perks`````````````````");

const x = "global";
const hello = () => "hello global";

(() => {
  const x = "iife";
  const hello = () => "hello iife";

  console.log(x);
  console.log(hello());
})();

console.log(x);
console.log(hello());

console.log("`````````````Private variables and methods from Closure`````````````````");

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`I have ${num} credits.`);
  return () => { counter+= 2; credits(counter)}
})();

increment();
increment();
console.log(increment());


console.log("`````````````The Module pattern`````````````````");

const Score = (() => {
  let count = 0;
  
  return {
    current : () => { return count },
    increment : () =>{ count+= 2 },
    reset : () => { count = 0 }
  }
})();

Score.increment();
console.log(Score.current());