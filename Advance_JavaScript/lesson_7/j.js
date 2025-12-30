const countTo12 = (num = 1) => {
  while(num <= 12){
    console.log(num);
    num++;
  }
}
countTo12();

const TwoTable = (num = 1) => {
  while(num <= 10){
    console.log(`2 x ${num} = ` + num * 2);
    num++;
  }
}

TwoTable();

const array = [];

const fibo = (num) => {
  array[0] = 0;
  array[1] = 1;
  let i = 2;

  while(i <= num){
    array[i] = array[i-1] + array[i-2];
    i++;
  }

  console.log(array[i-1]);
}

fibo(8);

const fiboRecur = (pos)=> {

  if(pos < 2) return pos;

  return fiboRecur(pos-1) + fiboRecur(pos-2);

}

console.log(fiboRecur(8));

// one line function 
const fib = pos => pos < 2 ? pos : fib(pos-1) + fib(pos-2);

console.log(fib(8));

// Real life example of recursion is an api call, parser . 