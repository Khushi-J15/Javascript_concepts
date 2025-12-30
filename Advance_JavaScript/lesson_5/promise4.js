
function getData(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data " + id);
      resolve("Success !!!");
    }, 3000);
  });
}

// CALLBACK HELL = nested callbacks [code looks complex and not readable to developers even]
// getData(1, () => {
//   console.log("getting data 2..");
//   getData(2, () => {
//     console.log("getting data 3....");
//     getData(3, () => {
//       console.log("getting data 4......");
//       getData(4);
//     });
//   });
// });


// Promise Chaining 

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   })
// })

getData(1).then(() => {
  return getData(2); // returns a promise
}).then(() =>{
  return getData(3);
}).then((res) => {
  console.log(res);
})