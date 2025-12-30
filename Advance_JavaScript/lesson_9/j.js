const initApp = () => {
  const memoizedFib = memoize(fib);
  console.log(memoizedFib(40));
  console.log("```````````");
  console.log(memoizedFib(40));
  console.log("```````````");
  console.log(memoizedFib(40));
  console.log("```````````");
   
  // below calls will take time on each call , in contrast while using memoization  if the value is present in cache then it will be fetched in no time . 

  // console.log(fib(40)); 
  // console.log(fib(40));
  // console.log(fib(40));
}

document.addEventListener('DOMContentLoaded', initApp);

const fib = (pos) => {
  if(pos < 2) return pos;
  return fib(pos - 1) + fib(pos - 2);
}

// decorator function , memoization applied to functions with multiple parameters .

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if(args.toString() in cache){
      console.log(cache , " inside cache");
      return cache[args.toString()];
    }

    const result = fn(...args);
    cache[args.toString()] = result;
    return result + " not in cache";
  }
}

// although memoization is a great technique but it is achieved at the cost of memory , therfore we have to make sure that we don't keep many data in the cache rather keep frequently accessed imp. data only .  