// Below code represents when we are fetching data from asyncFuntion1() we dont wait for promise to get resolved instead we move forward and start fetching data 2 ...since both the fucntions have same timeout therefore both data will be available at the same time [ try changing timeouts of both by reducing and increasing one of the other ]
function asyncFunction1() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("some info. 1");
      resolve("SUCCESS 1");
    }, 4000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("some info. 2");
      resolve("SUCCESS 2");
    }, 1000);
  });
}

console.log("Fetching data 1 ..");
let promise = asyncFunction1();
promise.then((res) => {
  console.log(res);
});


console.log("Fetching data 2 .....");
let promise2 = asyncFunction2();
promise2.then((res) => {
  console.log(res);
});

// Foundation - Promise Chaining concept arises when we want that data 2 needs to be fetched only when we have data 1 .
// real life scenario we enter password only once we have correctly entered username 