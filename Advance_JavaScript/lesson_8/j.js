const ext = '.jsonn';
// const ext = '.json';
// const ext = '/';

// ES6 Maps
const myMap = new Map();
myMap.set('.css', 'text/css');
myMap.set('.js', 'text/javascript');
myMap.set('.json', 'application/json');
myMap.set('.jpg', 'image/jpeg');

// || setting default value . 
console.log(myMap.get(ext) || 'text/html');