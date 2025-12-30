const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val);

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length;

const wordCount = pipe(
  splitOnSpace,
  count
);

console.log(wordCount(lorem));

// palindrome
const pal1 = "taco cat";
const pal2 = "Mom";
const pal3 = "Deekd";

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe (
  splitOnSpace,
  join,
  lower 
);

const rev = pipe (
  fwd,
  split,
  reverse,
  join
);

console.log(fwd(pal1) === rev(pal1))
console.log(fwd(pal2) === rev(pal2))
console.log(fwd(pal3) === rev(pal3))

const str = "khushi jain";
console.log(lower(str));
console.log(str);
