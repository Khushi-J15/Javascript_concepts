// async funct. returns a promise . 

// async function hello () {
//   console.log(" hello duniya walooo");
// }

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data");
      resolve("success 200");
    }, 2000);
  });
}

// note : whenever timeout() is invloved then func. becomes asynchronous .  

// await api(); // we know that this is a asynchronous call as it will take some time to execute .

async function getWeatherData() {
  await api();
  await api();
}

const getData = (dataId) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// easy to read code 
// wherever we have await we wait for that  
// async function getAllData() {
//   console.log("getting data 1....");
//   await getData(1);
//   console.log("getting data 2....");
//   await getData(2);
//   console.log("getting data 3....");
//   await getData(3);
//   console.log("getting data 4....");
//   await getData(4);
//   console.log("getting data 5....");
//   await getData(5);
// }

// IIFE autmoatically executed when defined 
(async function getAllData() {
  console.log("getting data 1....");
  await getData(1);
  console.log("getting data 2....");
  await getData(2);
  console.log("getting data 3....");
  await getData(3);
  console.log("getting data 4....");
  await getData(4);
  console.log("getting data 5....");
  await getData(5);
})();

//  pausing execution with the "await" keyword until a promise resolves.

