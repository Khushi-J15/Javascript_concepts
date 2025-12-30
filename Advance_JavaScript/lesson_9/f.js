const initApp = () => {
  const multiplyBy10 = memoizedMultiplyBy10();
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(5));
  console.log(multiplyBy10(5));
}

document.addEventListener('DOMContentLoaded', initApp);

// memoization example
const memoizedMultiplyBy10 = () => {
  const cache = {};

  return (num) => {
    if(num in cache) {
      console.log("inside cache", cache);
      return cache[num];
    }
    // if the num is not presentin cache then calculate it and store it in cache
    const result = num * 10;
    cache[num] = result;
    return result + " not in cache";
  }
}