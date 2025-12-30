const myArray = [8];

const secondArray = undefined;
console.log(myArray);
// console.log(secondArray.length); 
// can't access the property of null


console.log(myArray && myArray.length ? true : false);

console.log(secondArray && secondArray.length ? true : false);

// optional chaining
console.log(myArray?.length ? true : false);
console.log(secondArray?.length ? true : false);

const arr = [{"id" : 1}, {"name" : "kj"}];

console.log(arr?.[1]?.name ? true : false);
console.log(arr?.[0]?.id);

// You can use null coalescing operator , too .
console.log(arr?.[1]?.id ?? "No id property");

// If you are completely unsure of what you are getting from an API e.g. instead of an array if we are getting a string 

apiReturnedArray = "DaveKhushi";

console.log(Array.isArray(apiReturnedArray))
// below code doesn't works 
console.log(apiReturnedArray?.length ? true : false);
