// const getData = (id) => {
//   setTimeout(() => {
//     console.log("data " + id);
//   }, 2000);
  
// }

// getData(1);
// getData(2);
// getData(3);

function getData(id, getNextData){
  setTimeout(() => {
    console.log("data " + id);
    if(getNextData){
      getNextData();
    }
  }, 2000);
}

// CALLBACK HELL = nested callbacks [code looks complex and not readable to developers even]
getData(1, () => {
  console.log("getting data 2..");
  getData(2, () => {
    console.log("getting data 3....");
    getData(3, () => {
      console.log("getting data 4......");
      getData(4);
    });
  });
});