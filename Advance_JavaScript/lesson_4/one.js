const testScore = 78;

let myGrade = testScore > 90 ? "A"
  : testScore > 80 ? "B"
    : testScore > 70 ? "C"
      : testScore > 60 ? "D"
        : "F";

console.log(`my grade is ${myGrade}`);

let nam = prompt("please enter your name");
console.log(nam);

// nullish coalescing operator.
console.log(nam ?? "You didn't passed any name");