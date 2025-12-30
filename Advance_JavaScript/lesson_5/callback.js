function mainFunction(callback){
  console.log("Performing Operation .....");
  // callback("operation complete");
  setTimeout(function() {
    callback("Operation complete");
  }, 1000);
}

function callbackFunction(result){
  console.log("Result : " + result);
}

mainFunction(callbackFunction);


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


const myPromise2 = new Promise((resolve, reject) => {
  // some code that takes time, like loading data
  const error = false;
  if (error) {
    reject("No! rejected the promise..");
  }
  else {
    resolve("Yes! resolved  the promise.. :) ");
  }
});

console.log(myPromise2);