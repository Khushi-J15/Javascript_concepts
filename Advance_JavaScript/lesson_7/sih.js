let globalVar = 0;

let buttonElement = document.getElementById("btn1");
let paraElement =  document.getElementById("para");

buttonElement.addEventListener("click", ()=> {
 paraElement.innerText = responseGenerate();
});

function responseGenerate(){
  globalVar++;
  if(globalVar === 1){
    return "Hello Shubham";
  }
  else if(globalVar === 2){
    return "Hello Cat";
  }
  else{
    return "Sorry I didn't recognized you";
  }
}

