function mainFunction(callback){
  console.log("Performing Operation .....");
  // callback("operation complete");
  setTimeout(function() {
    callbackFunction("Operation complete");
  }, 1000);
}

function callbackFunction(callback2){
  console.log("Result : " + callback2);
  setTimeout(function() {
    callback2("second callback");
  }, 1000);
}

function callback2(res2){
  console.log("final : " + res2);
}

mainFunction(callbackFunction(callback2));


// const myPromise = new Promise((resolve, reject) => {
//   // some code that takes time, like loading data
//   const error = true;
//   if (error) {
//     reject("No! rejected the promise..");
//   }
//   else {
//     resolve("Yes! resolved  the promise.. :) ");
//   }
// });

// console.log(myPromise);


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

// console.log(myPromise2);