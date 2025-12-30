// const users = fetch("https://jsonplaceholder.typicode.com/users");
// // promise is working on it .. says go ahead guys I'll catch you in a while .
// // Pending . 
// console.log(users);

// grab the data from the api with fetch then convert it into json
// fetch returns a promise .
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(data => {
    // console.log(data);
    data.forEach(element => {
      console.log(element);
    })
  });

  // huge chain of thenables is not desirable .

  console.log(users);
  console.log("hello world");
  console.log("hello");
  console.log("he");
  console.log(".............................");
  console.log("+++++++++++++++++++");