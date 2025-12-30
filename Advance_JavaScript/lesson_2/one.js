const num = 43

const salary = 35000.0
const salary2 = 35000.094

console.log(num)
console.log(salary)
console.log(salary2)

const str = "43"
console.log(str == num)

// console.log(salary == salary2)

console.log(str + 7)
console.log(Number(str) + 7)
console.log(Number(true))

console.log(Number.parseFloat(salary2))
console.log(Number.parseFloat(salary2).toFixed(2)) // returns string

const num2 = 45.66756
console.log(Number.parseInt(num2))
console.log(Number.parseInt(str))

console.log("+++++++++++++")
console.log(Number.isNaN("Kj"))
console.log(Number.isNaN(98))
console.log(isNaN("kj"))