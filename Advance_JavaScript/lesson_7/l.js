curriedAdd = x => y => z => x+y+z;

const first = curriedAdd(2);
const second = first(3);

console.log(second(4));

// partially applied funct. means in which we fix some arguments only and rest args later .

const updateElement = id => content => document.querySelector(`#${id}`).textContent = content;

const updateText = updateElement('header');

console.log(updateText);
console.log(updateText('hello Khushi'));