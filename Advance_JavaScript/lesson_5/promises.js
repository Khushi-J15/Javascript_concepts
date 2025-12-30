// Fetch Api gives the promise 
// Promises 

const myPromise = new Promise((resolve, reject) => {
  // some code that takes time, like loading data
  const error = true;
  if (error) {
    reject("No! rejected the promise..");
  }
  else {
    resolve("Yes! resolved  the promise.. :) ");
  }
});

console.log(myPromise);

// thenables 
myPromise.then(value => {
  return value + 1;
})
  .then(newValue => {
    console.log(newValue);
  })
  .catch(err => {
    console.error(err);
  })

  // A thenable implements the .then() method, which is called with two callbacks: one for when the promise is fulfilled, one for when it's rejected. Promises are thenables as well. 