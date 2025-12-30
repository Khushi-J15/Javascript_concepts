
// console.log(buttonElement);

function doSomething() {
  alert("khushi");
};

document.addEventListener("readystatechange", (event) =>{
  if(event.target.readyState === "complete"){
    console.log("readystate : complete");
    initApp();
  }
});

const initApp = () => {
  const div = document.querySelector(".box");
  div.addEventListener("click", (event) => {
    div.classList.toggle("blue");
    div.classList.toggle("pink");
  });
};

const object = {
  name : "Dave",
  hello: function() {
    console.log(this.name);
  }
};

sessionStorage.setItem("store", object);