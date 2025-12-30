
const person = {
  name: "dora",
  hobbies : ["explore", "eat", "be-dumb"],
  hello : function(){
    console.log("hello myself dora");
  }
}

// sessionStorage.setItem("store", JSON.stringify(person));

// const sessionData = JSON.parse(sessionStorage.getItem("store"));

// console.log( sessionData);

localStorage.setItem("name", "John Doe");
console.log(localStorage.getItem("name"));