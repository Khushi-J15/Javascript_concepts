// Deep copy using spread operator

// Deep copy share no refrences .

let student1 = {
  name : "Khushi",
  age: 24
}

let student2 = {...student1};

student1.name = "Hitansh";
console.log(student1 === student2);
console.log("student 1 name is : " , student1.name);
console.log("student 2 name is : " , student2.name);

// Pure functions

const deepClone = (obj) => {
  if(typeof obj !== "object" || obj === null) return obj;

  // create an object or array to hold values 
  const newObject = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    const value = obj[key];
    newObject[key] = deepClone(value);
  }

  return newObject;
}

let scoreArray = [34, 76, 20]; 

const pureFunction = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
}

const pureScoreHistory = pureFunction(scoreArray, 18, deepClone);

console.log(pureScoreHistory);
console.log(scoreArray);