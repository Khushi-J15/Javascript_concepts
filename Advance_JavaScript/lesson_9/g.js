const initApp = () => {
  const memoizedMultBy10 = memoize(multiplyBy10);
  console.log(memoizedMultBy10(10));
  console.log(memoizedMultBy10(10));
  console.log(memoizedMultBy10(10));
  console.log(memoizedMultBy10(5));
  console.log(memoizedMultBy10(5));
}

document.addEventListener('DOMContentLoaded', initApp);


const multiplyBy10 = (num) => {
  return num * 10;
}

const add3 = (num1, num2, num3) => {
  return num1 + num2 + num3;
}

const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num);
}

// decorator function

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