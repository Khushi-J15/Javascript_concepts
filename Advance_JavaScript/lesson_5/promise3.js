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

// console.log("Fetching data 1 ..");
// let p1 = asyncFunction1();
// p1.then((res) => {
//   console.log("Fetching data 2...");
//   let p2 = asyncFunction2();
//   p2.then((res) => {});
// });

// Easy syntax then callback hell
console.log("Fetching data 1 ..");
asyncFunction1().then((res) => {
  console.log("Fetching data 2...");
  asyncFunction2().then((res) => {});
});

